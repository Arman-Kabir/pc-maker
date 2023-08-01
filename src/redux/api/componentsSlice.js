import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    components: [],
    count:0
};

const componentsSlice = createSlice({
    name:'components',
    initialState,
    reducers:{
        addComponent:(state,action)=>{
            state.components.push(action.payload);
            state.count +=1;
        },
        removeComponent:(state,action)=>{
            state.components = state.components.filter((component)=>component.id !== action.payload);
            state.count -=1;
        }
    }
});

export const {addComponent,removeComponent} = componentsSlice.actions;
export default componentsSlice.reducer;

