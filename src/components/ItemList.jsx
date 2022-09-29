import React from 'react'
import Item from './Item'
import {  items } from './Products'

const ItemList = ({data = []}) => {
    return (
        <>
            <div className="row divItemList">
                
                {
                    items.map((item) => {
                        return <Item
                            stock={item.stock}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                        />
                    })
                }
            </div>
        </>
    )
}

export default ItemList