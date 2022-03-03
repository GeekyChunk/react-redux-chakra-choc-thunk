import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchGit = createAsyncThunk('app/fetchGit', async (thunkAPI) => {
    let data = await axios.get("https://api.github.com/")
    return data.data
})

const initialState = {
    val: 0,
    data: {}
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        inc: (state) => {
            state.val += 1;
        },
        dec: (state) => {
            state.val -= 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGit.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const { inc, dec } = appSlice.actions
export default appSlice.reducer