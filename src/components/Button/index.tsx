
// import 'components/Button/styles.css';

interface ButtonProps {
  label?: string,
  size?: "small" | "medium" | "large"
  submit: any,
  onClick?: () => void;
}

const Button = ({
  size = "medium",
  label,
  submit = "button",
  ...props
}: ButtonProps) => {

  return (
    <div className="d-grid mx-auto ">
      <button type={submit}
        className={`btn btn-primary btn-${size == "small" ? "sm" :
          size == "medium" ? "md" : "lg"}`}>
        {label || "Confirmar"}
      </button>
    </div >

  );
}

export default Button
