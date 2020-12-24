import React, { useEffect } from 'react';
import API from '../../utils/API'
import { useGlobalContext } from '../../utils/GlobalContext';
import "./Saved.css"

const ViewBooks = () => {
  const [state, dispatch] = useGlobalContext();
  console.log({ state })

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => fetchBooks())
      .catch(err => console.log(err));
  }

  async function fetchBooks() {
    try {
      const response = await fetch('/api/book');
      const json = await response.json();
      console.log({ json });

      dispatch({ type: 'setBooks', payload: json.data });
    } catch (err) {
      console.log({ err });
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="Todos">
      <h3 className="Todos-header">Saved Books</h3>
      <ul className="Todos-list">
        {state.books.map(book => (
          <div key={book._id} className="card text-center">
            <div className="card-header">
              <img src={book.image ? book.image : null} alt={book.title} />
            </div>
            <div className="card-body">
              <h2>{book.title}</h2>
              <h3>{book.authors}</h3>
              <p>{book.description}</p>
              <a href={book.link} target="_blank" rel="noreferrer" >Book Info</a>
              <br></br>
              <button className="btn btn-primary" onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ViewBooks;