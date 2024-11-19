import { useState } from "react";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [professionList, setProfessionList] = useState([
    "מלצרות - אירועים",
    "מלצרות - פרטי",
    "בישול - אירועים",
    "בישול -פרטי",
    "הובלות",
  ]);
  const [users, setUsers] = useState([
    {
      email: "sacha@gmail.com",
      telephone: "050-123-4567",
      name: "Sacha",
      profession: ["מלצרות - פרטי", "הובלות"],
    },
    {
      email: "aaron@gmail.com",
      telephone: "050-123-4567",
      name: "Aaron",
      profession: [
        "מלצרות - אירועים",
        "מלצרות - פרטי",
        "בישול - אירועים",
        "בישול -פרטי",
        "הובלות",
      ],
    },
    {
      email: "noam@gmail.com",
      telephone: "050-123-4567",
      name: "Noam",
      profession: ["מלצרות - אירועים", "מלצרות - פרטי", "הובלות"],
    },
    {
      email: "miko@gmail.com",
      telephone: "050-123-4567",
      name: "Miko",
      profession: ["מלצרות - אירועים", "מלצרות - פרטי", "בישול - אירועים"],
    },
  ]);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  const handleUserSubmit = (data) => {
    setUsers([...users, data]);
  };

  return (
    <div className="page">
      <Header isAdmin={isAdmin} toggleAdmin={toggleAdmin} />
      <Main
        isAdmin={isAdmin}
        professionList={professionList}
        users={users}
        onSubmit={handleUserSubmit}
      />
    </div>
  );
}

export default App;
