import { observer } from "mobx-react";
import { FetchResult } from "../lib/FetchResult";
import { Data } from "../repositories/Repository";

interface EntityCardProps {
  fetchResult: FetchResult<Data>;
  onClickToggle: () => void;
  isMounted?: boolean;
}
export function EntityCard({
  fetchResult,
  onClickToggle,
  isMounted,
}: EntityCardProps) {
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <button onClick={onClickToggle}>toggle</button>
      {isMounted && <EntityCardInner fetchResult={fetchResult} />}
    </div>
  );
}

interface EntityCardInnerProps {
  fetchResult: FetchResult<Data>;
}
const EntityCardInner = observer(function EntityCardInner({
  fetchResult,
}: EntityCardInnerProps) {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {fetchResult.current.isLoading && <span>...loading</span>}
      {fetchResult.current.isFetching && <span>...fetching</span>}
      {fetchResult.current.data && <span>{fetchResult.current.data.name}</span>}
    </div>
  );
});
