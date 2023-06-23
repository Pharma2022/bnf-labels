import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {data.map(({label,labelMessage})=>(
        <div key={label}>
            <p>Label {label} </p>
            <p>{labelMessage}</p>
        </div>
      )
      )}
      <p>{`Joint Formulary Committee. British National Formulary (online) London: BMJ and Pharmaceutical Press <http://www.medicinescomplete.com> [Accessed on [22.6.23]]`}</p>
    </div>
  )
}

export default App
