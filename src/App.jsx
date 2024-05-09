import './App.css'

export const App = () => {

  console.log(import.meta.env.VITE_SECRET)
const value = import.meta.env.VITE_VALUE || "Hard Coded lol"

  return (
    <>
      <p>{value}</p>
     <p>Hello World</p>
    </>
  )
}

