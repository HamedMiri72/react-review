import React from 'react'
import { useState } from 'react';

export default function () {

    const [search, setSearch] = useState("");

    const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Charger" },
    ];

    const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <h2>Product Search</h2>
        <input 
        type="text"
        placeholder='Search Product ...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
             {filteredProducts.map((product) => (
                <li key={product.id}>{product.name}</li>

        ))}
        </ul>
       
    </div>
  )
}
