import person from "./images/icon-person.svg"

export default function NumberOfPeople() {
  return (
    <>
    <label htmlFor="">Number of People</label>
    <div className="numberOfPeopleBox">
        <img src={person} alt="" />
        <input type="text" />
    </div>
    </>
  )
}
