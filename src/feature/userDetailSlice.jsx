import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const baseUrl = "http://localhost:3000/users"

// create action
export const createUser = createAsyncThunk(
    'createUser',
    async (data, { rejectWithValue }) => {
        console.log("mm", data)
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        try {
            const result = await response.json();
            console.log("eeee", result)
            return result
        } catch (error) {
            return rejectWithValue(error)
        }

    }
)

// read Action
export const showUser = createAsyncThunk(
    'showUser',
    async (args, { rejectWithValue }) => {
        console.log("show user")

        const response = await fetch(baseUrl);
        try {
            const result = await response.json();
            console.log("show user", result)
            return result
        } catch (error) {
            return rejectWithValue("xxxxxxx", error)
        }

    }
)

// single user Action
export const showSingleUser = createAsyncThunk(
    'showSingleUser',
    async (id, { rejectWithValue }) => {
        console.log("single User", id)

        const response = await fetch(`http://localhost:3000/users/${id}`);
        try {
            const result = await response.json();
            console.log("show single user", result)
            return result
        } catch (error) {
            return rejectWithValue("errrrrrrrr", error)
        }

    }
)

// delete user Action
export const deleteSingleUser = createAsyncThunk(
    'deleteSingleUser',
    async (id, { rejectWithValue }) => {
        console.log("delete User", id)

        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
            // headers: {
            //     "Content-Type": "application/json"
            // }

        });
        try {
            const result = await response.json();
            console.log("delete Single User", result)
            return result
        } catch (error) {
            return rejectWithValue("errrrrrrrr", error)
        }

    }
)


// update user action
export const updateUser = createAsyncThunk(
    'updateUser',
    async (data, { rejectWithValue }) => {
        console.log("update", data)
        const response = await fetch(`http://localhost:3000/users/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        try {
            const result = await response.json();
            console.log("upate res", result)
            return result
        } catch (error) {
            console.log("upate err", error)
            return rejectWithValue(error)
        }

    }
)















// Then, handle actions in your reducers:
const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
        singleUser: {}

    },
    reducers: {},
    extraReducers: {
        // create user
        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.users.push(payload)
        },
        [createUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        },



        // show user
        [showUser.pending]: (state) => {
            state.loading = true
        },
        [showUser.fulfilled]: (state, action) => {
            console.log("fetch", action)
            state.loading = false
            state.users = action.payload
        },
        [showUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        // show single user
        [showSingleUser.pending]: (state) => {
            state.loading = true
        },
        [showSingleUser.fulfilled]: (state, action) => {
            console.log("singleUser ", action)
            state.loading = false
            state.singleUser = action.payload
        },
        [showSingleUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        // delete single user
        [deleteSingleUser.pending]: (state) => {
            state.loading = true
        },
        [deleteSingleUser.fulfilled]: (state, action) => {
            console.log("deleteeee", action)
            state.loading = false
            state.users = state.users.filter((ele) => ele.id != action.meta.arg)
        },
        [deleteSingleUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // update user
        [updateUser.pending]: (state) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = state.users.map((ele) =>
                ele.id === action.payload.id ? action.payload : ele
            );
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


    }
})


export default userDetail.reducer;