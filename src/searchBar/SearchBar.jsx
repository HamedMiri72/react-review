
import Table from "./Table";
import {Users} from "./user"
import { useState } from 'react';

export default function SearchBar() {

    const [search, setSearch] = useState("");

    const keys = ["first_name", "last_name", "email"];
    
    // const filterUsers = Users.filter((user) => user.first_name.toLowerCase().includes(search.toLowerCase()));

    // const filterSearch = (data) => {
    //     return data.filter((data) => data.first_name.toLowerCase().includes(search.toLowerCase())
    //                                 || data.last_name.toLowerCase().includes(search.toLowerCase())
    //                                 || data.email.toLowerCase().includes(search.toLowerCase()));}

   const filterSearch = (data) => {
    return data.filter((item) => 
        keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase()))
    )
   }
    
  return (
   
   <div className="m-50 flex flex-col justify-center">

    <input 
    className="border-1 justify-center text-center px-5 py-2 rounded-2xl"
    placeholder="Search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    type="text" />

    {/* <ul className="text-center mt-1.5">
        {filterUsers.map((user) => (
            <li key={user.id} className="text-2xl font-light ">{user.first_name}</li>
        ))}
    </ul> */}

    <Table data={filterSearch(Users)}/>

   </div>
  )
}
