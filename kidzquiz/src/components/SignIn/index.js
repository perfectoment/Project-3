import React from "react";
import "./style.css";



function SignInForm(props) {

  return (


    <section class="container">
      <div class="row">
        <div class="card text-center col-sm-8 m-5 p-3" id="dataform">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" id="email-input" type="text" placeholder="Text input" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
            <p class="help is-success"></p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" id="password-input" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <p class="control">
              <p class="control">
                <button class="button is-info is-outlined is-rounded" id="signupbutton">SIGN UP</button>
                <button class="button is-info is-outlined is-rounded" id="loginbutton">LOG IN</button>
              </p>
            </p>
          </div>
        </div>
      </div>
    </section >

  );

}

export default SignInForm;
