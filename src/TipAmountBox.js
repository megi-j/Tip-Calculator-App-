

export default function TipAmountBox(props) {
  return (
    <div className="tipAmountBox">
        <div>
          <h6>Tip Amount</h6>
          <p>/ person</p>
        </div>
        <div>
          <h2>${props.tipAmountPP}</h2>
        </div>
    </div>
  )
}
