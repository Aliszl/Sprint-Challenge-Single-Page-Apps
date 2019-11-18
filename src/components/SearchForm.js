import React, { useState } from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <input
          placeholder="search"
          value={props.searchValue}
          onChange={event => props.handleChange(event)}
        />
      </form>
    </section>
  );
}
