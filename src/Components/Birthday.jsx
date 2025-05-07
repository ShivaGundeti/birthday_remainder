import React, { useReducer, useState } from 'react'
import Inputfield from './Inputfield'
import Image from './Image'
import { format } from 'date-fns';
const Birthday = () => {
    const[people,setpeople] = useState([{name: "shiva",age: getage("2005-03-14"),bday: "2005-03-14",image: null,days: 0,showdays: false},
        {name: "Rakesh",age: getage("1995-05-11"),bday: "1995-05-11",image: null,days: 0,showdays: false}]);

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
          const newImage = URL.createObjectURL(file);
          setpeople((prev) =>
            prev.map((person, i) =>
              i === index ? { ...person, image: newImage } : person
            )
          );
        }
      };


   function daysUntilBirthday(birthdayStr,index) {
    const today = new Date();
    const birthDate = new Date(birthdayStr); // Example: "2005-07-01"
    
    // Get the next birthday date (this year)
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  
    // If birthday this year already passed, take next year's birthday
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
  
    // Calculate difference in time
    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const updatedPeople = [...people];
    updatedPeople[index].days = diffDays;
    updatedPeople[index].showdays = !updatedPeople[index].showdays
    setpeople(updatedPeople);
    // return diffDays;
  }
  
 //add btn

//  function calcage(userdate){
//     const updateage = [...people];
//     const year = new Date().getFullYear();
//      updateage.age =  year - userdate.bday;
//     // updateage.age = 18;
//     // console.log(year);
    
    
//     setpeople(updateage)
//     console.log(updateage);
//  }

function getage(bday){
    const year = new Date().getFullYear();
    const age = new Date(bday).getFullYear();
    const diff = year - age;
    return diff
}

 function add(data){
    // let age = new Date().getFullYear() - data.dob.slice(0,4);
    const age = getage(data.dob);
    const updatedtask = [...people,{name: data.name,age: age,bday: data.dob,day: 1,showdays: false}]
    // updatedtask.age = new Date().getFullYear() - updatedtask.bday.slice(0,4)

    setpeople(updatedtask)
    data.name=""

    data.dob=""
    data.day=""
    // calcage(people.bday)
    
 }
  return (
   <>
   <Inputfield add = {add} />
  <div className="flex justify-center items-center w-screen h-100 p-4">
  <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
    <div className="detail-1 flex gap-7 flex-wrap items-center">
       <div className="person-container flex flex-col gap-3">

        {people.map((p,index)=>(
            <div className="person-details flex gap-6 items-center" key={index}>
        <div className="image w-20  h-20">
        <Image image={p.image} onChange={(e) => handleImageChange(e, index) }id={index}/>    
        </div>
           <div className=''>
           <h2>Name: {p.name}</h2>
            <h2>Age:{p.age} </h2>
            <h2>Birthday:{format(new Date(p.bday), 'dd-MM-yyyy')} </h2>
           </div>
        <div className="count-days bg-yellow-500 p-3 rounded cursor-pointer">
            <h2 onClick={()=>daysUntilBirthday(p.bday,index)}>{p.showdays ? `${p.days} days left`:"Click here"}</h2>
        </div>
        </div>
            
        ))}
       </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Birthday