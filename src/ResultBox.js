import TipAmountBox from "./TipAmountBox"
import TotalBox from "./TotalBox"
import ResetBox from "./ResetBox"

export default function ResultBox(props) {
  return (
    <div className="resultBox">
       <TipAmountBox tipAmountPP = {props.tipAmountPP} />
       <TotalBox />
       <ResetBox reset = {props.reset} />
    </div>
  )
}
