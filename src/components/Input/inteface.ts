import { InputHTMLAttributes } from "react"
export default interface Input extends InputHTMLAttributes<HTMLInputElement> {
  name?: string,
  label?: string,
  // type?: "text" | "email" | "number" | "password" ,
  type?: string,
  placeholder?: string,
  autoComplete?: string,
  register?: any
}