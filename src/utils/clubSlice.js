import { createSlice } from "@reduxjs/toolkit";


const clubSlice = createSlice(
    {
        name: "clubName",
        initialState: {
            value:{},
        },
        reducers: {
            fillSlice:(state,action) => {
                state.value
            }
        }

    }
)