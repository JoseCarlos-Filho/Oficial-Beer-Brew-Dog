import React, { useEffect, useState } from "react";
import MountCard from "../ShowCard/MountCard.js";
import { getBeers } from "../../services/beers.js";

const BeerCard = () => {
  const [beers, setBeers] = useState();

  useEffect(() => {
    console.log("Executou Effect");
    let data = getBeers();
    data.then((beers) => {
      setBeers(beers);
    });
  }, []);

  return <div>{<MountCard beers={beers} />}</div>;
};
export default BeerCard;
