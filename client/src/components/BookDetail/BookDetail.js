import React from "react";

function BookInfo(props) {

  function onClick(e) {
    e.preventDefault();

    fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'x-www-form-urlencoded',
      },
      body: JSON.stringify({
        title: props.volumeInfo.title,
        authors: props.volumeInfo.authors,
        description: props.volumeInfo.description,
        image: props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : null,
        link: props.volumeInfo.infoLink,
      })
    }).then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <li key={props.accessInfo.id}>
      <h2>{props.volumeInfo.title}</h2>
      <h3>{props.volumeInfo.authors}</h3>
      <p>{props.volumeInfo.description}</p>
      <img src={props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : null} alt={props.volumeInfo.title} />
      <a href={props.volumeInfo.infoLink} target="_blank" rel="noreferrer" >Book Info</a>
      <button onClick={onClick}>Save</button>
    </li>
  )
}

function BookDetail(props) {
  return (
    console.log({ ...props.results }),
    <ul className="" >
      {props.results.map(result => (
          <BookInfo {...result} />
        ))}
    </ul>
  );
}

export default BookDetail;