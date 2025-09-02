
import {Users} from "./user"
import { useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const filtered = Users.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase()));
    
  return (
    <div className='m-50 flex flex-col'>
        <input 
        type="text" 
        placeholder='Search...'
        className='p-10 mb-[20px] text-[20px] border-1 text-center' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}   
        />
        <ul className='p-0 list-none text-center'>

            {filtered.map((user) => (
                <li className='mb-[20px] text-[25px] text-[#444] font-light' key={user.id}>{user.first_name}</li>
            ))}

        </ul>
    </div>
  )
}
