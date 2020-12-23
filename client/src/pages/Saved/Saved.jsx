import React, { useEffect } from 'react';
import API from '../../utils/API'
import { useGlobalContext } from '../../utils/GlobalContext';

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
          <li key={book._id} className="books-listItem">
            <span>
              <h2>{book.title}</h2>
              <h3>{book.authors}</h3>
              <img src={book.image ? book.image : null} alt={book.title} />
              <p>{book.description}</p>
              <a href={book.link} target="_blank" rel="noreferrer" >Book Info</a>
              <button onClick={() => deleteBook(book._id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBooks;