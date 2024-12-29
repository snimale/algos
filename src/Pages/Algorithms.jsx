import React from "react";
import { useParams } from "react-router-dom";
import BillSplit from "./Algorithms/BillSplit";
import AlgorithmList from "../Components/AlgorithmList";

const algorithmComponents = { billsplit: BillSplit };

export default function Algorithms(params) {
  const { type } = useParams();
  const AlgorithmComponent = algorithmComponents[type];

  return (
    <>
      <h1>Algorithms</h1>
      {AlgorithmComponent ? <AlgorithmComponent /> : <AlgorithmList />}
    </>
  );
}
