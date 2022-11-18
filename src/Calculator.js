import InfoBox from "./InfoBox"
import ResultBox from "./ResultBox"

export default function Calculator(props) {
  return (
    <div className="calculator">
      <InfoBox clearBillInputValue = {props.clearBillInputValue} fillBillInputValue = {props.fillBillInputValue} billValue = {props.billValue} billRedLabel = {props.billRedLabel} peoplesRedLabel = {props.peoplesRedLabel} fillPeoplesInputValue = {props.fillPeoplesInputValue} clearPeoplesInputValue = {props.clearPeoplesInputValue} peoplesValue = {props.peoplesValue} btnClick = {props.btnClick} clickedBtnValue = {props.clickedBtnValue}/>
      <ResultBox tipAmountPP = {props.tipAmountPP} reset = {props.reset} />
    </div>
  )
}
