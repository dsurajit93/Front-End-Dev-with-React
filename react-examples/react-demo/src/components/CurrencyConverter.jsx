import React, { useState } from "react";

function CurrencyConverter() {
  let [usd, setUsd] = useState(0);
  let [inr, setInr] = useState(0);

  function usdToInr(e) {
    // setUsd(e.target.value)
    let amount = e.target.value;
    setUsd(amount);
    let equInr = amount * 87.36;
    setInr(equInr);
  }

  function inrToUsd(e) {
    // setInr(e.target.value)
    let amount = e.target.value;
    setInr(amount);
    let equUsd = (amount / 87.36).toFixed(2);
    setUsd(equUsd);
  }

  return (
    <div className="row my-4">
      <div className="col-md-4 mx-auto">
      <h1>Currency Converter</h1>
       <form method="post">
        <label>United States Dollar</label> <br />
        <input 
            type="text" 
            value={usd} 
            onChange={usdToInr} 
            className="form-control"
        /> 
        <br />
        <label>Indian Rupee</label> <br />
        <input 
            type="text" 
            value={inr} 
            onChange={inrToUsd} 
            className="form-control"
        /> 
        <br />
      </form>
      </div>
     
    </div>
  );
}

export default CurrencyConverter;
