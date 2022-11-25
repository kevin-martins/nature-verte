import React from 'react'
import Card from './Card';

const plants = [
  {
    name: "rose",
    imageUrl: "",
    description: "can hurt on touch",
    favory: true,
    review: 4.8,
    price: 200,
  }
]

function App() {
  return (
    <div className="">
      <header className="">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <body>
        {plants.map((plant, index) => (
          <Card key={index + Date.now()} plant={plant} />
        ))}
      </body>
    </div>
  );
}

export default App;
