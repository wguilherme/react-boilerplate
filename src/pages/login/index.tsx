import "./styles.scss"
import { useForm } from "react-hook-form";

import Input from 'components/Input/index';
import Button from "components/Button";
import Form from "components/Form/useForm";
import auth from "services/auth";
import api from "services/api";
import { useHistory } from 'react-router-dom';

// import ILogin from "./interface"
import Toast from '../../components/Toast/index';
import { useState } from "react";

function Login() {

  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => setShowToast(!showToast);

  const router = useHistory()

  const handleLogin = async (credentials: string) => {


    try {
      const res: any = await api.post("/user/login", credentials)
      await auth.onSignIn(res.data.token)

      setShowToast(true)
      router.push("/dashboard")
    } catch (error) {
      // 
      console.log("Handle login error", error)

      return error

    }
  }

  const onSubmit = (cretentials: any) => handleLogin(cretentials)
  // console.log(watch("email"))
  return (
    <div id="page-login" className="w-100 h-100">
      <div className="form-container">
        <h1>Seja bem vindo (a)</h1>
        <h2>Acesse a plataforma com seu login e senha</h2>

        <Form onSubmit={onSubmit} >

          <Input
            name="email"
            required={true}
          />

          <Input
            name="password"
            autoComplete="off"
            type="password"
            label="Digite sua senha"
            placeholder="Digite sua senha"
          />

          <div className="d-grid gap-2 mx-auto ">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
      <Toast show={showToast} onClose={toggleToast} />
    </div>
  )
}
export default Login