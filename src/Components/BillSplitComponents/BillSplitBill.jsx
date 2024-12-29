import React, { useContext } from "react";
import { BillSplitBillContext } from "./BillSplitBills";

export default function BillSplitBill() {
  const { bills, setBills, i } = useContext(BillSplitBillContext);
  return (
    <>
      <div>
        <p style={{ display: "inline", marginRight: "50px" }}>
          {i + 1}) "{bills[i].sender}" paid for "{bills[i].reciever}
          ", Amount: "{bills[i].amount}", Note: "{bills[i].note}"
        </p>

        <button
          onClick={() => {
            setBills((bills) => [...bills.slice(0, i), ...bills.slice(i + 1)]);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
