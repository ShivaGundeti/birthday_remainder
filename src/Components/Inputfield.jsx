import React, { useState } from 'react';

const Inputfield = ({add}) => {
    const[formData,setFormData] = useState({name: "",dob: "",days: 0})

  return (
    <>
      <div className="bg-gray-900 py-6 px-4 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-between">

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
            <label className="text-white font-semibold">Name:</label>
            <input
              type="text"
              className="bg-white rounded px-3 py-2 w-full sm:w-64"
              value={formData.name}
              onChange={(e)=>{setFormData({...formData,name: e.target.value})}}
            />
          </div>

       

      
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
            <label className="text-white font-semibold">Birthday:</label>
            <input
              type="date"
              className="bg-white rounded px-3 py-2 w-full sm:w-64"
              value={formData.dob}
              onChange={(e)=>{setFormData({...formData,dob: e.target.value})}}
            />
          </div>

          <button className='bg-blue-800 text-white rounded w-full sm:w-24 p-2 cursor-pointer'
          onClick={()=>{add(formData)}}>Add</button>
        </div>
      </div>
    </>
  );
};

export default Inputfield;
