import React, { useContext, createContext, useRef } from "react";
import { BillSplitParticipantsContext } from "../../Pages/Algorithms/BillSplit";
import BillSplitParticipant from "./BillSplitParticipant";

export const BillSplitParticipantContext = createContext(null);

export default function BillSplitParticipants() {
  const participantInputRef = useRef(null);

  const { participants, setParticipants } = useContext(
    BillSplitParticipantsContext
  );

  const participantComponents = [];
  for (let i = 0; i < participants.length; i++) {
    participantComponents.push(
      <BillSplitParticipantContext.Provider
        key={i}
        value={{ participants, setParticipants, i }}
      >
        <BillSplitParticipant />
      </BillSplitParticipantContext.Provider>
    );
  }

  return (
    <>
      <hr />
      <h2>Participants</h2>
      {participantComponents}

      <div>
        <input placeholder="Participant Name" ref={participantInputRef}></input>

        <button
          onClick={() => {
            if (participantInputRef.current.value === "") {
              participantInputRef.current.focus();
            } else if (
              participants.indexOf(participantInputRef.current.value) > -1
            ) {
              alert(
                'Participant: "' +
                  participantInputRef.current.value +
                  '" Aready Exists, Please Enter A Unique Participant Name'
              );
            } else {
              const val = participantInputRef.current.value;
              setParticipants((participants) => [...participants, val]);

              participantInputRef.current.value = "";
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
