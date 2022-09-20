import React from 'react'
import ItemList from '../components/ItemList'
// import { getItems } from '../components/Products'

const ItemListContainer = () => {
    return (
        <>
            <div id='divItemListContainer'>
                <div className='divCatalogoProvisorio'>
                    <ItemList/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer