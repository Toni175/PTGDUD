import React, { useEffect, useState } from 'react'

function FormStudent() {

    const [student, setStudent] = useState({
        name: "Tran Thanh Toan",
        email: "23722181.toan@student.iuh.edu.vn",
        age: 20
    })    

    function changeData() {

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let age = document.querySelector("#age").value;        

        if(name != null && name != '') {
            setStudent(student => ({...student, name}))
        }
        if(email != null && email != '') {
            setStudent(student => ({...student, email}))
        }
        if(age != null && age != '') {
            setStudent(student => ({...student, age}))
        }
    }

  return (
    <>
    <div>
        <h2>
            Name: {student.name}
            <br />
            Email : {student.email}
            <br />
            Age: {student.age}
        </h2>
    </div>
    <div>
        <input id='name' type="text" placeholder='Enter your name'/>
        <input id='email' type="text" placeholder='Enter your email'/>
        <input id='age' type="text" placeholder='Enter your age'/>
        <button onClick={changeData}>Change the data</button>
        <span id='uf'></span>
    </div>
    </>
  )
}

export default FormStudent