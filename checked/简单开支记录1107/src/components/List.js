import React from "react";
import { ListGroup, ListGroupItem,Badge} from "reactstrap";

import { useCTX } from "../GlobalState";
import { weekDay } from "./utils";

export default function List() {
  const [state, _d, totalTime, setTotalTime] = useCTX();
  const reducer = (acc, cur) => acc + +cur.amount;
  const cur = state.expenses[0]?.d.getDay() || 7;
  const total = state.expenses
    ? state.expenses.slice(0, cur ).reduce(reducer, 0)
    : 0;
  console.log(total, state.expenses.slice(0, cur + 1));

  console.log(state, "state................");

  return (
    <>

      {total>0 && (
        <p>
          本周当前{total}小时,还有{7 - cur}个工作日
        </p>
      )}
      <ListGroup>
        {state.expenses.map(({ d, date, amount, id }, idx) => {
          const weekD = "(" + weekDay[d.getDay()] + ")";
          const weekN =
            d.getMonth() + 1 + "月第" + [Math.ceil(d.getDate() / 7)] + "周";

          if (idx < 14) {
            return (
              <ListGroupItem key={id} >
                {date} {weekN}  
                <Badge pill>{weekD}</Badge>
                
                {amount}小时 {cur} {total}
              </ListGroupItem>
                    // <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
            );
          }
        })}
      </ListGroup>
    </>
  );
}
