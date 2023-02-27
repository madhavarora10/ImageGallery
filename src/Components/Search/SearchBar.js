import {useState}  from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



export default function CustomizedInputBase(props) {
  const[searchQuery,setsearchQuery]=useState("");
      

  const handleInput=(e)=>{
  setsearchQuery(e.target.value)};
  const handleEnter=(e)=>{
    if(e.key==='Enter')
    e.preventDefault()
    props.getQuery(searchQuery)
  }
 
  return (
    <Paper
  
      component="form"
      sx={{ p: '2px 5px', display: 'flex', alignItems: 'center', width: 400,margin:'15px' }}
    >
      <InputBase
  value={searchQuery}
  onKeyDown={handleEnter}
      onChange={handleInput}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search  ' }}
        
      />
      <IconButton
    
      onClick={()=>{props.getQuery(searchQuery);
        }}
       type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon
      
          
         />
      </IconButton>
     
    </Paper>
  );
}