"use client";

 import { useActionState, useEffect, } from "react";
import SearchAction from "./search-action";

 export default function SearchForm() {
    const [formState, formAction, pending] = useActionState(SearchAction, null);
   
    useEffect(() => {
        if(formState !== null){
            console.log("Search results:", formState);

        }

    }, [formState]);


    return(
        <>
        <form action={formAction} className="search-form">
            <div className="search_input">
                <label>
<input type="search" name="keyword" placeholder="Search" disabled={pending}/>

</label>
 </div>

</form>



{formState !== null && (
    <>
    {Array.isArray(formState) && formState.length > 0 && (
        <ul className="search_list">
            {formState.map((item) => (
                <li key={item.id} className="search_item">
{item.asset?.url && (
    <img src={item.asset.url} alt={item.title} className="item_details"/>

)}
<div className="details">
<h3>{item.title}</h3>
<p>{item.description}</p>
<p><strong>Kategori</strong> {item.category}</p>
<p><strong>Lokation</strong> {item.location}</p>
<p><strong>Pris:</strong> {item.price} </p>

</div>
 </li>
 ))}

</ul>
    ) 

}
    </>
)}
     </>
    );
 }