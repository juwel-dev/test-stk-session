type TSuccess<T> = {
  status: "success";
  data: T;
};

type TError = {
  status: "error";
  error: Error;
};

export type TResponse<T> = TSuccess<T> | TError;
