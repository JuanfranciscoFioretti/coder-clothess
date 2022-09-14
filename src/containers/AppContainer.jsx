import React from 'react'
import NavBar from '../components/NavBar'
import HeaderBar from '../components/HeaderBar'
import ItemListContainer from './ItemListContainer'

const AppContainer = () => {
    return (
        <>
            <div id='divAppContainer'>
                <NavBar/>
                <HeaderBar/>
                <ItemListContainer/>
            </div>
        </>
    )
}

export default AppContainer