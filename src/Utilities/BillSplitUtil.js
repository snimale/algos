export default function BillSplitter(participants, bills) {
  // get individual contributions to the pool spent
  const participantsPoolContri = Array(participants.length).fill(0);

  bills.forEach((bill) => {
    const senderIndex = participants.indexOf(bill.sender);
    if (bill.reciever === "all" && senderIndex !== -1) {
      participantsPoolContri[senderIndex] += Number(bill.amount);
    }
  });

  // get total pool spent
  const totalPool = participantsPoolContri.reduce(
    (acc, currVal) => acc + currVal,
    0
  );
  const idealParticipantPoolContri = totalPool / participants.length;

  const participantsPoolContriDiff = participantsPoolContri.map(
    (element) => element - idealParticipantPoolContri
  );

  const giveAndTakeTable = Array(participants.length)
    .fill(null)
    .map(() => Array(participants.length).fill(0));
  console.log(giveAndTakeTable);

  // Go through each participant to calculate the money to give and take
  for (let i = 0; i < participants.length; i++) {
    for (let j = 0; j < participants.length; j++) {
      if (
        participantsPoolContriDiff[i] > 0 &&
        participantsPoolContriDiff[j] < 0
      ) {
        // Participant i is owed money, and participant j owes money
        const amountToTransfer = Math.min(
          participantsPoolContriDiff[i],
          -participantsPoolContriDiff[j]
        );

        // Update the table
        giveAndTakeTable[i][j] = amountToTransfer;
        giveAndTakeTable[j][i] = -1 * amountToTransfer;

        // Adjust the remaining balances
        participantsPoolContriDiff[i] -= amountToTransfer;
        participantsPoolContriDiff[j] += amountToTransfer;
      }
    }
  }

  bills.forEach((bill) => {
    const senderIndex = participants.indexOf(bill.sender);
    if (bill.reciever !== "all" && senderIndex !== -1) {
      const recieverIndex = participants.indexOf(bill.reciever);
      if (recieverIndex !== -1) {
        giveAndTakeTable[senderIndex][recieverIndex] += Number(bill.amount);
        giveAndTakeTable[recieverIndex][senderIndex] -= Number(bill.amount);
      }
    }
  });

  return giveAndTakeTable;
}
