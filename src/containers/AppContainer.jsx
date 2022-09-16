import React from 'react'
import NavBar from '../components/NavBar'
import HeaderBar from '../components/HeaderBar'
import ItemListContainer from './ItemListContainer'
import ItemCount from '../components/ItemCount'

const AppContainer = () => {
    return (
        <>
            <div id='divAppContainer'>
                <NavBar/>
                <HeaderBar/>
                <ItemListContainer/>
                <ItemCount stock={10}/>
            </div>
        </>
    )
}

export default AppContainer