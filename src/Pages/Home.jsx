import React, { useState } from 'react'
import "../CSS/Home.css" 
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase"

function Home() {
  const [lgform, setLgform] = useState(true);
  const [sgform, setSgform] = useState(false);

  /*=========== UseState for Login ===============*/

  const [lgemail, setLgemail] = useState("");
  const [lgpassword, setLgpassword] = useState("");

  /*=========== UseState for Signup ==============*/

  const [sgusername, setSgusername] = useState("");
  const [sgemail, setSgemail] = useState("");
  const [sgpassword, setSgpassword] = useState("");

  /*================================================ */

  const navigate = useNavigate();

  /* =================================== Signup (createUser) ====================== */

  const createUser = () => {
    createUserWithEmailAndPassword(auth, sgemail, sgpassword)
      .then((userCredential) => {
        // Signed up
        alert("User Created successfully, Login to use the BOT");
        const user = userCredential.user;
        // ...
        setSgusername("");
        setSgemail("");
        setSgpassword("");
        window.location.reload();
      })
      .catch((error) => {
        alert("User Already Exist or Bad Credentials");
        setSgusername("");
        setSgemail("");
        setSgpassword("");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  /*================================================= LOG-In(loginUser) ================================= */

  const loginUser = () => {
    signInWithEmailAndPassword(auth, lgemail, lgpassword)
      .then((userCredential) => {
        // Signed in
        alert("Logged-In Successfully");
        const user = userCredential.user;
        // ...
        setLgemail("")
        setLgpassword("")
        navigate("/chat-page")
      })
      .catch((error) => {
        alert("User doesn't exist or Wrong Credentials")
        const errorCode = error.code;
        const errorMessage = error.message;
        setLgemail("")
        setLgpassword("")
      });
  }



  return (
    <>
      <div className="hmmain">
        {/* ========================================== BOT LOGO ========================================== */}
        <div className="logbot">
          <img src="./ai-log.png" alt="AI-LOGO" id="botlog" />
        </div>

        {/* ========================================== SWITCH BUTTON ====================================== */}
        <div className="cb">
          <div className="swtbtn">
            <button
              className="swcl"
              onClick={() => {
                setLgform(true);
                setSgform(false);
              }}
            >
              Log-In
            </button>

            <button
              className="swcl"
              onClick={() => {
                setSgform(true);
                setLgform(false);
              }}
            >
              Sign-Up
            </button>
          </div>
          {/*======================================LOGIN FORM==============================================*/}

          {lgform && (
            <div className="lform">
              <div className="uname">
                <label htmlFor="">
                  Email<sup>*</sup>:
                </label>

                <input
                  type="email"
                  placeholder="Enter your valid mail"
                  required
                  className="linp"
                  value={lgemail}
                  onChange={(event) => {
                    setLgemail(event.target.value);
                  }}
                />
              </div>

              <div className="uname">
                <label htmlFor="">
                  Password<sup>*</sup>:
                </label>
                <input
                  type="password"
                  placeholder="Enter valid password"
                  required
                  className="linp"
                  value={lgpassword}
                  onChange={(event) => {
                    setLgpassword(event.target.value);
                  }}
                />
              </div>

              <button
                id="lsubtn"
                onClick={loginUser}
              >
                Submit
              </button>
              <h6
                style={{
                  alignSelf: "center",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                Note: Sign-Up before Log-In
              </h6>
            </div>
          )}

          {/*======================================SIGNUP FORM==============================================*/}

          {sgform && (
            <div className="lform">
              <div className="uname">
                <label htmlFor="">
                  Name<sup>*</sup>:
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  required
                  className="linp"
                  value={sgusername}
                  onChange={(event) => {
                    setSgusername(event.target.value);
                  }}
                />
              </div>

              <div className="uname">
                <label htmlFor="">
                  Email<sup>*</sup>:
                </label>
                <input
                  type="email"
                  placeholder="Enter valid email"
                  required
                  className="linp"
                  value={sgemail}
                  onChange={(event) => {
                    setSgemail(event.target.value);
                  }}
                />
              </div>

              <div className="uname">
                <label htmlFor="">
                  Password<sup>*</sup>:
                </label>
                <input
                  type="password"
                  placeholder="Enter strong password"
                  required
                  className="linp"
                  value={sgpassword}
                  onChange={(event) => {
                    setSgpassword(event.target.value);
                  }}
                />
              </div>

              <button onClick={createUser} className="sgbtn">
                Create Account
              </button>
              <h6
                style={{
                  alignSelf: "center",
                  color: "black",
                  fontWeight: "900",
                }}
              >
                Note: Log-In after Sign-Up
              </h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home
