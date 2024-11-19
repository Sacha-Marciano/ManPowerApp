import "./Main.css";

import UserForm from "../UserForm/UserForm";
import AdminTable from "../AdminTable/AdminTable";

function Main({ isAdmin, professionList, users, onSubmit }) {
  return (
    <main className="main">
      {!isAdmin ? (
        <section className="main__user-section">
          <h2 className="main__title">! ברוכים הבאים לאתר עבודות מזדמנות</h2>
          <p className="main__paragraph">
            אתה חייל משוחרר וחוסך כסף לטיול הגדול ? אתה באמצע התואר וצריך כסף
            אבל לא מקבלים אותך לסטאג׳ ? אתה אולי מחפש הכנסה צדדית פעם ב ?
            משימתנו לעזור לך
          </p>
          <p className="main__paragraph">
            הגעת למקום הנכון ! השאר פרטים, בחר בתחומים שהכי מתאימים לך ונחזור
            אליך כל פעם שתיהיה הזדמנות מתאימה לך
          </p>
          <UserForm professionList={professionList} onSubmit={onSubmit} />
        </section>
      ) : (
        <section className="main__admin-section">
          <AdminTable professionList={professionList} users={users} />
        </section>
      )}
    </main>
  );
}

export default Main;
