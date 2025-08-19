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
    <div className="m-5">
      <form method="post">
        <label>United States Dollar</label> <br />
        <input 
            type="text" 
            value={usd} 
            onChange={usdToInr} 
        /> 
        <br />
        <label>Indian Rupee</label> <br />
        <input 
            type="text" 
            value={inr} 
            onChange={inrToUsd} 
        /> 
        <br />
      </form>
    </div>
  );
}

export default CurrencyConverter;
