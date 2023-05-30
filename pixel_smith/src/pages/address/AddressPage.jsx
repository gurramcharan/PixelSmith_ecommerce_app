import React, { useContext, useState } from 'react'
import { AddressContext } from '../../index'
import { Link } from 'react-router-dom'

export const AddressPage = () => {
    const {AddressState} = useContext(AddressContext)
    
  return (
    <div>
        {AddressState.map((add) => (
            <div key={add.id}>
                <input type="radio" name="address" id={add.id} />
                <label htmlFor={add.id}>{add.name}</label>
            </div>
        ))}
        <Link to="/newaddress">Manage Addresses</Link>
    </div>
  )
}
