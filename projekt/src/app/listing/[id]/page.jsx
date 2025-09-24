import {cookies} from "next/headers";

export default async function ProductDetail({ params}) {
    const { id } = params;

    const cookieStore =  cookies();
    const token = cookieStore.get("Id_token")?.value;
    const isLoggedIn = Boolean(token);
    
    const res = await fetch(`http://localhost:4000/api/v1/listings/${id}`,{
      headers:{
        Authorization: `Bearer ${token}`,
      },
    });


    if(!res.ok) {
        return<div>Error:can not find listing</div>;

    }

 const listing = await res.json();
 

    return(
        <div style = {{padding: "2rem"}}>
<img src={listing.asset?.url}
alt={listing.title}
style={{maxWidth: "100%", height: "auto"}}
/>
<h1>{listing.title}</h1>
<p>{listing.description}</p>

{isLoggedIn && (
    <button>forsla byt</button>
)}


        </div>
    )

}