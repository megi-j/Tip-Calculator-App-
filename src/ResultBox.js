import TipAmountBox from "./TipAmountBox"
import TotalBox from "./TotalBox"
import ResetBox from "./ResetBox"

export default function ResultBox(props) {
  return (
    <div className="resultBox">
       <TipAmountBox tipAmountPP = {props.tipAmountPP} />
       <TotalBox totalAmountPP={props.totalAmountPP} />
       <ResetBox reset = {props.reset} resetIsClicked={props.resetIsClicked} />
    </div>
  )
}
