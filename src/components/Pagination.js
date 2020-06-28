import React from 'react'
import './Pagination.css'

const Pagination = ({ gotoPrevPage , gotoNextPage})=>
{
	return(
		<div className='btn' >
         {gotoPrevPage && <button onClick={gotoPrevPage}>Prev</button> }
         {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
        </div> 
		);
}

export default Pagination;