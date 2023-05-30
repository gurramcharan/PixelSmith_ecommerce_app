export const AddressReducer = (state, action) => {
    switch (action.type) {
        case "setAddress":
            return [
                ...state, {
                    id: state.length + 1,
                    name: action.payload.name,
                    hno:action.payload.hno,
                    city:action.payload.city,
                    state:action.payload.state,
                    country:action.payload.country,
                    pincode:action.payload.pincode,
                    phno:action.payload.phno,
                }
            ];
        case "deleteAddress":
            const updateAddress = state.filter((item) => item.id !== action.payload)
            return updateAddress
        default:
            return state;
    }
};