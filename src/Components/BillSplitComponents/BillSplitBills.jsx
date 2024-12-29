import React, { useRef, useContext, createContext } from "react";
import { BillSplitBillsContext } from "../../Pages/Algorithms/BillSplit";
import BillSplitBill from "./BillSplitBill";

export const BillSplitBillContext = createContext(null);

export default function BillSplitBills() {
  const senderInputRef = useRef(null);
  const recieverInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const noteInputRef = useRef(null);

  const { bills, setBills } = useContext(BillSplitBillsContext);
  const billComponents = [];
  for (let i = 0; i < bills.length; i++) {
    billComponents.push(
      <BillSplitBillContext.Provider key={i} value={{ bills, setBills, i }}>
        <BillSplitBill />
      </BillSplitBillContext.Provider>
    );
  }

  return (
    <>
      <hr />
      <h2>Bills</h2>
      {billComponents}

      <div>
        <input placeholder="Spent By" ref={senderInputRef} />
        <input placeholder="Recieved By" ref={recieverInputRef} />
        <input placeholder="0" type="number" ref={amountInputRef} />
        <input placeholder="Note" ref={noteInputRef} defaultValue={""} />

        <button
          onClick={() => {
            if (senderInputRef.current.value === "") {
              senderInputRef.current.focus();
            } else if (recieverInputRef.current.value === "") {
              recieverInputRef.current.focus();
            } else if (
              amountInputRef.current.value === "" ||
              amountInputRef.current.value <= 0
            ) {
              amountInputRef.current.focus();
            } else {
              setBills((bills) => [
                ...bills,
                {
                  sender: senderInputRef.current.value,
                  reciever: recieverInputRef.current.value,
                  amount: amountInputRef.current.value,
                  note: noteInputRef.current.value,
                },
              ]);
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
