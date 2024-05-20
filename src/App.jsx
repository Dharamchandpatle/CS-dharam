import { useState } from 'react'
import Navigation from './components/BottomNavigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-900">
      <Navigation/>
      {/* <Sidebar/> */}
      
    </div>    </>
  )
}

export default App
