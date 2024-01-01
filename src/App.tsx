import { useState, useCallback, useMemo, useEffect } from "react"

type FiboFunction = (number: number) => number
const fiboFunction: FiboFunction=(number: number) => {
  if (number < 2) {
    return number
  }
  return fiboFunction(number - 1) + fiboFunction(number - 2)
}
export default function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<string[] | null>(['user1', 'user2', 'user3'])

  useEffect(() => {
    console.log('Mount')
    console.log('users ', users)
    return () => console.log('unMount')
  }, [])

  const addCount = useCallback((): void => {
    setCount(previousNumber => previousNumber + 2)
  }, [])

  const fixedNumber: number = 37;
  const result: number = useMemo(() => {
    console.log('useMemo')
    return fiboFunction(fixedNumber)
  }, [fixedNumber])

  return (
    <div>
      <h2>Count is: {count}</h2>
      <button onClick={addCount}>add</button>
      <h3>{result}</h3>
    </div>
  )
}
