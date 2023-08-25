import React from 'react'
import { FiToggleLeft } from "react-icons/fi";

const DarkMode = () => {
  return (
    <div>
        <div className="btn btn-light shadow rounded-pill">
            <span className=''>Dark Mode <b className='fs-4'><FiToggleLeft/></b></span>
        </div>
    </div>
  )
}

export default DarkMode