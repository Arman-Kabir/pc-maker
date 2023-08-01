import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api';
import componentsReducer from './api/componentsSlice';

const store =  configureStore({
    reducer: {
        components: componentsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
