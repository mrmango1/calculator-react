import "../css/Calculator.css"
import Button from "./Button"
import ButtonErease from "./ButtonErease"
import Display from "./Display"
import { useState } from "react"
import { evaluate } from "mathjs"

const noDigitNumbers = "No se ha digitado nada"

const Calculator = () => {
  const [input, setInput] = useState("")
  const [lastSymbol, setLastSymbol] = useState("")

  const addInput = (value) => {
    const MATH_OPERATORS = ["+", "-", "*", ".", "/"]
    const symbolRepeat = (e) => MATH_OPERATORS.includes(e)
    const addSymbol = symbolRepeat(value) ? value : lastSymbol
    const display = input + ""
    console.log(lastSymbol)
    switch (true) {
      case display == noDigitNumbers && !symbolRepeat(value):
        setLastSymbol(addSymbol)
        setInput(value)
        break
      case display.length >= 17:
        break
      case display.length == 0 && symbolRepeat(value):
        break
      case symbolRepeat(display.slice(-1)) && symbolRepeat(value):
        break
      case lastSymbol === "." && value === ".":
        break
      default:
        setLastSymbol(addSymbol)
        setInput((p) => p + value)
        break
    }
  }
  const clearInput = (value) => {
    if (value) {
      setInput("")
      setLastSymbol("")
    } else {
      setInput((p) => (p + "").slice(p.lenght, -1))
    }
  }

  const calculateOperation = () =>
    input === noDigitNumbers
      ? setInput("")
      : input
      ? setInput((p) => evaluate(p))
      : setInput(noDigitNumbers)

  return (
    <div className="calculator-container">
      <Display input={input} />
      <div className="row">
        <Button handdleClick={addInput}>1</Button>
        <Button handdleClick={addInput}>2</Button>
        <Button handdleClick={addInput}>3</Button>
        <Button handdleClick={addInput}>+</Button>
      </div>
      <div className="row">
        <Button handdleClick={addInput}>4</Button>
        <Button handdleClick={addInput}>5</Button>
        <Button handdleClick={addInput}>6</Button>
        <Button handdleClick={addInput}>-</Button>
      </div>
      <div className="row">
        <Button handdleClick={addInput}>7</Button>
        <Button handdleClick={addInput}>8</Button>
        <Button handdleClick={addInput}>9</Button>
        <Button handdleClick={addInput}>*</Button>
      </div>
      <div className="row">
        <Button handdleClick={calculateOperation}>=</Button>
        <Button handdleClick={addInput}>0</Button>
        <Button handdleClick={addInput}>.</Button>
        <Button handdleClick={addInput}>/</Button>
      </div>
      <div className="row">
        <ButtonErease handleClick={clearInput} clearAll={true}>
          CE
        </ButtonErease>
        <ButtonErease handleClick={clearInput} clearAll={false}>
          ⌫
        </ButtonErease>
      </div>
    </div>
  )
}

export default Calculator
