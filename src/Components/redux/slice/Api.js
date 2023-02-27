import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//ACTION
export const fetchImages= createAsyncThunk('FetchApis',async()=>{
    const response=await fetch('https://api.unsplash.com/photos/?page=5&client_id=XemaArmYRTe_GrgDYicKhiHg5ZL9psY9dSPpj2evdjw&per_page=30');
    return response.json();
})
const apiSlice=createSlice({
    name:'allImages',
    initialState:{
        isLoading:false,
        data:null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchImages.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload

        });
        builder.addCase(fetchImages.pending,(state,action)=>{
            state.isLoading=true;
        });
    }


});
export default apiSlice.reducer;