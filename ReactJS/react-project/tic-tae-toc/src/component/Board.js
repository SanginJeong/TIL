import React from 'react'
import ReactDOM from 'react-dom/client';


const Board = () => {
  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const table = document.createElement('table');
  const cells = [];
  for(let i=0; i<3; i++){
    const tr = document.createElement('tr');
    for(let j=0; j<3; j++){
      const td = document.createElement('td');
      tr.append(td);
    }
    table.append(tr);
  }
  root.render(table)
  return (
    <>
    </>
  )
}

export default Board