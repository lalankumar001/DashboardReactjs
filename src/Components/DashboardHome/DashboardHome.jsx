import React from "react";

// User Images imported from assets folder
import UserImg from '../../assets/profile-1.jpg'
import UserImg1 from '../../assets/profile-2.jpg'
import UserImg2 from '../../assets/profile-3.jpg'
import UserImg3 from '../../assets/profile-4.jpg'
import UserImg4 from '../../assets/profile-5.jpg'
import UserImg5 from '../../assets/profile-6.jpg'
import UserImg6 from '../../assets/profile-7.jpg'
import UserImg7 from '../../assets/profile-8.jpg'
import UserImg8 from '../../assets/profile-9.jpg'


// react icons
import { FiPlus, FiPrinter, FiFileText, FiSearch ,FiCheckSquare} from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Pagination from "../Pagination/Pagination";
import DarkMode from "../DarkMode/DarkMode";

const DashboardHome = () => {
  const DeleteHandler =() =>{
      alert('Are you sure you want to delete')
  }
  const userData = {
    user: {
      name: "John Doe",
      image: UserImg,
      purchases: [
        {
          

          name: 'Nikon Z6',
          category: 'Photography',
          image: UserImg,
          stock: "50",
          status: "Active"
        },
        {

          name: 'Nikon Z6',
          category: 'Photography',
          image: UserImg1,
          stock: "63",
          status: "Inactive"
        },
        {

          name: 'Nikon Z6',
          category: 'Photography',
          image: UserImg2,
          stock: "153",
          status: "Inactive"
        },
        {

          name: 'Apple MacBook Pro 13',
          category: 'PC & Laptop',
          image: UserImg3,
          stock: "190",
          status: "Inactive"
        },
        {

          name: 'Oppo Find X2 Pro',
          category: 'Smartphone',
          image: UserImg4,
          stock: "50",
          status: "Active"
        },
        {

          name: 'Sony Master Series A9G',
          category: 'Smartphone & Tablet',
          image: UserImg5,
          stock: "60",
          status: "Inactive"
        },
        {

          name: 'Nike Tanjun',
          category: 'Sport & Outdoor',
          image: UserImg6,
          stock: "50",
          status: "Active"
        },
        {

          name: 'Apple MacBook Pro 13',
          category: 'Sport & Outdoor',
          image: UserImg7,
          stock: "107",
          status: "Active"
        },
        {

          name: 'Samsung Q90 QLED TV',
          category: 'Sport & Outdoor',
          image: UserImg8,
          stock: "118",
          status: "Active"
        },
        // ... (more purchases)
      ]
    }

  };
  return (
    <div className="Dashboard">
      <div className="mt-5">
        <span className="text-dark fw-bold fs-6 mt-1 mx-3">
          Data List Layout
        </span>
      </div>
 {/* Dashboard Navbar Start from Here */}     
      <div className="Dashboard_Nav mt-4">
        <div className="grid columns-12 gap-6 mx-3">
          <div className="d-flex flex-wrap flex-sm-nowrap align-items-center mt-2">
            <button className="btn btn-primary  me-2 ">Add New Product</button>
            <div className="dropdown">
              <button
                className="btn btn- border"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                <FiPlus />
              </button>
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <a href="" className="dropdown-item">
                    {" "}
                    <i data-feather="printer" className="me-2">
                      <FiPrinter />
                    </i>
                    Print{" "}
                  </a>
                  <a href="" className="dropdown-item">
                    {" "}
                    <i data-feather="file-text" className="me-2">
                      <FiFileText />
                    </i>
                    Export to Excel{" "}
                  </a>
                  <a href="" className="dropdown-item">
                    {" "}
                    <i data-feather="file-text" className="me-2">
                      <FiFileText />
                    </i>
                    Export to PDF{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block mx-auto text-secondary">
              Showing 1 to 10 of 150 entries
            </div>
            <div className="w-sm-auto mt-3 mt-sm-0 ms-sm-auto ms-md-0">
              <div className="position-relative me-2">
                <input
                  type="text"
                  className="form-control  box border-white"
                  placeholder="Search..."
                />
                <i
                  className="position-absolute my-auto top-0 bottom-0 me-3 end-0 mt-1"
                  data-feather="search"
                >
                  <FiSearch />
                </i>
              </div>
            </div> 
          </div>
        </div> 
      </div>
{/* Dashboard Navbar End Here */}
{/* Users */}
<div className="p-3 mt-2">
      <table className="table table-light table-striped">
        <thead>
          <tr>
            <th className="text-secondary ">IMAGES</th>
            <th className="text-secondary text-center w-25">PRODUCT NAME</th>
            <th className="text-secondary text-center w-25">STOCK</th>
            <th className="text-secondary">STATUS</th>
            <th className="text-secondary text-center">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {userData.user.purchases.map((purchase, index) => (
            <tr key={index}>
              <td><img src={purchase.image} alt={userData.user.name} width="35" height='35' className="UserImg" title="Uploaded at 26 July 2022"/><img src={userData.user.image} alt={userData.user.name} width="35" height='35' className="UserImg" title="Uploaded at 20 July 2022"/><img src={purchase.image} alt={userData.user.name} width="35" height='35' className="UserImg" title="Uploaded at 6 July 2022"/></td>
              <td className="text-center fs-6">{purchase.name}
              <br />
              <span className="fs-6">{purchase.category}</span>
              </td>
              <td className="text-center fs-6">{purchase.stock}</td>
              <td className="border-end fs-6"><FiCheckSquare/> {purchase.status}</td>
              <td>
                <div className="row">
                  <div className="col text-end">
                    <span className="btn btn text-secondary"><FiCheckSquare/> edit</span>
                  </div>
                    <div className="col">
                      
                      <span className="btn btn text-danger " onClick={DeleteHandler}><MdDeleteOutline/> Delete</span>
                    </div>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   <div className="row Pagination">
   <div className="col">
     <Pagination />
     </div>
   <div className="col text-end me-5">
     <DarkMode />
     </div>
   </div>
    </div>
  );
};

export default DashboardHome;
