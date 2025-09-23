"use client"
 export default function Pagination({ totalItemsPage, itemsPerPage, currentPage, onPageChange}){

    const totalPages = Math.ceil(totalItemsPage / itemsPerPage);
    if(totalPages <= 1) return null;

    return(
        <div className="pages">
            <button 
            className="pages_button" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled= {currentPage === 1} 
            >
                Prev
                
                </button>


{Array.from({ length: totalPages}, (_, i) => i + 1).map((page) => (
    <button
    key={page}
     className={`pages_button ${page === currentPage ? "pages_button--active" : ""}`}
    onClick={() => onPageChange(page)}
    >
        {page}


    </button>


))}

<button className="pages_button" 
onClick={() => onPageChange(currentPage + 1)}
disabled={currentPage === totalPages}
>
    Next

</button>
</div>
    );
 }