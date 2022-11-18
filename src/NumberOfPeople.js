import person from "./images/icon-person.svg"

export default function NumberOfPeople(props) {
  return (
    <>
    <div className="labels">
      <label htmlFor="">Number of People</label>
      <label htmlFor="" className='zero'>{props.peoplesRedLabel}</label>
    </div>
    
    <div className="numberOfPeopleBox">
        <img src={person} alt="" />
        <input onFocus={props.clearPeoplesInputValue} onInput={props.fillPeoplesInputValue} type="number" value={props.peoplesValue} />
    </div>
    </>
  )
}
