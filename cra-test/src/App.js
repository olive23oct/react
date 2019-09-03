    
import React from 'react';

function Food( { name } ){
    return <h2>I like { name } </h2>;
}

const foodIlike = [
   { name : "a"},
   { name : "b"},
   { name : "c"}
];

function App() {
  return (
    <div>
       <h1>Hello~</h1>
        {foodIlike.map(dish => (
            <Food name = { dish.name } />
        ))}
    </div>
  );
}

export default App;