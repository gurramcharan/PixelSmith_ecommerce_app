import {createContext, useContext, useReducer, useState} from "react";
import {ApiContext} from "../index"
// import { FilterReducer } from "../reducers/FilterReducer";
// import { categories } from "../backend/db/categories"; import {
// FilterProductsReducer } from "../reducers/FilterProductsReducer";

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {
    const {product} = useContext(ApiContext)
    const pd = product
    
    const [searchBarValue,
        setSearchBarValue] = useState("");
    const [priceRangeValue,
        setPriceRangeValue] = useState(70000);
    const initialFilters = {
        search: "",
        price: "",
        priceRange: 70000,
        availability: [],
        categories: [],
        rating: "",
        brand: [],
        mountType: [],
        color: []
    }

    const FilterReducer = (state, action) => {
        switch (action.type) {
            case "SEARCH_INPUT":
                return {
                    ...state,
                    search: action.payload
                }
            case "PRICE_INPUT":
                return {
                    ...state,
                    price: action.payload
                }
            case "PRICE_RANGE_INPUT":
                setPriceRangeValue(action.payload);
                return {
                    ...state,
                    priceRange: action.payload
                }
            case "AVAILABILITY_INPUT":
                const updateAvailability = state
                    .availability
                    .includes(action.payload)
                    ? state
                        .availability
                        .filter((filter) => filter !== action.payload)
                    : [
                        ...state.availability,
                        action.payload
                    ]
                return {
                    ...state,
                    availability: updateAvailability
                }
            case "CATEGORIES_INPUT":
                const updateCategories = state
                    .categories
                    .includes(action.payload)
                    ? state
                        .categories
                        .filter((filter) => filter !== action.payload)
                    : [
                        ...state.categories,
                        action.payload
                    ]
                return {
                    ...state,
                    categories: updateCategories
                }
            case "RATING_INPUT":
                return {
                    ...state,
                    rating: action.payload
                }
            case "BRAND_INPUT":
                const updateBrand = state
                    .brand
                    .includes(action.payload)
                    ? state
                        .brand
                        .filter((filter) => filter !== action.payload)
                    : [
                        ...state.brand,
                        action.payload
                    ]
                return {
                    ...state,
                    brand: updateBrand
                }
            case "MOUNT_TYPE_INPUT":
                const updateMountType = state
                    .mountType
                    .includes(action.payload)
                    ? state
                        .mountType
                        .filter((filter) => filter !== action.payload)
                    : [
                        ...state.mountType,
                        action.payload
                    ]
                return {
                    ...state,
                    mountType: updateMountType
                }
            case "COLOR_INPUT":
                const updateColor = state
                    .color
                    .includes(action.payload)
                    ? state
                        .color
                        .filter((filter) => filter !== action.payload)
                    : [
                        ...state.color,
                        action.payload
                    ]
                return {
                    ...state,
                    color: updateColor
                }
            case "CLEAR_ALL":
                setPriceRangeValue(70000);
                // setAllMonitors(product)
                return ({
                    ...state,
                    search:"",
                    price: "",
                    priceRange: 70000,
                    availability: [],
                    categories: [],
                    rating: "",
                    brand: [],
                    mountType: [],
                    color: []
                })
            default:
                return state
        }
    
    }

    const handleClearButton = () => {
        dispatch({type: "CLEAR_ALL"})
    }

    const handleSearchInput = () => {
        dispatch({type: "SEARCH_INPUT", payload: searchBarValue})
    }

    const handlePriceInput = (e) => {
        dispatch({type: "PRICE_INPUT", payload: e.target.value})
    }

    const handlePriceRangeInput = (e) => {
        dispatch({type: "PRICE_RANGE_INPUT", payload: e.target.value})
    }

    const handleAvailabilityInput = (e) => {
        dispatch({type: "AVAILABILITY_INPUT", payload: e.target.value})
    }

    const handleCategoriesInput = (e) => {
        dispatch({type: "CATEGORIES_INPUT", payload: e.target.value})
    }

    const handleRatingInput = (e) => {
        dispatch({type: "RATING_INPUT", payload: e.target.value})
    }

    const handleBrandInput = (e) => {
        dispatch({type: "BRAND_INPUT", payload: e.target.value})
    }

    const handleMountTypeInput = (e) => {
        dispatch({type: "MOUNT_TYPE_INPUT", payload: e.target.value})
    }

    const handleColorInput = (e) => {
        dispatch({type: "COLOR_INPUT", payload: e.target.value})
    }

    const [state,
        dispatch] = useReducer(FilterReducer, initialFilters)


    const searchFilter = state.search.length > 0 ? pd.filter((item) => item.title.toLowerCase().includes(state.search.toLowerCase())) : pd;

    const sortByPriceFilter = state.price === "asc" ? searchFilter.sort((a,b) => a.price - b.price) : state.price === "desc" ? searchFilter.sort((a,b) => b.price - a.price) : searchFilter; 

    const priceRangeFilter = sortByPriceFilter.filter((item) => item.price <= state.priceRange)

    const availabilityFilter = state.availability.length === 0
    ? priceRangeFilter
    : priceRangeFilter.filter((item) => {
        if (state.availability.includes("outOfStock") && item.outOfStock) {
            return true
        }
        if (state.availability.includes("fastDelivery") && item.fastDelivery) {
            return true
        }
        if (state.availability.includes("discountProduct") && item.discountProduct) {
            return true
        }
        return false
    })

    const categoriesFilter = state.categories.length === 0
        ? availabilityFilter
        : availabilityFilter.filter((item) => {
            if (state.categories.includes("24inch") && item.category === "24 inch") {
                return true
            }
            if (state.categories.includes("27inch") && item.category === "27 inch") {
                return true
            }
            if (state.categories.includes("29inch") && item.category === "29 inch") {
                return true
            }
            if (state.categories.includes("32inch") && item.category === "32 inch") {
                return true
            }
            if (state.categories.includes("29inchUltrawide") && item.category === "29 inch ultrawide") {
                return true
            }
            if (state.categories.includes("34inchUltrawide") && item.category === "34 inch ultrawide") {
                return true
            }
            return false
        })

    const ratingFilter = state.rating === "5star"
        ? categoriesFilter.filter((item) => item.rating <= 5)
        : state.rating === "4.5star"
            ? categoriesFilter.filter((item) => item.rating <= 4.5)
            : state.rating === "4star"
                ? categoriesFilter.filter((item) => item.rating <= 4)
                : state.rating === "3.5starAndBelow"
                    ? categoriesFilter.filter((item) => item.rating <= 3.5)
                    : categoriesFilter

    const brandFitler = state.brand.length === 0
        ? ratingFilter
        : ratingFilter.filter((item) => {
            if (state.brand.includes("samsung") && item.company === "SAMSUNG") {
                return true
            }
            if (state.brand.includes("lg") && item.company === "LG") {
                return true
            }
            if (state.brand.includes("acer") && item.company === "ACER") {
                return true
            }
            if (state.brand.includes("zebronics") && item.company === "ZEBRONICS") {
                return true
            }
            if (state.brand.includes("benq") && item.company === "BENQ") {
                return true
            }
            return false
        })

    const mountTypeFilter = state.mountType.length === 0
        ? brandFitler
        : brandFitler.filter((item) => {
            if (state.mountType.includes("tableTop") && item.table) {
                return true
            }
            if (state.mountType.includes("wallMount") && item.wallMount) {
                return true
            }
            if (state.mountType.includes("tilt") && item.tilt) {
                return true
            }
            if (state.mountType.includes("verticalRotation") && item.verticalRotation) {
                return true
            }
            if (state.mountType.includes("heightAdjustable") && item.heightAdjustable) {
                return true
            }
            return false
        })

    const filteredProducts = state.color.length === 0
        ? mountTypeFilter
        : mountTypeFilter.filter((item) => {
            if (state.color.includes("white") && item.color === "white") {
                return true
            }
            if (state.color.includes("silver") && item.color === "silver") {
                return true
            }
            if (state.color.includes("black") && item.color === "black") {
                return true
            }
            return false
        })
    return (
        <FilterContext.Provider
            value={{
            handleClearButton,
            setSearchBarValue,
            priceRangeValue,
            setPriceRangeValue,
            handleSearchInput,
            handlePriceInput,
            handlePriceRangeInput,
            handleAvailabilityInput,
            handleCategoriesInput,
            handleRatingInput,
            handleBrandInput,
            handleMountTypeInput,
            handleColorInput,
            filteredProducts,
        }}>
            {children}
        </FilterContext.Provider>
    )
}