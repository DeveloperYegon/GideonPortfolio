
import { useEffect } from "react"
import React from 'react'

function Notifications() {


  const [data, setData] = React.useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/requests')
  .then(response => response.json())
  .then(data => setData(data))
  .catch(err => console.log(err));
  },[])


  return (
    <div className='bg-[#fff]] bg-cover  mt-20 h-[100vh] p-10 '>
     <div className=" p-3">
     <h1 className="text-center text-lg">Notifications</h1>
      <hr className="bg-[#000] w-[80%] h-1 m-auto"/>

      <table  className="min-w-full bg-white border my-10 border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Message</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-3 px-6 text-left">{item.id}</td>
              <td className="py-3 px-6 text-left">{item.Name}</td>
              <td className="py-3 px-6 text-left">{item.Email}</td>
              <td className="py-3 px-6 text-left">{item.Message}</td>
            </tr>
          ))}
        </tbody>
      </table>


     </div>
      

    </div>
  )
}

export default Notifications