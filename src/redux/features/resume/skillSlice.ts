// import { Skill } from "../types/types";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Skill } from "../types";

const initialState: Skill[] = [
  {
    id: 0,
    name: "Angular",
    rating: 80,
  },
  {
    id: 1,
    name: "React",
    rating: 100,
  },
  {
    id: 2,
    name: "MySql",
    rating: 80,
  },
];

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    setSkillName: (
      state,
      action: PayloadAction<{ index: number; name: string }>
    ) => {
      state[action.payload.index].name = action.payload.name;
    },
    setSkillRating: (
      state,
      action: PayloadAction<{ index: number; rating: number }>
    ) => {
      state[action.payload.index].rating = action.payload.rating;
    },

    removeSkill: (state, action: PayloadAction<{ index: number }>) => {
      state.slice(action.payload.index, 1);
    },
  },
});

export default skillSlice.reducer;

export const { setSkillName, removeSkill, setSkillRating } = skillSlice.actions;
