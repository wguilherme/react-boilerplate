import "./styles.scss"
import IInput from "./inteface"

function Input(props: IInput) {

  const { name, label, placeholder, type = "string" } = props

  return (

    <div className="form-floating">
      <input type={type}
        id={name}
        value={name}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
      <label htmlFor="floatingInputValue">Input with value</label>
    </div>

  )

}

export default Input