import { useState } from "react";
import "./AdminTable.css";

function AdminTable({ professionList, users }) {
  const [display, setDisplay] = useState(users);
  const [searchQuery, setSearchQuery] = useState(professionList[0]);

  const handleSearchChange = (evt) => {
    const { value } = evt.target;
    setSearchQuery(value);
  };

  const handleSearch = () => {
    console.log(users.filter((user) => user.profession.includes(searchQuery)));
    setDisplay(users.filter((user) => user.profession.includes(searchQuery)));
  };

  return (
    <section className="admin">
      <div className="admin__actions">
        <select
          className="admin__dropdown"
          onChange={handleSearchChange}
          value={searchQuery}
        >
          {professionList.map((item) => {
            return (
              <option
                key={Math.random()}
                className="admin__option"
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
        <button className="admin__search" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="admin__table">
        {display.map((user) => {
          return (
            <div key={Math.random()} className="admin__user-data">
              <p className="admin__user-info">{user.name}</p>
              <p className="admin__user-info">{user.telephone}</p>
              <p className="admin__user-info">{user.email}</p>
              <ul className="admin__user-professions">
                {user.profession.map((item) => {
                  return (
                    <li key={Math.random()} className="admin__user-professions">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AdminTable;
