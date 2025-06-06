import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { PATHS } from "../../paths";

const baseQuery = fetchBaseQuery({
  baseUrl: `${PATHS.api}`,
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
