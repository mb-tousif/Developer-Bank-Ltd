import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { transactionApi } from '../features/transactions/transactionAPI';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [transactionApi.reducerPath]: transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    transactionApi.middleware
  ),
});
