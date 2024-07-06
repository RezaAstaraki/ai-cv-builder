import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Experience } from "../types";

const initialState: Experience[] = [
  {
    id: 1,
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
    id: 2,
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
      action: PayloadAction<{ id: number; newTitle: string }>
    ) => {
      const { id, newTitle } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.title = newTitle;
      }
    },

    seCompanyName: (
      state,
      action: PayloadAction<{ id: number; companyName: string }>
    ) => {
      const { id, companyName } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.companyName = companyName;
      }
    },

    setCity: (state, action: PayloadAction<{ id: number; city: string }>) => {
      const { id, city } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.city = city;
      }
    },

    setState_: (
      state,
      action: PayloadAction<{ id: number; state_: string }>
    ) => {
      const { id, state_ } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.state = state_;
      }
    },

    setStartDate: (
      state,
      action: PayloadAction<{ id: number; startDate: string }>
    ) => {
      const { id, startDate } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.startDate = startDate;
      }
    },

    setEndDate: (
      state,
      action: PayloadAction<{ id: number; endDate: string }>
    ) => {
      const { id, endDate } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.endDate = endDate;
      }
    },

    setCurrentlyWorking: (
      state,
      action: PayloadAction<{ id: number; currentlyWorking: boolean }>
    ) => {
      const { id, currentlyWorking } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.currentlyWorking = currentlyWorking;
      }
    },

    setWorkSummery: (
      state,
      action: PayloadAction<{ id: number; workSummery: string }>
    ) => {
      const { id, workSummery } = action.payload;
      const experience = state.find((exp) => exp.id === id);
      if (experience) {
        experience.workSummery = workSummery;
      }
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
} = experiencesSlice.actions;

export default experiencesSlice.reducer;
