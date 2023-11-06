import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productData: [],
    userInfo: null,
}

export const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                item => item._id === action.payload._id,
            )

            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.productData.push(action.payload)
            }
        },
        deleteItem: (state, action) => {
            const itemId = action.payload._id
            state.productData = state.productData.filter(
                item => item._id !== itemId,
            )
        },
        resetCart: (state) => {
            state.productData= [];
        },
        increamentQte:(state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if (item) {
                item.quantity++;
            }
        },
        decrementQte: (state , action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if (item.quantity === 1) {
                item.quantity =1;
            }
            else {
                item.quantity--;
            }
        }
    },
})

export const { addToCart, deleteItem, resetCart,decrementQte, increamentQte } = marketSlice.actions
export default marketSlice.reducer
