import React, { useState } from 'react'
import API from '../../utils/API'
import SearchForm from '../SearchForm/SearchForm'
import BookDetail from '../BookDetail/BookDetail'

function BookContainer() {

  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

 async function searchBooks(query) {
   await API.search(query)
    
      .then(res => setResult(res.data.items))
      // .then(res => console.log(res.data.items))
      .catch(err => console.log(err));
    };
    console.log(result)
    // console.log(result[0].volumeInfo.title)

  
  const handleInputChange = event => {
    const value = event.target.value;
    setSearch(value);
    console.log(value)
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  const handleFormSubmit = event => {
    event.preventDefault();
    searchBooks(search);
    console.log(search)
  };

  return (
    <>
      {/* {result} */}
     
      <SearchForm
        value={search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <BookDetail results={result}/>
      {/* {result==='' ? (<BookDetail
        title={result.volumeInfo}        
      />) : (<div>No result</div>)} */}
       
    </>

  )
}

export default BookContainer