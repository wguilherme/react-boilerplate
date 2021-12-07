import "./styles.scss"
import IInput from "./inteface"

function InputSelect(props: any) {

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

    <div id="component-input-select" className="form-floating mb-4">
      <select {...register(name)}>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option value="option3"  >option3</option>
      </select>
      <label htmlFor={name} > {label}</label>
    </div >

  )

}

export default InputSelect