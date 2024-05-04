import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterslice"
import todoReducer from "../features/todolist/todoslice"
import {countriesApi} from "../services/countries"
import { productsApi } from '../services/products'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    c:counterReducer,
    t:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})
setupListeners(store.dispatch)


