import { QueryClient } from "@tanstack/react-query";
import { FetchResult } from "../lib/FetchResult";

export interface Data {
  id: number;
  name: string;
}

function wait(number: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, number);
  });
}

export class Repository {
  queryClient = new QueryClient();

  getEntity = (id: number) => {
    return new FetchResult<Data>(
      this.queryClient,
      async () => {
        await wait(1000);
        return {
          id: id,
          name: "Cool Entity",
        };
      },
      ["entity", id]
    );
  };
}
