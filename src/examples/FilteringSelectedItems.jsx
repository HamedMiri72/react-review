import React, { useState } from 'react'

export default function FilteringSelectedItems() {

    const allTags = ["React", "Vue", "Angular", "Svelte"];

    const [selected, setSelected] = useState(["React"]);

    const available = allTags.filter((tag) => !selected.includes(tag));
    

  return (

    <div className='bg-amber-900'>

        <h1>Selected: {selected.join(",") || None}</h1>
        <h2>Add More:</h2>

        {available.map((tag) => (
           <button key={tag} onClick={() => setSelected([...selected, tag])}>
                <p>{tag}</p>
           </button>
        ))}
        

    </div>
  )
}
