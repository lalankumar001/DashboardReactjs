import React from 'react'

// All user profile img imported her from assets
import img1 from '../../assets/profile-1.jpg'
import img2 from '../../assets/profile-2.jpg'
import img3 from '../../assets/profile-3.jpg'
import img4 from '../../assets/profile-4.jpg'

const Activity = () => {
    const userData = [
        {
          imgSrc: img1,
          name: 'Keanu Reeves',
          time: '7:00 PM',
          activity: 'Has joined the team',
        },
        {
          imgSrc: img2,
          name: 'Denzel Washington',
          time: '7:00 PM',
          activity: 'Added 2 new photos',
          updatedprofile:'Updated',
        },
        {
          imgSrc: img3,
          name: 'Morgan Freeman',
          time: '7:00 PM',
          activity: 'Has changed Samsung Q90 QLED TV price and description',
        },
        {
          imgSrc: img4,
          name: 'Tom Cruise',
          time: '7:00 PM',
          activity: 'Has changed Nike Tanjun description',
        },
        // Add more users here...
      ];
    
  return (
    <div>
        <div className="mt-3">
            <div className="container text-center row">
                <div className="col text-truncate mt-1">
                    <span className='fs-5 fw-semibold'>Recent Activities</span>
                </div>
                <div className="col text-truncate">
                <span className='btn text-primary'>Show More</span>
                </div>
            </div>
        </div>
        {userData.map((user, index) => (
        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none' key={index}>
         <div className="row mt-2">
            <div className="col-3">
           <img src={user.imgSrc} alt={`${user.name}'s profile`} width='40' height='40' className='rounded-pill ' />  -
            </div>
            <div className="col-9">
                <div className="row border me-2 shadow Activity_card">
                    <div className="col-7 text-dark fw-semibold"><span>{user.name}</span>
                    </div>
                    <div className="col-5 fs-6 text-secondary"><span>{user.time}</span></div>
                <p className='text-secondary w-100'>{user.activity}</p>
                <div className="row mb-2 text-secondary">
                    <div className="col">{user.updatedprofile}</div>
                    <div className="col">{user.updatedprofile}</div>
                </div>
                </div>
            </div>
         </div>
        </a>
        
         ))}
         
    </div>
  )
}

export default Activity

// <div className="container row mt-3 Transactions_card">
//           <div className="col-2">
//           <img src={user.imgSrc} alt={`${user.name}'s profile`} width='40' height='40' />
//           </div>
//           <div className="col-8 text-center mt-1">
//             <span className='text-dark fw-semibold'>{user.name}</span>
//             <p className='text-secondary'>{user.dob}</p>
//           </div>
//           <div className="col-2 mt-3">
//             <span className='text-danger'>{user.fund}</span>
//             </div>  
//         </div>