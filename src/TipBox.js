import Button from "./Button"

export default function TipBox(props) {
  let array = [5, 10, 15, 25, 50]
  
  return (
    <>
      <label htmlFor="">Select Tip %</label>
      <div className="buttons">
        {array.map(btn=>{
          return <Button buttonValue = {`${btn}%`} btnClick={()=>props.btnClick(btn)} id = {props.clickedBtnValue == btn ? "active" : ""} />
        })}
         
      </div>
    </>
    
  )
}
