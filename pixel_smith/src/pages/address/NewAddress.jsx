import React, { useContext, useState } from 'react'
import { AddressContext } from '../../contexts/AddressContext'
import { Link } from 'react-router-dom'

export const NewAddress = () => {
    const {AddressState, handleNewAddress, AddressDispatch} = useContext(AddressContext)
    const [newAdd,setNewAdd] = useState({
        name:"",
        hno:"",
        city:"",
        state:"",
        country:"",
        pincode:"",
        phno:"",
    })
    const handleAddressInputChange = (e) => {
        setNewAdd((prev) => ({...prev, [e.target.name] : e.target.value}))
    }
  return (
    <div>
        {AddressState.map((add) => (
            <div key={add.id}>
                <p>{add.address}</p>
                <p>{add.name}</p>
                <p>{add.hno}</p>
                <p>{add.city}</p>
                <p>{add.state}</p>
                <p>{add.country}</p>
                <p>{add.pincode}</p>
                <p>{add.phno}</p>
                <button onClick={() => AddressDispatch({type:"deleteAddress",payload:add.id})}>Delete</button>
            </div>
        ))}
        
        <div>
            <input type="text" name="name" id="add-name" placeholder='Enter Name' onChange={(e) => handleAddressInputChange(e)} />
            <input type="text" name="hno" id="add-hno" placeholder='Enter House No. , Street' onChange={(e) => handleAddressInputChange(e)} />
            <input type="text" name="city" id="add-city" placeholder='Enter City' onChange={(e) => handleAddressInputChange(e)} />
            <input type="text" name="state" id="add-state" placeholder='Enter State'  onChange={(e) => handleAddressInputChange(e)} />
            <input type="text" name="country" id="add-country" placeholder='Enter Country'  onChange={(e) => handleAddressInputChange(e)} />
            <input type="number" name="pincode" id="add-pincode" placeholder='Enter Postal Code'  onChange={(e) => handleAddressInputChange(e)} />
            <input type="number" name="phno" id="add-phno" placeholder='Enter Mobile Number' onChange={(e) => handleAddressInputChange(e)}  />
            <button onClick={() => handleNewAddress(newAdd)}>Add new Address</button>
            <Link to="/address">Go back</Link>
        </div>
    </div>
  )
}
