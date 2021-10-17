import "./styles.scss"
import IInput from "./inteface"

function Input(props: IInput) {

  const { name, label, placeholder, type = "string", autoComplete } = props

  return (

    <div id="component-input" className="form-floating mb-4">
      <input type={type}
        id={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
        autoComplete={autoComplete === "off" ? "nope" : autoComplete
        }
      />
      <label htmlFor={name} > {label}</label>
    </div >

  )

}

export default Input