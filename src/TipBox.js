import Button from "./Button"

export default function TipBox(props) {
  let array = [5, 10, 15, 25, 50]
  let max = 2
  return (
    <>
      <div className="labels">
        <label htmlFor="">Select Tip %</label>
        <label htmlFor="" className="zero">{props.customRedLabel}</label>
      </div>
      
      <div className="buttons">
        {array.map(btn=>{
          return <Button buttonValue = {`${btn}%`} btnClick={()=>props.btnClick(btn)} id = {props.tipBtnIsClicked === true && props.clickedBtnValue == btn ? "active" : ""} />
        })}
         <input type="number" value={props.customValue} onFocus={props.clearCustomInputValue} onInput={props.fillCustumInputValue} placeholder="custom" />
      </div>
    </>
    
  )
}
