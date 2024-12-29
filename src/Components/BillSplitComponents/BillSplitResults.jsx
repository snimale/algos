import React, { useContext } from "react";
import { BillSplitResultsContext } from "../../Pages/Algorithms/BillSplit";
import BillSplitter from "../../Utilities/BillSplitUtil";

const tableCellStyleThick = {
  border: "3px double black",
  paddingLeft: "15px",
  paddingRight: "15px",
  textAlign: "center",
};

const tableCellStyle = {
  border: "1px solid black",
  paddingLeft: "15px",
  paddingRight: "15px",
  textAlign: "center",
};

export default function BillSplitResults() {
  const { participants, bills } = useContext(BillSplitResultsContext);
  const result = BillSplitter(participants, bills);

  return (
    <>
      <hr />
      <h2>Output</h2>

      <table
        border="1"
        style={{
          borderCollapse: "collapse", // Ensures borders don't overlap
        }}
      >
        <thead>
          <tr>
            <th style={tableCellStyleThick}>Participants</th>
            <th style={tableCellStyleThick}>Action</th>
            {participants.map((participant, index) => (
              <th key={`col-${index}`} style={tableCellStyleThick}>
                {participant}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {participants.map((rowParticipant, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              <tr>
                <th style={tableCellStyleThick} rowSpan={2}>
                  {rowParticipant}
                </th>
                <td style={tableCellStyleThick}>Sends to</td>
                {participants.map((colParticipant, colIndex) => (
                  <td
                    key={`send-${rowIndex}-${colIndex}`}
                    style={tableCellStyle}
                  >
                    {colIndex === rowIndex || result[rowIndex][colIndex] >= 0
                      ? "-"
                      : (-1 * result[rowIndex][colIndex]).toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td style={tableCellStyleThick}>Receives from</td>
                {participants.map((colParticipant, colIndex) => (
                  <td
                    key={`receive-${rowIndex}-${colIndex}`}
                    style={tableCellStyle}
                  >
                    {colIndex === rowIndex || result[rowIndex][colIndex] <= 0
                      ? "-"
                      : result[rowIndex][colIndex].toFixed(2)}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}
