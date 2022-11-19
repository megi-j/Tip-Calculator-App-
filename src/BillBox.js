import { useState } from 'react';
import dollar from './images/icon-dollar.svg';

export default function BillBox(props) {
 
  return (
    <>
      <div className='labels'>
        <label htmlFor="">Bill</label>
        <label htmlFor="" className='zero'>{props.billRedLabel}</label>
      </div>
      <div className="billBox">
        <img src={dollar} alt="dollar-sign" />
        <input onFocus={props.clearBillInputValue} onInput={props.fillBillInputValue} type="number" step="0.01" value={props.billValue} />
      </div>
    </>
    

  )
}
