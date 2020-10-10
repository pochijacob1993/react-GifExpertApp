import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  const [Categories, setCategories] = useState([
    'Dragon Ball',]);
    // const handleAdd = () => {
    // setCategories([...categories, "One Piece"]);
    // console.log(categories);
  //  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />
        <ol>
          {
              Categories.map( ( category ) => (
              <GifGrid 
              key={ category }
              category={ category } />
        ))
        }
       </ol>
    </>
  );
};
export default GifExpertApp;