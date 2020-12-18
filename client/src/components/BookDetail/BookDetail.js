import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <h3>{props.title}</h3>
    </div>
  );
}

export default BookDetail;