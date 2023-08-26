import React from "react";

// User Images imported from assets folder
import UserImg from '../../assets/profile-1.jpg'
import UserImg1 from '../../assets/profile-2.jpg'
import UserImg2 from '../../assets/profile-3.jpg'
import UserImg3 from '../../assets/profile-4.jpg'
import UserImg4 from '../../assets/profile-5.jpg'



// react icons
import { FiFileText,FiCheckSquare} from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Pagination from "../../Components/Pagination/Pagination";
import DarkMode from "../../Components/DarkMode/DarkMode";

const WeaklyTopProduct = () => {
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
        
        // ... (more purchases)
      ]
    }

  };
  return (
    <div className="mt-3">
 {/* Dashboard Navbar Start from Here */}     
      <div className="row mt-4">
            <div className="col-7">
            <span className="fw-bold text-secondary fs-5 mx-2 "> Weekly Top Products</span>
            </div>
            <div className="col text-end">
            <span className="btn border fs-6 "><FiFileText /> Export to Excel</span>
            </div>
            <div className="col">
            <span className="btn border  fs-6 "><FiFileText/> Export to pdf</span>
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
                      
                      <span className="btn btn text-danger " onClick={DeleteHandler}><MdDeleteOutline/> Del</span>
                    </div>
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   <div className="row Pagination">
   <div className="col-10">
     <Pagination />
     </div>
   <div className="col text-end  me-5">
   <select class="form-select" aria-label="Default select example">
  <option selected>10</option>
  <option value="1">10</option>
  <option value="2">25</option>
  <option value="3">35</option>
  <option value="4">50</option>
</select>
     </div>
   </div>
    </div>
  );
};

export default WeaklyTopProduct;
