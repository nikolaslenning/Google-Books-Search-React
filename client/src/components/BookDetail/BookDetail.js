import React from "react";

// function BookDetail(props) {
//   return (
//     <div className="text-center">
//       <h3>{props.title}</h3>
//     </div>
//   );
// }

// export default BookDetail;

function BookDetail(props) {
  return (
    <ul className="list-group search-results">
      {
      // console.log(props.results[0].volumeInfo),
      props.results.map(result => (
         
        // console.log({...result.volumeInfo}),

        <li key={result.accessInfo.id} className="list-group-item">
          <img alt="Book Cover" src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : null } className="img-fluid" />
          <h1>Title: {result.volumeInfo.title}</h1>
          <h2>Author: {result.volumeInfo.authors}</h2>
          <div>Description: {result.volumeInfo.description}</div>
          <h3>Link: <a href={result.volumeInfo.infoLinks}>Google Books</a></h3> 
        </li>
      ))}
    </ul>
  );
}

export default BookDetail;
// [9].volumeInfo.imageLinks.smallThumbnail