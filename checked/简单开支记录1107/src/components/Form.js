import React, { useState, useContext } from "react";
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";
import { v4 as uuid } from "uuid";

import { useCTX } from "../GlobalState";

export default function Form() {
  const [_s,dispatch,totalTime,setTotalTime] = useCTX()
  const [name, setName] = useState({
    input:"",
    d : new Date(),
    date:new Date().toLocaleString().split(" ")[0]
  });
  const [amount, setAmount] = useState("10");




  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleWeek = (event) => {
    setName({...name,input:event.target.value});
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (+amount > 0) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: { id: uuid(), d:new Date(), date:name.input || new Date().toLocaleString().split(" ")[0],amount},
      });

      // clean input fields
      setName("");
      setAmount("10");
      setTotalTime(totalTime)
    } else {
      console.log("消费项目和金额不合法..");
    }
  };
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>月份</Label>
        <Col sm={4}>
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="12月"
            value={name.input || name.date }
            onChange = {handleWeek}
            // value={"DAY"+(name.d.getDay()>0?name.d.getDay():"5")+`(${name.date})` }
          />
        </Col>
        {/* <Label for="exampleEmail" sm={2}>周</Label>
        <Col sm={4}>
          <Input
            type="text"
            name="week"
            id="expensDayk"
            placeholder="第一周"
            value={week}
            onChange={handleWeek}
          />
        </Col> */}
        {/* <Label for="expenseDay" sm={2}>天</Label>
        <Col sm={4}>
          <Input
            type="text"
            name="day"
            id="expenseDay"
            placeholder="第一天"
            value={day}
            onChange={handleWeek}
          />
        </Col> */}
      </FormGroup>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          工时
        </Label>
        <Col sm={4}>
          <Input
            type="text"
            name="amount"
            id="expenseAmount"
            placeholder="小时 "
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type="submit" color="primary">
        添加
      </Button>
    </BTForm>
  );

}
