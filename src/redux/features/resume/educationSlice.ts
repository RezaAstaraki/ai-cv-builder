import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Education } from "../types";

const initialState: Education[] = [
  {
    id: 1,
    universityName: "Western Illinois University",
    startDate: "2018-07-30",
    endDate: "2019-11-29",
    degree: "Master",
    major: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    id: 2,
    universityName: "Western Illinois University",
    startDate: "2018-07-30",
    endDate: "2019-11-29",
    degree: "Master",
    major: "Computer Science",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

const educationSlice = createSlice({
  name: "education",
  initialState: initialState,
  reducers: {
    setUniversityName: (
      state,
      action: PayloadAction<{ index: number; universityName: string }>
    ) => {
      state[action.payload.index].universityName =
        action.payload.universityName;
    },

    setDegree: (
      state,
      action: PayloadAction<{ index: number; degree: string }>
    ) => {
      state[action.payload.index].degree = action.payload.degree;
    },

    setMajor: (
      state,
      action: PayloadAction<{ index: number; major: string }>
    ) => {
      state[action.payload.index].major = action.payload.major;
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

    setDescription: (
      state,
      action: PayloadAction<{ index: number; description: string }>
    ) => {
      state[action.payload.index].description = action.payload.description;
    },

    addEducation: (state) => {
      const newEdu: Education = {
        id: 0,
        universityName: "",
        startDate: "",
        endDate: "",
        degree: "",
        major: "",
        description: "",
      };

      return [...state, newEdu];
    },

    removeEducation: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export const {
  setUniversityName,
  setDegree,
  setMajor,
  setStartDate,
  setEndDate,
  setDescription,
  addEducation,
  removeEducation,
} = educationSlice.actions;

export default educationSlice.reducer;
