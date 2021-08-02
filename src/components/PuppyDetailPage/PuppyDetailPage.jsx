import React from "react";
import { useLocation } from "react-router-dom";
import PuppyCard from "../../components/PuppyCard/PuppyCard";

function PuppyDetailPage(props) {
  const {
    state: { puppy },
  } = useLocation();

  return (
    <>
      <h1>Puppy Details</h1>
      <PuppyCard puppy={puppy} key={puppy._id} />
    </>
  );
}

export default PuppyDetailPage;
