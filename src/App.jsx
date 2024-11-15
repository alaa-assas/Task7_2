import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(1)
  const [result, setResult] = useState(0)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [color , setColor] = useState('greColor')
  const colors = ['greyColor', 'redColor', 'greenColor']

  useEffect(() => {
    setMessage((message) => 'hello after load page')
    setOpen((open) => true) 
    }, []);

  useEffect(() => {
    //for showing Modal Message on screen
    if(result == 10 || result == 100 || result == 1000)
    {
      setMessage((message) => 'we reach count ' + result)
      setOpen((open) => true) 
      setColor((color) => color = colors[Math.floor(Math.random() * colors.length)])
    }
    //for checking value of count && 
    if(result == 0 && show == true)
      setShow((show) => false)
    else
      if((result > 0 && result < 9) || (result == 10 && show))
        setCount((count) => 1)
      else   
        if((result > 9 && result < 99) || (result == 100 && show))
          setCount((count) => 10)
        else
          if(result > 99 && result < 999)
              setCount((count) => 100)
            else
              if(result == 1000)
                setShow((show) => true)
    
  },[result])

  function Sum(){
    setResult((result) => result + count)
  }

  function Minus(){
    setResult((result) => result - count)
  }

  return (
    <div id="main" className={color}>
      <h2>Result: {result}</h2>
      <div className='AA-btn-row'>
        <Button variant="success" size="lg" onClick={ result < 1000 ?  () => Sum() : () => {}}>
          Add
        </Button>
        <Button variant="primary" size="lg" className={show ? 'show' : 'hide'} onClick={() => Minus()}>
           Minus
        </Button>
      </div>
      <div className={open ? 'show' : 'hide'}>
        <div className='popup'>
          <h3>{message}</h3>
          <Button variant="outline-dark" onClick={() => setOpen(false)}>Close</Button>
        </div>
      </div>
    </div>
  )
}

export default App
