import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Experience } from "../types";

const initialState: Experience[] = [
  {
    id: 0,
    title: "Full Stack Developer",
    companyName: "Amazon",
    city: "New York",
    state: "NY",
    startDate: "Jan 2021",
    endDate: "",
    currentlyWorking: true,
    workSummery:
      "Designed, developed, and maintained full-stack applications using React and Node.js.\n" +
      "• Implemented responsive user interfaces with React, ensuring seamless user experiences across\n" +
      "various devices and browsers.\n" +
      "• Maintaining the React Native in-house organization application." +
      "• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end" +
      "and back-end systems.",
  },
  {
    id: 1,
    title: "Frontend Developer",
    companyName: "Google",
    city: "Charlotte",
    state: "NC",
    startDate: "May 2019",
    endDate: "Jan 2021",
    currentlyWorking: false,
    workSummery:
      "Designed, developed, and maintained full-stack applications using React and Node.js." +
      "• Implemented responsive user interfaces with React, ensuring seamless user experiences across" +
      "various devices and browsers." +
      "• Maintaining the React Native in-house organization application." +
      "• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end" +
      "and back-end systems.",
  },
];

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
