import { useState } from 'react';
import housingData from './data/housing.json'
import './App.css'

function App() {
  const [data] = useState(housingData);
  console.log('Data fetched: ', data);
  if (data === null) {
    return <div>Loading</div>
  }

  return (
    <>
  
    </>
  )
}

export default App
