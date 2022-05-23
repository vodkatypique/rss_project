import { useState } from "react";
import UserDataService from "../services/user.services";

export default function NewUser(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    

    const renderForm = (
        <div className="form">
          <form   onSubmit={(e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const username = target.username.value; // typechecks!
    const password = target.password.value; // typechecks!
    UserDataService.create({username, password})
    .then((response: any) => console.log(response.data))
  }}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="username" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

      return (
        <div className="app">
          <div className="login-form">
            <div className="title">New User</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        </div>
      );
}