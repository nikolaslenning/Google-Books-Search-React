import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <h3 className="text-light"htmlFor="search">Search Books:</h3>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Book"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;