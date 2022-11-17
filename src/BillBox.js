import dollar from './images/icon-dollar.svg';

export default function BillBox() {
  return (
    <>
      <label htmlFor="">Bill</label>
      <div className="billBox">
        <img src={dollar} alt="dollar-sign" />
        <input type="text" />
      </div>
    </>
    

  )
}
