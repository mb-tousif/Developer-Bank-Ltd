import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const transactionApi = createApi({
    reducerPath: "transactionApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://dbl-server.vercel.app/api/v1",
    }),
    endpoints: (builder) => ({
      getAllTransactions: builder.query({
        query: () => ({
          url: "allTransactions",
          method: "GET",
        }),
      }),
      postTransaction: builder.mutation({
        query: (data) => ({
          url: "transaction",
          method: "POST",
          body: data,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }),
      }),
      updateTransaction: builder.mutation({
        query: ({id, data}) => ({
          url: `transaction/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        }),
      }),
      deleteTransaction: builder.mutation({
        query: (id) => ({
          url: `transaction/${id}`,
          method: "DELETE",
        }),
      }),
    }),
  });
  export const { useGetAllTransactionsQuery, useUpdateTransactionMutation,usePostTransactionMutation, useDeleteTransactionMutation } = transactionApi;