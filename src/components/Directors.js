import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director) =>{
        return(
          <div key={director.name}>
            Name:{director.name}
            <ul> Movies:
              {director.movies.map((movie)=>{
                return(
                  <li key={movie}>{movie}</li>
                )
              })}</ul>
            </div>
        )
      })}
    </div>
  )
}

export default Directors;
