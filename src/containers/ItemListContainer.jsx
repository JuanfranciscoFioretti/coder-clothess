import React from 'react'
import ItemList from '../components/ItemList'

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