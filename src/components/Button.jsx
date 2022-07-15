import { motion } from "framer-motion"
import "../css/Button.css"

const Button = (props) => {
  const isOperator = (c) =>
    isNaN(c) && c !== "." && c !== "=" ? "operator" : ""

  const handleClick = () => () => props.handdleClick(props.children)

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`button-container ${isOperator(props.children)}`.trimEnd()}
      onClick={handleClick()}
    >
      {props.children}
    </motion.button>
  )
}

export default Button
