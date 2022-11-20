import './Reset.css';
import './App.css';
import Calculator from './Calculator';
import { useState } from 'react';
import logo from "./images/logo.svg"


function App() {
  const [billValue, setBillValue] = useState(0)
  const [billRedLabel, setBillRedLabel] = useState("")
  const [peoplesRedLabel, setPeoplesRedLabel] = useState("")
  const [peoplesValue, setPeoplesValue] = useState(0)
  const [tipBtnIsClicked, setTipBtnIsClicked] = useState(false)
  const [clickedTipBtn, setClickedTipBtn] = useState(null)
  const [customValue, setCustomValue] = useState("custom")
  const [customRedLabel, setCustomRedLabel] = useState("")
  const [resetIsClicked, setResetIsClicked] = useState(false)

  function clearBillInputValue(){
    setBillValue("")
    setBillRedLabel("Cant't be zero")
  }
  function fillBillInputValue(e){
    
    setBillValue(parseInt(e.target.value))
    if(e.target.value > 0){
      setBillRedLabel("")
      
    }else{
      setBillValue("")
      
    }
  }
  function fillPeoplesInputValue(e){
    setPeoplesValue(parseInt(e.target.value))
    if(e.target.value > 0){
      setPeoplesRedLabel("")
    }else{
      setPeoplesValue("")
    }
  }
  function fillCustumInputValue(e){
    setCustomValue(parseInt(e.target.value))
    if(e.target.value > 0){
      setCustomRedLabel("")
    }else {
      setCustomValue("")
    }
  }
  function clearCustomInputValue(){
    setCustomValue("")
    setCustomRedLabel("can't be zero")
  }
  function clearPeoplesInputValue(){
    setPeoplesValue("")
    setPeoplesRedLabel("Cant't be zero")
  }
  function btnClick(btn){
    setTipBtnIsClicked(true)
    setClickedTipBtn(btn)
   
  }

  function reset(){
    setBillValue(0)
    setPeoplesValue(0)
    setTipBtnIsClicked(false)
    setCustomValue(0)
    setResetIsClicked(true)
  }
  

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
       <Calculator 
       tipAmountPP = {tipBtnIsClicked ? 
        (((billValue > 0 && peoplesValue > 0) ? (((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2) : "0.00")) :
        ((billValue > 0 && peoplesValue > 0 && customValue > 0) ? (((billValue * customValue) / 100)/ peoplesValue).toFixed(2) : "0.00")} 

       clearBillInputValue = {clearBillInputValue} fillBillInputValue = {fillBillInputValue} billValue = {billValue} billRedLabel = {billRedLabel} peoplesRedLabel ={peoplesRedLabel} fillPeoplesInputValue = {fillPeoplesInputValue} clearPeoplesInputValue = {clearPeoplesInputValue} peoplesValue = {peoplesValue} btnClick ={btnClick} reset = {reset} clickedBtnValue = {clickedTipBtn}
       
       totalAmountPP={tipBtnIsClicked ?
        (((billValue > 0 && peoplesValue > 0) ? (((billValue + ((billValue * clickedTipBtn) / 100)) / peoplesValue).toFixed(2)) : "0.00")) :
        (((billValue > 0 && peoplesValue > 0 && customValue > 0) ? (((billValue + ((billValue * customValue) / 100)) / peoplesValue).toFixed(2)) : "0.00"))}

       customValue = {customValue} fillCustumInputValue = {fillCustumInputValue} clearCustomInputValue = {clearCustomInputValue} customRedLabel = {customRedLabel} tipBtnIsClicked = {tipBtnIsClicked} resetIsClicked = {resetIsClicked} />
    </div>
  );
}

export default App;
