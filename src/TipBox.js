import Button from "./Button"

export default function TipBox() {
  return (
    <>
      <label htmlFor="">Select Tip %</label>
      <div className="buttons">
         <Button buttonValue = "5%" />
         <Button buttonValue = "10%" />
         <Button buttonValue = "15%" />
         <Button buttonValue = "25%" />
         <Button buttonValue = "50%" />
      </div>
    </>
    
  )
}
