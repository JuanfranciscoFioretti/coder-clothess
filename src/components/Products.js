// import React from 'react'

export const items = 
    [{
        "id": "43",
        "title": "Colador de silicona",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMUvvz7CxWMszDFcC-2uSh-iBZ-LKvcDY-g&usqp=CAU",
    },
    {
        "id": "23",
        "title": "Cuchara de madera",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6rAvx8iGsdt3KTuobztgpjyGQxqTXH4pDQ&usqp=CAU",
    },
    {
        "id": "54",
        "title": "Juego de cubiertos",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://ae01.alicdn.com/kf/HTB1njnIXEWF3KVjSZPhq6xclXXaT/Juego-de-cubiertos-occidentales-de-acero-inoxidable-cuchara-tenedor-palillos-para-cocina-accesorios-de-fondo-para.jpg",
    },
    {
        "id": "76",
        "title": "Set de silicona",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmxBa4OpX37OHM2ySMHh9cXUg_kIET2UHoGg&usqp=CAU",
    },
    {
        "id": "41",
        "title": "Colador de silicona",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://gastronomiaycia.republica.com/wp-content/uploads/2022/01/escurridorsiliconaollapinza-680x555.jpg",
    },
    {
        "id": "64",
        "title": "Tabla colador",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://cdn.shopify.com/s/files/1/0615/5970/1682/products/picador3_529811d5-16fc-4ddd-af0a-2c9dd1751d01.jpg?v=1651947706",
    },
    {
        "id": "85",
        "title": "Picador de vegetales",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Sm-V_q1c1FHFiP6tSlaeEBftQppirMgNLg&usqp=CAU",
    },
    {
        "id": "69",
        "title": "Set de cuchillas",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3HyxnKUySMPKUo_-zhE1VAAHY28HqKs_uVg&usqp=CAU",
    },
    {
        "id": "34",
        "title": "Triturador",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1uxV_ILtK51njosb3kRyt3hXmj0PmTbPZQ&usqp=CAU",
    },
    {
        "id": "65",
        "title": "Espátula de silicona",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhPOawkW1H2CJtJGEyLrqideOPujN3Blrsg&usqp=CAU",
    },
    {
        "id": "79",
        "title": "Pincel de cocina",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5UGH8MNsufk_4A5O-wS_Os5YDJhwqSfB4Q&usqp=CAU",
    },
    {
        "id": "52",
        "title": "Pinzas de cocina",
        "price": 23,
        "description": "This product is the best in the market because there are no other headphones like this",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jJCTLr91aiITYobGfBzf_S3R_BTGAi0XoQ&usqp=CAU"
    }]

    export function getItems() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    }

// const Products = () => {
//     return (
//         <>
            
//         </>
//     )
// }

// export default Products