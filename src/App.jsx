import { useState } from 'react'

import './App.css'
import data from './data'
import Search from './components/Search';
import Boxes from './components/Boxes';
import References from './components/References';
import Title from './components/Title';
function App() {
  const [filter, setFilter] = useState('');
  const filteredLabels= data.filter(
    ({ labelMessage,label }) =>label===Number(filter)
     || labelMessage.toLowerCase().includes(filter.toLowerCase()) 
  );
  const handleChange=e=>setFilter(e.target.value)
  return (
    <div className="App flex-col">
      <Title/>
      <Search filter={filter} handleChange={handleChange}/>
      <Boxes arr={filteredLabels}/>
      <References/>
    </div>
  )
}

export default App
