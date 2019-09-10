import evaluate from './utils/calculate'
import { willItExport } from './utils/calculate'

import './index.css'

console.log(willItExport)

const logStyle = `padding: 10px 20px;font-size: 1.5em;color: #fff;background: linear-gradient(-45deg, #ee7752, #e73c7e);background-size: 100% 100%;text-shadow: 2px 1px #333;`
console.log("before things break?")
console.log(`%c 2 + 2 is ${evaluate("2 + 2")} `, logStyle)

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault()
  const num1 = e.target.num1.value
  const num2 = e.target.num2.value
  const operator = e.target.operator.value

  const result = evaluate(`${num1} ${operator} ${num2}`)
  document.querySelector("#sum").textContent = result
})