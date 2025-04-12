import React from "react";
import { useState } from "react";

import { getAllUsers } from "../client/client";
import { useAuth } from "../provider/authProvider";

const capitalize = function(name) {
  return name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
} 

const suspendUser = (name) => {
  console.log(name);
}

const deleteUser = (id, people, setPeople) => {
  setPeople(
    people.filter(
      (item) => (item.id != id)
    )
  )
  console.log("delete user");
}

export default function UserList( props ) {
  const { token } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [people, setPeople] = useState([]);

  React.useEffect(() => {
    getAllUsers(token).then(function(res) {
      console.log(res.data)
      const data = []
      res.data.forEach((item) => {
        data.push(item);
      })
      setPeople(data);
    }).catch((e) => {
      console.log(e);
    });
  }, []);

  console.log(people)

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  // Displaying items based on the chosen filters and typed text
  const displayedItems = people
    .filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

  return (
    <div className="h-screen">
      <h1 className="px-10 pt-10 pb-5 text-white font-medium text-lg">Users</h1>

      <div className="ml-10 bg-white rounded-md overflow-y-scroll">
        <ul role="list" className="px-5 py-2 divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <input
              type="text"
              id="search"
              className="p-2 bg-gray-50 border-gray-300 rounded-md "
              placeholder="Search Users"
              onChange={handleSearch}
            />
          </li>
          {displayedItems.map((person) => (
            <li
              key={person.email}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={person.profilepic}
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {capitalize(person.name)}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {person.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <span>
                  <button onClick={() => suspendUser(person.id, people, setPeople)} className="rounded-lg bg-yellow-400 hover:bg-yellow-500 hover:text-white px-5 py-2 mr-2 text-sm font-medium text-white">
                    Suspend
                  </button>
                  <button onClick={() => deleteUser(person.id, people, setPeople)} className="rounded-lg bg-red-500 hover:bg-red-600 hover:text-white px-5 py-2 text-sm font-medium text-white">
                    Delete
                  </button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
