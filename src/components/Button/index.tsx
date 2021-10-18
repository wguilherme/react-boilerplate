
// import 'components/Button/styles.css';

interface ButtonProps {
  label?: string,
  size?: "small" | "medium" | "large"
  submit: boolean
  onClick?: () => void;
}

const Button = ({
  size = "medium",
  label,
  ...props
}: ButtonProps) => {

  return (
    <div className="d-grid mx-auto ">
      <button type="submit" className={`btn btn-primary btn-${size == "small" ? "sm" :
        size == "medium" ? "md" : "lg"}`}>

        {label || "Confirmar"}
      </button>
    </div >

  );
}

export default Button
