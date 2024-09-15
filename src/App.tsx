// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import MainButton from './components/main_button';

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  
 const increaseCount = () => {
  setCount(count + 1)
 }

 const decreaseCount = () => {
  setCount(count - 1)
 }


  return (
    <>
      <MainButton forClick = {decreaseCount}> Decrease </MainButton>
      {count}
      <MainButton  forClick = {increaseCount}> Increase </MainButton>
    </>
  )
}

export default App
