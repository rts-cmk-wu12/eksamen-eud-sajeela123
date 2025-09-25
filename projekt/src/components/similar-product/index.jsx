"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import "./similar.scss";




export default function SimilarProducts({ currentId }) {
    const [similarProducts, setSimilarProducts] = useState([]);



    useEffect(() => {
        async function fetchSimilar() {
            try {

                const response = await fetch(`http://localhost:4000/api/v1/listings`);
                const data = await response.json();

                const filtered = data
                    .filter(product => product.id !== parseInt(currentId))
                    .slice(0, 4);

                setSimilarProducts(filtered);

            } catch (error) {
                console.error("not any similar product", error);

            }

        }

        fetchSimilar();




    }, [currentId]);

    if (!similarProducts.length) return null;

    return (
        <div className="similar">
            <h2>Other items from this Swapper</h2>
            <div className="similar_products">
                {similarProducts.map(product => (
                    <Link key={product.id} href={`/products${product.id}`}>

                        <img className="similar-_image" src={product.asset.url} alt={product.title} />




                    </Link>
                ))}

            </div>
        </div>
    )


}