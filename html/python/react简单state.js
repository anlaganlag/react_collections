import React,{useState} from 'react';

function App() {
  const [cnt,setCnt] = useState(0)

  function addHandler(){
    setCnt(pre=>pre+1)
  }
  return (
    <main className='app'>
      <p>{cnt}</p>
      <button onClick={addHandler}>增加</button>

    </main>
  )
}

export default App;
