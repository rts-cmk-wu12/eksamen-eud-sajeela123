"use client";
 export default function SearchForm({ search, setSearch }) {
    function handleChange(e) {
        setSearch(e.target.value);

    }

    return(
        <form className="search_form" onSubmit={(e) => e. preventDefault()}>
<input
type="text"
value={search}
onChange={handleChange}
placeholder="search"
className="search_input"

/>

        </form>
    )
 }