import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {
 
  return (
   <>

<div className="container-fluid admin-dashboard d-flex vh-100 p-0">
  
<div className="sidebar d-flex flex-column ">
    <Sidebar />
  </div>

 
  <div className="main-content d-flex flex-column flex-grow-1">
    
    <div className="navbar  border-bottom  w-100">
      <Navbar />
    </div>

    
    <div className="content flex-grow-1  overflow-auto">
      
    </div>
  </div>
</div>

    

   </>
  )
}

export default App
