import {configureStore} from '@reduxjs/toolkit';
import recordReducer from './Slices/recordSlice';


export const store = configureStore({
    reducer: recordReducer
});
