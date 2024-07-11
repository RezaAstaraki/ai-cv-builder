import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Experience } from "../types";

const initialState: Experience[] = [];

const experiencesSlice = createSlice({
  name: "experiences",
  initialState: initialState,
  reducers: {
    seTitle: (
      state,
      action: PayloadAction<{ index: number; newTitle: string }>
    ) => {
      state[action.payload.index].title = action.payload.newTitle;
    },

    addExperience: (state) => {
      const newExp: Experience = {
        id: 0,
        title: "",
        companyName: "",
        city: "",
        currentlyWorking: true,
        state: "",
        startDate: "",
        endDate: "",
        workSummery: "",
      };

      return [...state, newExp];
    },

    removeExperience: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },

    seCompanyName: (
      state,
      action: PayloadAction<{ index: number; companyName: string }>
    ) => {
      state[action.payload.index].companyName = action.payload.companyName;
    },

    setCity: (
      state,
      action: PayloadAction<{ index: number; city: string }>
    ) => {
      state[action.payload.index].city = action.payload.city;
    },

    setState_: (
      state,
      action: PayloadAction<{ index: number; state_: string }>
    ) => {
      state[action.payload.index].state = action.payload.state_;
    },

    setStartDate: (
      state,
      action: PayloadAction<{ index: number; startDate: string }>
    ) => {
      state[action.payload.index].startDate = action.payload.startDate;
    },

    setEndDate: (
      state,
      action: PayloadAction<{ index: number; endDate: string }>
    ) => {
      state[action.payload.index].endDate = action.payload.endDate;
    },

    setCurrentlyWorking: (
      state,
      action: PayloadAction<{ index: number; currentlyWorking: boolean }>
    ) => {
      state[action.payload.index].currentlyWorking =
        action.payload.currentlyWorking;
    },

    setWorkSummery: (
      state,
      action: PayloadAction<{ index: number; workSummery: string }>
    ) => {
      state[action.payload.index].workSummery = action.payload.workSummery;
    },
  },
});

export const {
  seTitle,
  seCompanyName,
  setCity,
  setCurrentlyWorking,
  setEndDate,
  setStartDate,
  setState_,
  setWorkSummery,
  addExperience,
  removeExperience,
} = experiencesSlice.actions;

export default experiencesSlice.reducer;
