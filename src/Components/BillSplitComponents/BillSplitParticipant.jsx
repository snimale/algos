import React, { useContext } from "react";
import { BillSplitParticipantContext } from "./BillSplitParticipants";

export default function BillSplitParticipant() {
  const { participants, setParticipants, i } = useContext(
    BillSplitParticipantContext
  );

  return (
    <>
      <div>
        <p style={{ display: "inline", marginRight: "50px" }}>
          {i + 1}) {participants[i]}
        </p>
        <button
          onClick={(event) => {
            setParticipants((participants) => [
              ...participants.slice(0, i),
              ...participants.slice(i + 1),
            ]);
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
