import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";

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
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
  </>
);

export default App;
