import './Reset.css';
import './App.css';
import Calculator from './Calculator';
import { useState } from 'react';


function App() {
  // const [tipAmounPerPerson, setTipAmountPerPerson] = useState("0.00")
  const [billValue, setBillValue] = useState(0)
  const [billRedLabel, setBillRedLabel] = useState("")
  const [peoplesRedLabel, setPeoplesRedLabel] = useState("")
  const [peoplesValue, setPeoplesValue] = useState(0)
  const [tipBtnIsClicked, setTipBtnIsClicked] = useState(false)
  const [clickedTipBtn, setClickedTipBtn] = useState(null)

  

  function clearBillInputValue(){
    setBillValue("")
    setBillRedLabel("Cant't be zero")
  }
  function fillBillInputValue(e){
    
    setBillValue(parseInt(e.target.value))
    if(e.target.value > 0){
      setBillRedLabel("")
      // if(peoplesValue > 0 && tipBtnIsClicked){
      //   setTipAmountPerPerson((((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2))
      //   console.log(clickedTipBtn)
      //   console.log(billValue)
      //   console.log(peoplesValue)
      // }else{
      //   setTipAmountPerPerson("0.00")
      // }
    }else{
      setBillValue("")
      
    }
  }
  function fillPeoplesInputValue(e){
    setPeoplesValue(parseInt(e.target.value))
    if(e.target.value > 0){
      setPeoplesRedLabel("")
      // if(billValue > 0 && tipBtnIsClicked){ 
      //   setTipAmountPerPerson((((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2))
      //   console.log(clickedTipBtn)
      //   console.log(billValue)
      //   console.log(peoplesValue)
      // }else{
      //   setTipAmountPerPerson("0.00")
      // }
    }else{
      setPeoplesValue("")
    }
  }
  function clearPeoplesInputValue(){
    setPeoplesValue("")
    setPeoplesRedLabel("Cant't be zero")
  }
  function btnClick(btn){
    setTipBtnIsClicked(true)
    setClickedTipBtn(btn)
    // setBtnBgColor("#26C2AE")
    // if(billValue > 0 && peoplesValue > 0){
    //   setTipAmountPerPerson((((billValue * btn) / 100)/ peoplesValue).toFixed(2))
    //   console.log(clickedTipBtn)
    //     console.log(billValue)
    //     console.log(peoplesValue)
    // }else{
    //   setTipAmountPerPerson("0.00")
    // }
   
  }

  function reset(){
    setBillValue(0)
    setPeoplesValue(0)
    setTipBtnIsClicked(false)

  }

  return (
    <div className="container">
       <Calculator tipAmountPP = {((billValue > 0 && peoplesValue > 0 ) ? (((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2) : "0.00") || ((billValue > 0 && tipBtnIsClicked) ? (((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2) : "0.00") || ((peoplesValue > 0 && tipBtnIsClicked) ? (((billValue * clickedTipBtn) / 100)/ peoplesValue).toFixed(2) : "0.00")} clearBillInputValue = {clearBillInputValue} fillBillInputValue = {fillBillInputValue} billValue = {billValue} billRedLabel = {billRedLabel} peoplesRedLabel ={peoplesRedLabel} fillPeoplesInputValue = {fillPeoplesInputValue} clearPeoplesInputValue = {clearPeoplesInputValue} peoplesValue = {peoplesValue} btnClick ={btnClick} reset = {reset} clickedBtnValue = {clickedTipBtn} />
    </div>
  );
}

export default App;
