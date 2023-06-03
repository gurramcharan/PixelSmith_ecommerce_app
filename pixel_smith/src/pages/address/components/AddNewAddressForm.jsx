import React, {useContext, useState} from 'react'
import {AddressContext} from '../../../contexts/AddressContext'
import "./AddNewAddressForm.css"

export const AddNewAddressForm = () => {
    const {handleNewAddress} = useContext(AddressContext)
    const [newAdd,
        setNewAdd] = useState({
        name: "",
        hno: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        phno: ""
    })
    const handleAddressInputChange = (e) => {
        setNewAdd((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div>
            <form action="/">
            <div className='new-add-input-container'>
                <div>

                    <input
                        type="text"
                        name="name"
                        id="add-name"
                        placeholder='Enter Name'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="text"
                        name="hno"
                        id="add-hno"
                        placeholder='Enter House No. , Street'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="text"
                        name="city"
                        id="add-city"
                        placeholder='Enter City'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="text"
                        name="state"
                        id="add-state"
                        placeholder='Enter State'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="text"
                        name="country"
                        id="add-country"
                        placeholder='Enter Country'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="number"
                        name="pincode"
                        id="add-pincode"
                        placeholder='Enter Postal Code'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>

                    <input
                        type="number"
                        name="phno"
                        id="add-phno"
                        placeholder='Enter Mobile Number'
                        className='new-add-inputs'
                        onChange={(e) => handleAddressInputChange(e)}
                        required/>
                </div>
                <div>
                    <button type='reset' className='new-add-input-btn' onClick={() => handleNewAddress(newAdd)}>Add new Address</button>
                </div>
            </div>
            </form>
        </div>
    )
}
