import React, { useState } from 'react'

function UseStateHook() {

    const [count, setCount] = useState(0);

    const nameDetails = {
        firstname: 'Code',
        lastname: 'Improve'
    }

    const [name, setName] = useState(nameDetails);

    const firstHandler = (event) => {
        setName({
            ...name,
            firstname: event.target.value
        })
    }

    const lastHandler = (event) => {
        setName({
            ...name,
            lastname: event.target.value
        })
    }

    const [rollno, setRollno] = useState([]);

    const addStudent = () => {
        setRollno([
            ...rollno,
            {
                id: rollno.length,
                name: "Test" + rollno.length
            }
        ])
        console.log(rollno)
    }



    return (
        <div>
            <h1>Use State Hook</h1>
            <button onClick={() => setCount(count + 2)}>Click{count}</button>
            <button onClick={() => setCount(count + 10)}>Click{count}</button>
            <button onClick={() => setCount(0)}>Reset</button>

            <h2>{name.firstname} {name.lastname}</h2>
            <form>
                <input type="text" name="fname" onChange={firstHandler} />
                <input type="text" name="lname" onChange={lastHandler} />
            </form>
            <br />

            <button onClick={addStudent}>Add Student</button>
        </div>
    )
}

export default UseStateHook
