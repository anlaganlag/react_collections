import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <>
    <div>
      <h2>文章</h2>
      <List />
    </div>
    <div>
      <h2>添加文章</h2>
      <Form />
    </div>
  </>
);

export default App;