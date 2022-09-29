import React, { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import { getItems } from '../components/Products'

const ItemListContainer = () => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        setData(getItems())
    }, ([]))

    return (
        <>
            <div id='divItemListContainer'>
                <div className='divCatalogoProvisorio'>
                    <ItemList data={data}/>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer