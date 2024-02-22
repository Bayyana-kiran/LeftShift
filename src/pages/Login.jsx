// LoginPage.js

import Header from "../components/Header";
import Login from "../components/Login";

import "../App.css"; // Import the CSS file for login page styles

export default function LoginPage() {
  return (
    <div className="login-page-container">

      <div className="login-content">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/registration"
        />
        <Login />
      </div>
    </div>
  );
}
