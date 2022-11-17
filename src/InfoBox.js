import BillBox from "./BillBox"
import TipBox from "./TipBox";
import NumberOfPeople from "./NumberOfPeople";

export default function InfoBox() {
  return (
    <div className="infoBox">
        <BillBox />
        <TipBox />
        <NumberOfPeople />
    </div>
  )
}
