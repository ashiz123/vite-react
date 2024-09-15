import { useState } from 'react'
import './App.css'
import MainButton from './components/main_button';

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    alert('Button clicked!');
  };


  return (
    <>
      <MainButton onClick = {handleClick}> Decrease </MainButton>
      {count}
      {/* <MainButton  onClick = {increaseCount}> Increase </MainButton> */}
    </>
  )
}

export default App
