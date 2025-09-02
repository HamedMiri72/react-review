import React from 'react'

export default function CardProduct() {

    const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 200 },
    { id: 3, name: "Keyboard", price: 150 },
    ];

  return (
    <div className='bg-amber-500 max-w-2xl'>
        <h1>Card Product</h1>

        {products.map((product) => (
            <div key={product.id} className='flex flex-col justify-center items-center'>
                <h3>{product.name}</h3>
                <h5>{product.price}</h5>
            </div>
        ))}

    </div>
  )
}
