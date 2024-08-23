import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "User",
    email: "user@gmail.com"
}
const profileSlicer = createSlice({
    name: "profile", 
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.name = action.payload.name,
            state.email = action.payload.email
        }
    }
})

export const {updateUser} = profileSlicer.actions;
export default profileSlicer.reducer;