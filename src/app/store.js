import {configureStore} from "@reduxjs/toolkit";
import dateFormatterReducer from '../features/dateFormatter/dateFormatterSlice';

export default configureStore({
    reducer: {
        dateFormatter: dateFormatterReducer,
    },
})