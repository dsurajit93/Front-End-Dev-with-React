import React, { useState, useRef } from "react";

function Calculator() {
  let [result, setResult] = useState(0);
  let numOneRef = useRef(null);
  let numTwoRef = useRef(null);
  let operatorRef = useRef(null);

  function calculateResult(e) {
    e.preventDefault()
    // console.log(numOneRef)
    let numOne = Number(numOneRef.current.value)
    let numTwo = Number(numTwoRef.current.value)
    let op = operatorRef.current.value

    switch (op) {
        case '+':
            setResult(numOne+numTwo)
            break;
        case '-':
            setResult(numOne-numTwo)
            break;
        case '*':
            setResult(numOne*numTwo)
            break;
        case '/':
            setResult(numOne/numTwo)
            break;
    
        default:
            break;
    }
    // numOneRef.current.value = ""
    // numTwoRef.current.value = ""
    // operatorRef.current.value = ""
  }

  return (
    <div className="row">
      <div className="col-md-4 mx-auto my-5">
        <h3 className="text-center my-3">Simple Calculator</h3>
        <form method="post" onSubmit={calculateResult}>
          <label>Enter First Number</label>
          <input
            ref={numOneRef}
            type="number"
            className="form-control mb-2"
            required
          />
          <label>Enter Second Number</label>
          <input
            ref={numTwoRef}
            type="number"
            className="form-control mb-2"
            required
          />
          <label>Select Operator</label>
          <select ref={operatorRef} className="form-control mb-2" required>
            <option value="">--SELECT--</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="submit"
            value="Calculate"
            className="btn btn-primary"
          />
          <input
            type="reset"
            value="Clear"
            className="btn btn-warning ms-2"
          />
        </form>

        <h4 className="mt-2 text-success"> Result: {result}</h4>
      </div>
    </div>
  );
}

export default Calculator;
