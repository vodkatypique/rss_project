import { useState } from "react";
import JwtDataService from "../services/jwt.services";

export default function Login(){
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
    JwtDataService.create({username, password})
    .then((response: any) => response.data).then((data) => {
      localStorage.setItem('jwt', JSON.stringify(data));
      setIsSubmitted(true); e.preventDefault()})
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
        
          <div className="login-form">
            <div className="title">Sign In</div>
            {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          </div>
        
      );
}