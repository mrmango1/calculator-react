import { motion } from "framer-motion"
import "../css/Display.css"

const Display = ({ input }) => (
  <div className="input">
    <motion.p>{input}</motion.p>
  </div>
)

export default Display
