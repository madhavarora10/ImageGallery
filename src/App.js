import { useDispatch, useSelector } from "react-redux"
import { fetchImages } from './Components/redux/slice/Api'
import{fetchQueryImages} from './Components/redux/slice/QueryApi'
import { React, useEffect, useState } from 'react'
import Card from './Components/PhotosComponent/Card'
import Modal from './Components/Modal/Modal'
import SearchBar from './Components/Search/SearchBar'
import NavBar from './Components/NavBar/NavBar'
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const count=1;
  const [modalState, SetmodalState] = useState(false)
  const [id, Setid] = useState('')
  const [query, Setquery] = useState(null)





  const modalHandler = (() => {
    SetmodalState(true)
  })
  const modalRemoveHandler = (() => {
    SetmodalState(false)
  })

  function imageId(id) {
    if (id)
      Setid(id);
  }
  function getQuery(query) {
    if (query)
      Setquery(query);  
  }

  useEffect(() => {

    dispatch(fetchImages());
 
  }, [count])

  if( query) {dispatch(fetchQueryImages(query))
    Setquery('')}

 
  return (

    <div
      className="AppContainer">
      <NavBar />
      <SearchBar getQuery={getQuery}/>
      
      <div className="App">
        {
        state.AllimagesReducer?.isLoading && <div style={{
          color: 'white'
        }}>Loading...</div>
        }

       
        {modalState && <Modal
          id={id}
          onclick={modalRemoveHandler}
        />}

        {state.QueryApiReducer.data?
        state.QueryApiReducer.data?.results.map((imageUrl) => (
            <Card
              getId={imageId}
              key={imageUrl.id}
              onclick={modalHandler}
              url={imageUrl} />
          )):
          state.AllimagesReducer.data?.map((imageUrl) => (
            <Card
              getId={imageId}
              key={imageUrl.id}
              onclick={modalHandler}
              url={imageUrl} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
