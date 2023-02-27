import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//ACTION
export const fetchQueryImages= createAsyncThunk('FetchQueryApi',async(query)=>{
    const response=await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=XemaArmYRTe_GrgDYicKhiHg5ZL9psY9dSPpj2evdjw`);
    return response.json();
})
const QueryApiSlice=createSlice({
    name:'QueryImages',
    initialState:{
        isLoading:false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQueryImages.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload

        });
        builder.addCase(fetchQueryImages.pending,(state,action)=>{
            state.isLoading=true;
        });
    }


});
export default QueryApiSlice.reducer;