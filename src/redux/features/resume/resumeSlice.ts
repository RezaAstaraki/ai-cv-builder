import { PayloadAction, combineReducers, createSlice } from "@reduxjs/toolkit";
import personaInfoSliceReducer from "./personaInfoSlice";
import resumeMetaReducer from "./resumeMetaSlice";
import experiencesReducer from "./experiencesSlice";
import educationReducer from "./educationSlice";
import skillReducer from "./skillSlice";
import {
  DocumentType,
  Experience,
  PersonalInfoType,
  Education,
  Skill,
} from "../types";

export interface ResumeState {
  resumeMeta: DocumentType;
  personalInfo: PersonalInfoType;
  experiences: Experience[];
  education: Education[];
  skill: Skill[];
}

// Combine reducers with correct types
const resumeReducer = combineReducers({
  resumeMeta: resumeMetaReducer,
  personalInfo: personaInfoSliceReducer,
  experiences: experiencesReducer,
  education: educationReducer,
  skill: skillReducer,
});

// Create resume slice
const resumeSlice = createSlice({
  name: "resume",
  initialState: {} as ResumeState,
  reducers: {
    setResumeData(state, action: PayloadAction<ResumeState>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addDefaultCase(resumeReducer);
  },
});

export default resumeSlice.reducer;
export const { setResumeData } = resumeSlice.actions;
