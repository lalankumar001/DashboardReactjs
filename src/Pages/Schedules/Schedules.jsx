import React ,{useState}from 'react'
import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';


const Schedules = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
      setDate(newDate);
    };
  return (
    <div>
         <div className="mt-3">
            <div className="container text-center row">
                <div className="col text-truncate mt-1">
                    <span className='fs-5 fw-semibold'>Schedules</span>
                </div>
                <div className="col text-truncate">
                <span className='btn text-primary'>Add New Schedules</span>
                </div>
            </div>
        </div>

{/* Calendar is used from react calendar  */}
        <div className='me-1'>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
 {/* Schedules date or events */}
 <table className="table mt-2">
  <tbody>
    <tr>
      <th scope="row" className='text-secondary'> UI/UX Workshop</th>
      <td className='text-secondary'>23th</td>
   </tr>
    <tr>
      <th scope="row" className='text-truncate text-secondary'> VueJs Frontend Development</th>
      <td className='text-secondary'>10th</td>
   </tr>
        <tr>
        <th scope="row" className='text-secondary'>Laravel Rest API</th>
        <td className='text-secondary'>31th</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Schedules