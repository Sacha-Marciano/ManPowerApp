import { useState } from "react";
import "./UserForm.css";

function UserForm({ professionList, onSubmit }) {
  const [profession, setProfession] = useState(professionList[0]);
  const [data, setData] = useState({
    email: "",
    telephone: "",
    name: "",
    profession: [],
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfChange = (evt) => {
    const { value } = evt.target;
    setProfession(value);
  };

  const handleProfClick = () => {
    data.profession.push(profession);
    setProfession("");
  };

  const _handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="modal__form-container">
      <form className="modal__form" onSubmit={_handleSubmit}>
        <label className="modal__label">
          שם מלא*
          <input
            className="modal__input"
            id="name-register-id"
            placeholder="Name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <label className="modal__label">
          מייל*
          <input
            className="modal__input"
            id="email-register-id"
            placeholder="Email"
            type="email"
            required
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label className="modal__label">
          טלפון*
          <input
            className="modal__input"
            id="telephone-id"
            placeholder="Telephone"
            type="tel"
            required
            name="telephone"
            value={data.telephone}
            onChange={handleChange}
          />
        </label>
        <label className="modal__label">
          מקצוע*
          <select
            className="modal__dropdown"
            onChange={handleProfChange}
            value={profession}
            name="profession"
          >
            {professionList.map((item) => {
              return (
                <option
                  key={Math.random()}
                  className="modal__option"
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
          <button
            className="modal__add-profession"
            type="button"
            onClick={handleProfClick}
          >
            הוסף מקצוע
          </button>
        </label>
        <ul className="modal__professions">
          {data.profession.length > 0
            ? data.profession.map((item) => {
                return (
                  <li key={Math.random()} className="modal__profession">
                    {item}
                  </li>
                );
              })
            : ""}
        </ul>
        <button type="submit" className="modal__button-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
