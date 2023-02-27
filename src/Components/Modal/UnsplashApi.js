import axios from 'axios'
import {React, useEffect,useState} from 'react'

const GetSinglePhoto=((id)=>{
    
    const[imageData ,SetimageData]=useState([]);

useEffect(() => {
    axios.get("https://api.unsplash.com/photos/"+id+"/?client_id=XemaArmYRTe_GrgDYicKhiHg5ZL9psY9dSPpj2evdjw")
    .then((response)=>{ 
        SetimageData(response.data);
})
}, [])
return imageData;
})


export {GetSinglePhoto};