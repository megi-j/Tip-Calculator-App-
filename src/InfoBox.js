import BillBox from "./BillBox"
import TipBox from "./TipBox";
import NumberOfPeople from "./NumberOfPeople";

export default function InfoBox(props) {
  return (
    <div className="infoBox">
        <BillBox clearBillInputValue = {props.clearBillInputValue} fillBillInputValue = {props.fillBillInputValue} billValue = {props.billValue} billRedLabel = {props.billRedLabel} />
        <TipBox btnClick = {props.btnClick} clickedBtnValue = {props.clickedBtnValue} customValue = {props.customValue} fillCustumInputValue = {props.fillCustumInputValue} clearCustomInputValue={props.clearCustomInputValue} customRedLabel = {props.customRedLabel} tipBtnIsClicked = {props.tipBtnIsClicked} />
        <NumberOfPeople peoplesRedLabel={props.peoplesRedLabel} fillPeoplesInputValue = {props.fillPeoplesInputValue} clearPeoplesInputValue = {props.clearPeoplesInputValue} peoplesValue = {props.peoplesValue} />
    </div>
  )
}
