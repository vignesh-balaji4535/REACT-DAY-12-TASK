import { createSlice } from "@reduxjs/toolkit";
import Data from "../ProductDeatails.json"



const initialState={
    ProductData:Data[0].products,
    CartData:[],
    CartCount:0,
}

const Redux_Slice=createSlice({
    name:"Shopping",
    initialState,
    reducers:{
        setCartData:(state,action)=>{
            state.CartData=[...state.CartData,action.payload];
            

        },
        removeCartData:(state,action)=>{
            state.CartData=action.payload;

        },
        setCartCount:(state,action)=>{

            if(action.payload=="+"){
                state.CartCount=state.CartCount+1;
            }
            else if(action.payload=="-"){
                state.CartCount=state.CartCount-1;
            }

        }

    }
})

export const {setCartCount,setCartData,removeCartData}=Redux_Slice.actions;

export default Redux_Slice.reducer;