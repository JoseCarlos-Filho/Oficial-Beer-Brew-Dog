import React, { useState } from "react";
import InputText from "../../Utils/InputText.tsx";
import Button from "../../Utils/Button.tsx";

const passLogin = {
  user: "teste@teste.com.br",
  password: "123",
};
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function submitLogin() {
    alert(email);
    if (email == "") {
      setEmailError(true);
      setErrorMsg("O email deve ser digitado!");
    }

    if (email.length < 7) {
      setEmailError(true);
      setErrorMsg("O email deve ter mais de 7 caracteres!");
    }

    if (email == passLogin.user && password == passLogin.password) {
      //aqui redireciona para rota logada
      setEmail("");
      setPassword("");
      alert("Usuario logado com sucesso");
    } else {
      alert("Login falhou! Reveja os dados");
    }
  }

  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape bg-slate-800">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl">
              <p className="mb-8 text-2xl font-light text-center text-white">
                Login
              </p>
              <div className="mb-2">
                <InputText
                  placeholder="email"
                  id="login-with-bg-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <span>{errorMsg}</span>}
              </div>
              <div className="mb-2">
                <InputText
                  type="password"
                  placeholder="password"
                  id="login-with-bg-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <Button onClick={submitLogin} color="indigo" label="Validate" />
              </div>
              <div className="text-center">
                <a className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                  Create an account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
