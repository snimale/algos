import React, { createContext, useState } from "react";
import BillSplitParticipants from "../../Components/BillSplitComponents/BillSplitParticipants";
import BillSplitBills from "../../Components/BillSplitComponents/BillSplitBills";
import BillSplitResults from "../../Components/BillSplitComponents/BillSplitResults";

export const BillSplitParticipantsContext = createContext(null);
export const BillSplitBillsContext = createContext(null);
export const BillSplitResultsContext = createContext(null);

export default function BillSplit() {
  const [participants, setParticipants] = useState([]);
  const [bills, setBills] = useState([]);

  return (
    <>
      <h1>
        <i>Bill-Split</i>
      </h1>

      <BillSplitParticipantsContext.Provider
        value={{ participants, setParticipants }}
      >
        <BillSplitParticipants />
      </BillSplitParticipantsContext.Provider>

      <BillSplitBillsContext.Provider value={{ bills, setBills }}>
        <BillSplitBills />
      </BillSplitBillsContext.Provider>

      <BillSplitResultsContext.Provider value={{ participants, bills }}>
        <BillSplitResults />
      </BillSplitResultsContext.Provider>

      <hr />
    </>
  );
}
