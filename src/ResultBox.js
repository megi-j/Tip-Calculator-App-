import TipAmountBox from "./TipAmountBox"
import TotalBox from "./TotalBox"
import ResetBox from "./ResetBox"

export default function ResultBox() {
  return (
    <div className="resultBox">
       <TipAmountBox />
       <TotalBox />
       <ResetBox />
    </div>
  )
}
