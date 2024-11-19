import "./Header.css";

function Header({ isAdmin, toggleAdmin }) {
  return (
    <header className="header">
      <h1 className="header__title">ManPowerApp</h1>
      <button
        className="header__user_switch"
        type="button"
        onClick={toggleAdmin}
      >
        {isAdmin ? "Switch to user" : "Switch to admin"}
      </button>
    </header>
  );
}

export default Header;
