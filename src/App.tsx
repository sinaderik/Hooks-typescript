import './App.css'
import { useState, useCallback, useRef, useMemo, useEffect,ChangeEvent  } from "react"

type FiboFunction = (number: number) => number
const fiboFunction: FiboFunction = (number: number) => {
  if (number < 2) {
    return number
  }
  return fiboFunction(number - 1) + fiboFunction(number - 2)
}
export default function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<string[] | null>(['user1', 'user2', 'user3']);
  const [inputValue,setInputValue]=useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  
  // console.log(inputRef?.current)
  // console.log(inputRef?.current?.value)
  
  useEffect(() => {
    console.log('Mount')
    console.log('users ', users)
    return () => console.log('unMount')
  }, [])

  const addCount = useCallback((): void => {
    setCount(previousNumber => previousNumber + 2)
  }, [])

  const inputHandler=useCallback((e:ChangeEvent<HTMLInputElement>):void=>{
    setInputValue(e.target.value)
  },[])

  const fixedNumber: number = 37;
  const result: number = useMemo(() => {
    console.log('useMemo')
    return fiboFunction(fixedNumber)
  }, [fixedNumber])
  console.log('component renderd')
  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={addCount}>add</button>
      <h3>{result}</h3>
      <input ref={inputRef} type="text" /><br /><br />
      <label>Enter a Text </label>
      <input onChange={inputHandler} value={inputValue} type="text" />
    </div>
  )
}
