import {
  QueryKey,
  QueryObserver,
  QueryObserverResult,
} from "@tanstack/react-query";
import { fromResource, IResource } from "mobx-utils";

export type IQueryResource<TData, TError> = IResource<
  QueryObserverResult<TData, TError>
>;

export function createObservableQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  observable: QueryObserver<TQueryFnData, TError, TData, TQueryData, TQueryKey>
): IQueryResource<TData, TError> {
  let unsubscribe: () => void | undefined;

  return fromResource<QueryObserverResult<TData, TError>>(
    (sink) => {
      // subscribe to the record, invoke the sink callback whenever new data arrives
      unsubscribe = observable.subscribe(sink);
    },
    () => {
      // the user observable is not in use at the moment, unsubscribe (for now)
      unsubscribe?.();
    },
    observable.getCurrentResult()
  );
}
``;
