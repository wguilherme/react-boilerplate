import "./styles.scss"
import IInput from "./inteface"

import { useForm } from "react-hook-form";

function Input(props: IInput) {

  const {
    name,
    label,
    placeholder,
    type = "string",
    autoComplete,
    register,
    ...rest
  } = props

  return (

    <div id="component-input" className="form-floating mb-4">
      <input type={type}
        id={name}
        name={name}
        {...register(name)}
        className="form-control"
        placeholder={placeholder}
        autoComplete={autoComplete === "off" ? "nope" : autoComplete}
        {...rest}
      />
      <label htmlFor={name} > {label}</label>
    </div >

  )

}

export default Input