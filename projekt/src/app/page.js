"use client"

import {useState, useEffect} from "react";
import Pagination from "@/components/pagination";
import SearchForm from "@/components/search";
import Link from "next/link";
import "./page.scss";


 

 export default function ProductCard(){
  const[products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const[currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/listings")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products", error));

  }, []);

  useEffect(() => {
    setCurrentPage(1);

  }, [search]);

const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase())

);

const startIndex = (currentPage - 1) * itemsPerPage;
const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

if(!products.length) return <div>Loading.....</div>;

return(
  <div>
  <div className="search_bar">
  <SearchForm search={search} setSearch={setSearch}/>
  </div>

  <div className="product">
  {currentItems.length > 0 ?(
    currentItems.map((product) => (
      <Link href={`/listing/${product.id}`}key={product.id}  className= "product_card">
        <img className="product_img" src={product.asset.url} alt={product.title}/>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
   </Link>
    ))
  ) : (

<div className="result">
No products match your search

</div>
)}
</div>

{filteredProducts.length > itemsPerPage && (
  <div className="pagination-container">
  <Pagination
  totalItemsPage={filteredProducts.length}
  itemsPerPage={itemsPerPage}
 currentPage={currentPage}
  onPageChange={setCurrentPage}
  />
  </div>
)}
</div>
);

 }