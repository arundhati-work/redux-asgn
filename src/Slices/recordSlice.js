import {createSlice, nanoid} from '@reduxjs/toolkit';

export const recordSlice = createSlice({
    name: 'record',
    initialState: {records: []},
    reducers: {
        addRecord: (state,action) => {
            const record = {
                id:nanoid(),
                name: action.payload.name,
                age: action.payload.age
            }
            state.records.push(record);
        },
        removeRecord: (state,action) => {
            state.records = state.records.filter((record)=> record.id !== action.payload);
        },
        editRecord: (state,action) => {
            state.records = state.records.map((record) => {
                if (record.id === action.payload.id){
                    record.name = action.payload.name;
                    record.age = action.payload.age;
                }
                return record;
            })
        }

    }
})

export const {addRecord, removeRecord, editRecord} = recordSlice.actions;
export default recordSlice.reducer;