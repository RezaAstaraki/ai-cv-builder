import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PersonalInfoType } from "../types";

const initialState: PersonalInfoType = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  address: "",
  phone: "",
  email: "",
  // themeColor: "#33333",
};

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoType>) => {
      const {
        firstName,
        lastName,
        jobTitle,
        address,
        phone,
        email,
        themeColor,
        summery,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.jobTitle = jobTitle;
      state.address = address;
      state.phone = phone;
      state.email = email;
      if (themeColor) {
        state.themeColor = themeColor;
      }
      if (summery) {
        state.summery = summery;
      }
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPhoneNo: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSummary: (state, action) => {
      state.summery = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setFirstName,
  setLastName,
  setJobTitle,
  setAddress,
  setPhoneNo,
  setEmail,
  setSummary,
} = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
