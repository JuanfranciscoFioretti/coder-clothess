import React from 'react'

const HeaderBar = () => {
    return (
        <>
            <div id='divHeaderBar'>
                <select className="form-select form-select-sm" id='selectOrderBy' aria-label=".form-select-sm example">
                    <option selected>Order by</option>
                    <option value="1">Price: low to high</option>
                    <option value="2">Price: high to low</option>
                    <option value="3">Most wanted</option>
                </select>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>   
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </>
    )
}

export default HeaderBar