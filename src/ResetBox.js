

export default function ResetBox(props) {
  return (
    <div className="resetBox" onClick={props.reset} id = {props.resetIsClicked ? "resetActive" : ""}> 
       RESET
    </div>
  )
}
