import { cookies } from "next/headers";
import SimilarProducts from "@/components/similar-product";
import "./listing.scss";

export const metadata = {
    title: "listing detail",
    description: " listing detail",

};


export default async function ProductDetail({ params }) {
  const { id } = params;

  const cookieStore = cookies();
  const token = cookieStore.get("Id_token")?.value;
  const isLoggedIn = Boolean(token);



  const res = await fetch(`http://localhost:4000/api/v1/listings/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  if (!res.ok) {
    return <div>Error:can not find listing</div>;

  }

  const listing = await res.json();


  return (
    <div className="listing-container">
      <div className="image-container">
        <div>
          <img src={listing.asset?.url}
            alt={listing.title}

          />
        </div>
        <div>
          <h1>{listing.title}</h1>
          <p>{listing.description}</p>
        </div>
      </div>
      {isLoggedIn && (
        <button className="swap-button">forsla byt</button>
      )}
      <div className="similar-products">
        <SimilarProducts currentId={id} />

      </div>
    </div>
  );

}