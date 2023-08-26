import React from 'react'
import Graphimg from '../../assets/Graph.png'
import Circleimg from '../../assets/circle.png'
import Ringimg from '../../assets/ring.png'


const SalesReport = () => {
  return (
    <div>
        <div className="row mt-3">
            <div className="col-6 shadow">
                <div className="row">
                    <div className="col">
                        <span className='fw-bold fs-4'>Sales Report</span>
                    </div>
                    <div className="col  text-end">
                        <input type="datetime-local" name="datetime-local" id="datetime" className='rounded-pill p-1 mt-2' />
                    </div>
                </div>
                <div className="row ms-1 bg-white mt-2">
                    <div className="col-3 border-end"><span className='fs-5 fw-semibold'>$15,000
                    <br /> <span className='fs-6 text-secondary'>This Month</span></span></div>
                    
                    <div className="col-3"><span className='fs-5 fw-semibold'>$10,000 <br /> <span className='fs-6 text-secondary'>Last Month</span></span></div>
                    
                    <div className="col mt-1">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Filter by Category</option>
                        <option value="1">Pc & Laptop</option>
                        <option value="2">Smartphone</option>
                        <option value="3">Electronic</option>
                        <option value="4">Sports</option>
                        </select>
                    </div>
                </div>
                <img src={Graphimg} alt="graphimg"  width='444' className='ms-1'/>
            </div>

            <div className="col-3">
            <div className="row">
                    <div className="col text-truncate">
                        <span className='fw-bold'>Sales Report</span>
                    </div>
                    <div className="col text-end">
                      <span className='text-primary'>Show More</span>
                    </div>
                </div>
                <div className="mt-4 card rounded-3">
                    <img src={Circleimg} alt="circleimg" title='Undefined'  data-aos="zoom-in-up"/>
                    <ul className='mt-3'>
                        <li className='text-secondary fw-semibold'>17 - 30 Years old &nbsp; 62%</li>
                        <li className='text-secondary fw-semibold'>31 - 50 Years old &nbsp; 33%</li>
                        <li className='text-secondary fw-semibold'>99= 50 Years old &nbsp; 10%</li>
                    </ul>
                </div>
            </div>

            <div className="col-3">
            <div className="row">
                    <div className="col text-truncate">
                        <span className='fw-bold'>Sales Report</span>
                    </div>
                    <div className="col text-end">
                    <span className='text-primary'>Show More</span>
                    </div>
                </div>
                <div className="mt-4 card rounded-3">
                    <img src={Ringimg} alt="circleimg" title='Undefined' data-aos="zoom-in-up" />
                    <ul className='mt-5'>
                        <li className='text-secondary fw-semibold'>17 - 30 Years old &nbsp; 62%</li>
                        <li className='text-secondary fw-semibold'>31 - 50 Years old &nbsp; 33%</li>
                        <li className='text-secondary fw-semibold'>99= 50 Years old &nbsp; 10%</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
  )
}

export default SalesReport