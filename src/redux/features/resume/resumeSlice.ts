import { combineReducers, createSlice } from "@reduxjs/toolkit";
import personaInfoSliceReducer from "./personaInfoSlice";
import resumeMetaReducer from "./resumeMetaSlice";
import experiencesReducer from "./experiencesSlice";
import educationReducer from "./educationSlice";
import {
  DocumentType,
  Experience,
  PersonalInfoType,
  Education,
} from "../types";

export interface ResumeState {
  resumeMeta: DocumentType;
  personalInfo: PersonalInfoType;
  experiences: Experience[];
  education: Education[];
}

// Combine reducers with correct types
const resumeReducer = combineReducers({
  resumeMeta: resumeMetaReducer,
  personalInfo: personaInfoSliceReducer,
  experiences: experiencesReducer,
  education: educationReducer,
});

// Create resume slice
const resumeSlice = createSlice({
  name: "resume",
  initialState: {} as ResumeState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addDefaultCase(resumeReducer);
  },
});

export default resumeSlice.reducer;
