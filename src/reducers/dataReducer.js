export const initialData = {
    name: 'shohan',
    age: 120,
    address: 'dhaka'
}
export const dataReducer = (state, action) => {
    console.log(action.payload)
    return state = action.payload;
}