

export default function Button(props) {
  return (
    <button className="tipButton" id={props.id} onClick={(e)=>props.btnClick(e)}>{props.buttonValue}</button>
  )
}
