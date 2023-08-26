import React from 'react'
import Maperrorimg from '../../assets/MapError.png'
import Ringimg from '../../assets/ring.png'

import { FaMapMarkerAlt} from "react-icons/fa";
import WeaklySeller from './WeaklySeller';
const Stores = () => {
  return (
    <div>
        <div className="row p-2 mt-3">
            <div className="col">
                <div className="row">
                    <div className="col">
                    <span className='fw-bold text-secondary fs-5'>Official Store</span>
                    </div>
                    <div className="col">
                    <input
                type="text"
                className="form-control rounded-3  box border-white"
                placeholder="Filter by city"
              />
              <i
                className="position-absolute my-auto top-0 bottom-0 me-4 end-0 mt-1"
                data-feather="search"
              >
                <FaMapMarkerAlt />
              </i>
                    </div>
                </div>
                <div className="mt-3 p-2 card ">
                    <span className='mt-2 p-3'>250 Official stores in 21 countries, click the marker to see location details.</span>
                    <img src={Maperrorimg} alt="map" width='450' />
                </div>
            </div>

{/* WEAKLY SALLER COMPONENT CALL HERE */}
            <div className="col">
           <WeaklySeller />
            </div>
        </div>
  <div className="container bg-light gap-3 row mt-4 p-2 ">
    <div className="col Transactions_card" >
      <div className="row">
        <div className="col">
        <span>Target Sales</span>
      <p className='mt-1'>300 Sales</p>
        </div>
        <div className="col-6">
          <img src={Ringimg} alt="img" width='100' />
        </div>
      </div>
    </div>
    
    <div className="col Transactions_card" >
      <div className="row">
        <div className="col">
        <span>Target Sales</span>
      <p className='mt-1'>300 Sales</p>
        </div>
        <div className="col-6">
        <img src={Ringimg} alt="img" width='100' />
        </div>
      </div>
    </div>
    
    <div className="col  Transactions_card" >
      <div className="row">
        <div className="col">
        <span>Target Sales</span>
      <p className='mt-1'>300 Sales</p>
        </div>
        <div className="col-6">
        <img src={Ringimg} alt="img" width='100' />
        </div>
      </div>
    </div>
    
    <div className="col  Transactions_card" >
      <div className="row">
        <div className="col">
        <span>Target Sales</span>
      <p className='mt-1'>300 Sales</p>
        </div>
        <div className="col-6">
        <img src={Ringimg} alt="img" width='100' />
        </div>
      </div>
    </div>
    
    
  </div>
    </div>
  )
}

export default Stores