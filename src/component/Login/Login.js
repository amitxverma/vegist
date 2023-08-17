import { useState } from "react";
import { useNavigate } from "react-router";
import SignInImage from "../../assets/images/element/signin.svg";
import LogoIcon from "../..//assets/images/logo-icon.svg";
import Joi from "joi-browser";

export default function Login() {
  let nav = useNavigate();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required(),
  });

  function valiDateForm() {
    const result = Joi.validate(loginFormData, schema, { abortEarly: false });
    const { error } = result;

    if (!error) {
      setError({
        ...error,
        email: "",
        password: "",
      });
      return null;
    } else {
      let errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setError({
        ...error,
        email: errorData.email,
        password: errorData.password,
      });
      console.log(error);
    }
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    valiDateForm();
    // let form = document.querySelector("form.login-form");
    // let formData = new FormData(form);

    // let email = formData.get("userEmail");
    // let pass = formData.get("userPass");

    // let res = await fetch("https://fakestoreapi.com/users");
    // let data = await res.json();

    // let auth = data.filter(
    //   (item) => email === item.email && pass === item.password
    // );

    // if (auth.length) {
    //   function setCookie(cname, cvalue, exdays) {
    //     const d = new Date();
    //     d.setTime(d.getTime() + exdays * 60 * 1000);
    //     let expires = "expires=" + d.toUTCString();
    //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //   }
    //   setCookie("userId", email, 1);
    //   nav("/home");
    // }
  };

  return (
    <main>
      <section className="vh-xxl-100">
        <div className="container h-100 d-flex px-0 px-sm-4">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-12">
              <div className="bg-mode shadow rounded-3 overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                    <div className="p-3 p-lg-5">
                      <img src={SignInImage} alt="" />
                    </div>
                    ``
                    <div className="vr opacity-1 d-none d-lg-block"></div>
                  </div>

                  <div className="col-lg-6 order-1">
                    <div className="p-4 p-sm-7">
                      <a href="index.html">
                        <img
                          className="h-50px mb-4"
                          src={LogoIcon}
                          alt="logo"
                        />
                      </a>

                      <h1 className="mb-2 h3">Welcome back</h1>
                      <p className="mb-0">New here? Create an account</p>

                      <form className="mt-4 text-start login-form">
                        <div className="mb-3">
                          <label className="form-label">Enter email id</label>
                          <input
                            type="email"
                            name="userEmail"
                            className="form-control"
                            onChange={(e) => {
                              setLoginFormData({
                                ...loginFormData,
                                email: e.target.value,
                              });
                            }}
                          />
                          {error.email && (
                            <p style={{ color: "red" }}>{error.email}</p>
                          )}
                        </div>

                        <div className="mb-3 position-relative">
                          <label className="form-label">Enter password</label>
                          <input
                            className="form-control fakepassword"
                            type="password"
                            name="userPass"
                            id="psw-input"
                            onChange={(e) => {
                              setLoginFormData({
                                ...loginFormData,
                                password: e.target.value,
                              });
                            }}
                          />
                          <span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                          </span>
                          {error.password && (
                            <p style={{ color: "red" }}>{error.password}</p>
                          )}
                        </div>

                        {/* <div className="mb-3 d-sm-flex justify-content-between">
                                                    <div>
                                                        <input type="checkbox" className="form-check-input" id="rememberCheck" />
                                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me?</label>
                                                    </div>
                                                    <a href="forgot-password.html">Forgot password?</a>
                                                </div> */}

                        <div>
                          <button
                            type="submit"
                            onClick={HandleSubmit}
                            className="btn btn-primary w-100 mb-0"
                          >
                            Login
                          </button>
                        </div>

                        {/* <div className="position-relative my-4">
                                                    <hr />
                                                    <p className="small bg-mode position-absolute top-50 start-50 translate-middle px-2">Or sign in with</p>
                                                </div>


                                                <div className="vstack gap-3">
                                                    <a href="#" className="btn btn-light mb-0"><i className="fab fa-fw fa-google text-google-icon me-2"></i>Sign in with Google</a>
                                                    <a href="#" className="btn btn-light mb-0"><i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>Sign in with Facebook</a>
                                                </div> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
