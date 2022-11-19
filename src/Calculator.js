import InfoBox from "./InfoBox"
import ResultBox from "./ResultBox"

export default function Calculator(props) {
  return (
    <div className="calculator">
      <InfoBox clearBillInputValue = {props.clearBillInputValue} fillBillInputValue = {props.fillBillInputValue} billValue = {props.billValue} billRedLabel = {props.billRedLabel} peoplesRedLabel = {props.peoplesRedLabel} fillPeoplesInputValue = {props.fillPeoplesInputValue} clearPeoplesInputValue = {props.clearPeoplesInputValue} peoplesValue = {props.peoplesValue} btnClick = {props.btnClick} clickedBtnValue = {props.clickedBtnValue} customValue = {props.customValue} fillCustumInputValue = {props.fillCustumInputValue} clearCustomInputValue = {props.clearCustomInputValue} customRedLabel = {props.customRedLabel} tipBtnIsClicked = {props.tipBtnIsClicked} />
      <ResultBox tipAmountPP = {props.tipAmountPP} reset = {props.reset} totalAmountPP={props.totalAmountPP} resetIsClicked = {props.resetIsClicked} />
    </div>
  )
}
