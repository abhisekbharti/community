// import { createReducer } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectUser:[""]
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        udpateUser:(state,action)=>{state.selectUser=action.payload}
    }
})

export const {udpateUser} = userSlice.actions;

export default userSlice.reducer; 