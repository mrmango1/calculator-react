import { motion } from "framer-motion"
import "../css/ButtonErease.css"

const ButtonErease = ({ handleClick, clearAll, children }) => {
  const clearDisplay = () => handleClick(clearAll)
  const classAll = () => (clearAll ? "clear-All" : "")

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`button-clear ${classAll()}`.trimEnd()}
      onClick={clearDisplay}
    >
      {children}
    </motion.button>
  )
}

export default ButtonErease
