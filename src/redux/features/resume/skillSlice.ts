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

    addSkill: (state) => {
      const newSkill: Skill = { id: -1, name: "", rating: 0 };
      return [...state, newSkill];
    },

    removeSkill: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export default skillSlice.reducer;

export const { setSkillName, removeSkill, setSkillRating, addSkill } =
  skillSlice.actions;
