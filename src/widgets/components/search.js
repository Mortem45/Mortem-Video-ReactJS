import React from 'react';
import './search.css';
const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
    >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu pelicula favorita"
      className="Search-input"
      name="search"
      />
  </form>
)

export default Search;

