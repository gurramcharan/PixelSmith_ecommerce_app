import React, {useContext, useState} from 'react'
import {AddressContext} from '../../contexts/AddressContext'
import {Link, useNavigate} from 'react-router-dom'
import "./NewAddress.css"
import {AddNewAddressForm} from './components/AddNewAddressForm'
import {RiDeleteBin6Line} from "react-icons/ri"
import {IoMdArrowRoundBack} from "react-icons/io"

export const NewAddress = () => {
    const {AddressState, handleNewAddress, AddressDispatch} = useContext(AddressContext)
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h1 className='add-title'>ADDRESS</h1>
            </div>
            <div className='new-entire-add-main-container'>
                <div>
                <button onClick={() => navigate("/address")} className='new-add-goback-btn'><IoMdArrowRoundBack /></button>
                <div className='new-add-form-container'>
                    <div className='new-add-main-container'>
                        {AddressState.map((add) => (
                            <div key={add.id} className='new-add-container'>
                                <div className='new-add-name-delete-container'>
                                    <p className='new-add-name'>{add.name}</p>
                                    <p>
                                        <button
                                            onClick={() => AddressDispatch({type: "deleteAddress", payload: add.id})}
                                            className='new-add-delete-btn'><RiDeleteBin6Line/></button>
                                    </p>
                                </div>
                                <p className='new-add-address'>{add.hno}, {add.city}, {add.state}, {add.country}, {add.pincode}.</p>
                                <p className='new-add-phno'>Ph No: {add.phno}</p>

                            </div>
                        ))}
                    </div>
                    <div>
                        <AddNewAddressForm/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
