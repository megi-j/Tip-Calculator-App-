

export default function TotalBox(props) {
  return (
    <div className="totalBox">
        <div>
          <h6>Total</h6>
          <p>/ person</p>
        </div>
        <div>
          <h2>${props.totalAmountPP}</h2>
        </div>
    </div>
  )
}
