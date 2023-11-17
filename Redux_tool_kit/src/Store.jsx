import { configureStore } from "@reduxjs/toolkit";
import Redux_Slice from "./Redux_Slice";


const Store=configureStore({
    reducer:{
        Shopping:Redux_Slice,
    }
})

export default Store;