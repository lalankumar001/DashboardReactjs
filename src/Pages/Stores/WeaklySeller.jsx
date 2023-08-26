import React from 'react'

// All user profile img imported her from assets
import img1 from '../../assets/profile-1.jpg'
import img2 from '../../assets/profile-2.jpg'
import img3 from '../../assets/profile-3.jpg'
import img4 from '../../assets/profile-4.jpg'
import img5 from '../../assets/profile-5.jpg'




const WeaklySeller = () => {
  const userData = [
    {
      imgSrc: img1,
      name: 'Keanu Reeves',
      dob: '16 July 2021',
      fund: '137',
    },
    {
      imgSrc: img2,
      name: 'Denzel Washington',
      dob: '15 January 2021',
      fund: '137',
    },
    {
      imgSrc: img3,
      name: 'Morgan Freeman',
      dob: '7 July 2022',
      fund: '137',
    },
    {
      imgSrc: img4,
      name: 'Tom Cruise',
      dob: '9 September 2020',
      fund: '137',
    },
    {
      imgSrc: img5,
      name: 'Sylvester Stallone',
      dob: '30 September 2020',
      fund: '137',
    },
    // Add more users here...
  ];

  return (
    <div>
        <div className='mb-3'>
            <span className='fs-5 fw-bold text-secondary'>Weekly Best Sellers</span>
        </div>
        {userData.map((user, index) => (
        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none' key={index}>
       
        <div className="container row Transactions_card">
          <div className="col-2">
          <img src={user.imgSrc} alt={`${user.name}'s profile`} width='40' height='40' />
          </div>
          <div className="col-7 text-center mt-1">
            <span className='text-dark fw-semibold'>{user.name}</span>
            <p className='text-secondary'>{user.dob}</p>
          </div>
          <div className="col-3 mt-3">
            <span className='btn btn-success rounded-5'>{user.fund}sales</span>
            </div>  
        </div>
        </a>
         ))}
  {/*VIEW MORE BUTTON  */}
         <div className="me-3 text-center">
          <div className="btn btn-light text-secondary border w-100 p-2">View More</div>
         </div>
    </div>
  )
}

export default WeaklySeller