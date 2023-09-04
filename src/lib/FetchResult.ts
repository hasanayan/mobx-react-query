import { QueryClient, QueryObserver } from "@tanstack/react-query";
import {
  IQueryResource,
  createObservableQuery,
} from "./create-observable-query";

export class FetchResult<TData> {
  resource: IQueryResource<TData, unknown>;
  constructor(
    queryClient: QueryClient,
    queryFn: () => Promise<TData>,
    key: unknown[]
  ) {
    const observable = new QueryObserver<TData>(queryClient, {
      queryFn,
      queryKey: key,
    });

    this.resource = createObservableQuery(observable);
  }

  get current() {
    return this.resource.current();
  }
}
