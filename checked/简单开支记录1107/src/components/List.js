import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { useCTX } from "../GlobalState";
import {weekDay} from "./utils"

export default function List() {
  const [state] = useCTX();
  console.log(state);
  return (
    <ListGroup>
      {state.expenses.map(({d,date,amount,id}) => {
        const weekD = "("+weekDay[d.getDay()]+")" ;
        const weekN = d.getMonth()+1+"月第"+ [Math.ceil(d.getDate()/7)] +"周"
        return (
          <ListGroupItem key={id}>
            {date}  {weekN} {" "}{weekD} {amount}小时 
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
