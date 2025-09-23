"use server"

export default async function SearchAction(prevState, formData) {
    const {keyword} = Object.fromEntries(formData);
    const normalizedKeyword = keyword?.trim().toLowerCase();

    if(!normalizedKeyword ) return [];

    const apiurl = process.env.BASE_API_URL;
    if(!apiurl) {
        console.error("BASE_API_URL is not set. check ypu file");
    }

    try{
        const response = await fetch(`${apiurl}/listings`,{
            cashe: "no-store",
        });

        if(!response.ok) {
            console.error("failed to fetch listings:",
                response.status, response.statusText);
                return [];
            
        }
    

const listings = await response.json();
console.log("from api", listings)

return listings.filter((item) =>


[item.title, item.description, item.category, item.location, item.price?.toString()]
.filter(Boolean)
.some((field) =>
field.toString().toLowerCase().includes(normalizedKeyword)
)
);


} catch(error){
    console.error("SearchAction error:", error);
    return [];
}

}






   /* const response = await fetch(`${process.env.BASE_API_URL}/listings`, {
        cache: "no-store",

    });

    if(!response.ok) {
        console.error("Fail to fetch listings:", response.statusText);
        return [];

    }

    const listings = await response.json();

    const filteredListings = listings.filter((item) =>
        item.title?.toLowerCase().includes(normalizedKeyword) ||
    item.description?.toLowerCase().includes(normalizedKeyword) ||
    item.category?.toLowerCase().includes(normalizedKeyword) ||
    item.location?.toLowerCase().includes(normalizedKeyword) ||
    item.price?.toLowerCase().includes(normalizedKeyword) 
);

return filteredListings;

}*/