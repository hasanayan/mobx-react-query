import { useMemo, useState } from "react";
import { EntityCard } from "../components/EntityCard";
import { Repository } from "../repositories/Repository";

const repository = new Repository();

export default function Home() {
  const fetchResult1 = useMemo(() => repository.getEntity(3), []);
  const fetchResult2 = useMemo(() => repository.getEntity(3), []);

  const [isMounted1, setIsMounted1] = useState(false);
  const [isMounted2, setIsMounted2] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <EntityCard
        fetchResult={fetchResult1}
        isMounted={isMounted1}
        onClickToggle={() => setIsMounted1((state) => !state)}
      />
      <EntityCard
        fetchResult={fetchResult2}
        isMounted={isMounted2}
        onClickToggle={() => setIsMounted2((state) => !state)}
      />
    </div>
  );
}
