import React, { useState } from 'react'

export default function FilterExample() {

    const fruits = ["Apple", "Bannana", "Ornge", "Mango", "Blueberry","apprica"];

    const [search, setSearch] = useState("");

    const filterdFruits = fruits.filter((fruit) => 
        fruit.toLowerCase().includes(search.toLowerCase())
    );

    

  return (
    <div>
        <h2>Filter Example</h2>
        <input
         type="text"
         placeholder='search fruit...'
         value={search}
         onChange={(e) => setSearch(e.target.value)} 
        />
        <ul>
            {filterdFruits.map((fruit) => (
                <li key={fruit}>{fruit}</li>
            ))}
        </ul>


    </div>
  )
}
