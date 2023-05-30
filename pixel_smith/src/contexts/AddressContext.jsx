import {createContext, useReducer, useState} from "react";
import {AddressReducer} from "../reducers/AddressReducer";
export const AddressContext = createContext()

export const AddressProvider = ({children}) => {
    // let addresses = ["5-1-172,Usman saheb pet, Nellore,524002"]
    const [addresses,
        setAddresses] = useState(["5-1-172,Usman saheb pet, Nellore,524002"])

    const initialAddress = [
        {
            id: 1,
            name:"Charan",
            hno:"5-1-172",
            city:"Nellore",
            state:"Andhra Pradesh",
            country:"India",
            pincode:"524002",
            phno:"1234567890",
        }
    ]

    const [AddressState,
        AddressDispatch] = useReducer(AddressReducer, initialAddress)

    const handleNewAddress = (add) => {
        if (add !== "") {
            AddressDispatch({type: "setAddress", payload: add})
        }
    }
    return (
        <AddressContext.Provider
            value={{
            AddressState,
            handleNewAddress,
            AddressDispatch
        }}>
            {children}
        </AddressContext.Provider>
    )
}