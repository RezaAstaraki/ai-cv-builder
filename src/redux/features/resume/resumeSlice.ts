import { combineReducers, createSlice } from "@reduxjs/toolkit";
import personaInfoSliceReducer from "./personaInfoSlice";
import resumeMetaReducer from "./resumeMetaSlice";
import experiencesReducer from "./experiencesSlice";
import { DocumentType, Experience, PersonalInfoType } from "../types";

export interface ResumeState {
  resumeMeta: DocumentType;
  personalInfo: PersonalInfoType;
  experiences: Experience[];
}

// Combine reducers with correct types
const resumeReducer = combineReducers({
  resumeMeta: resumeMetaReducer,
  personalInfo: personaInfoSliceReducer,
  experiences: experiencesReducer,
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
