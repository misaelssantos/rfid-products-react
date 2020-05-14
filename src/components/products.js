import React from 'react'

const Products = ({ products }) => {
    return (
    <div>
        <center><h1>Lista de Compras</h1></center>
        {products.map((product) => (
        <div className="card" key={product.tag}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Products