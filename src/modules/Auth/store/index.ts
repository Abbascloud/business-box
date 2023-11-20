import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:{
            firsName:"Jhon",
            secondName:"Douwh"

        }
    },
    reducers:{
        setUser(state, action){
            state.user =  action.payload;
        }
    }
});

export default authSlice.reducer;
export const {setUser} = authSlice.actions;