import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'
import Recommend from '../Components/Recommend'
import Sidebar from '../Components/Sidebar_Components/Sidebar'
import products from '../Assets/DB/data';
import Card from '../Components/Card';

export default function Home() {
const [selectedCategory, setSelectedCategory] = useState(null);
const [query, setQuery] = useState("");
const handleInputChange = (e) => {
    setQuery(e.target.value);
};
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
 );
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
   }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommend handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}


