import React, {useContext, useState} from 'react'
import {AddressContext} from '../../index'
import {Link} from 'react-router-dom'
import "./AddressPage.css"
import {AddressPagePriceComponent} from './components/AddressPagePriceComponent'

export const AddressPage = () => {
    const {AddressState, setSelectedAdd, selectAdd} = useContext(AddressContext)

    return (
        <div>
            <div>
                <h1 className='add-title'>CHECKOUT</h1>
            </div>
            <div className='all-add-main-container'>
                <div className='all-add-container'>
                    {AddressState.map((add) => (
                        <div className='add-main-container'>
                            <div key={add.id} className='add-container'>
                                <input type="radio" name="address" id={add.id} onClick={() => setSelectedAdd(add)}/>
                                <label htmlFor={add.id} className='add-name'>{add.name}</label>
                            </div>
                            <div htmlFor="add.id">
                                <p className='add-address'>{add.hno}, {add.city}, {add.state}, {add.country}, {add.pincode}.</p>
                                <p className='add-phno'>Ph No: {add.phno}</p>
                            </div>
                        </div>
                    ))}
                    <Link to="/newaddress" className='new-add-link'>-- Manage Addresses --</Link>
                </div>
                <div>
                    <AddressPagePriceComponent/>
                </div>
            </div>
        </div>
    )
}
