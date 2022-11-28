import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetch(req) {
      try {
        const res = await axios.get(req);
        setItems(res.data);
      } catch (error) {
        // todo
      }
    }

    fetch(`http://localhost:3030/${optionType}`);
  }, [optionType]);

  const ItemComponent =
    optionType === "scoops" ? ScoopOption : "toppings" ? ToppingOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
