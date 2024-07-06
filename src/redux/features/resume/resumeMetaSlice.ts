import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentType } from "../types";

const initialState: DocumentType = {
  id: 0,
  documentId: "",
  locale: "",
  title: "",
  resumeId: "",
  userEmail: "",
  userName: "",
};

export const modalSlice = createSlice({
  name: "resumeMeta",
  initialState,
  reducers: {
    setMetaData: (state, action: PayloadAction<DocumentType>) => {
      const { id, documentId, locale, title, resumeId, userEmail, userName } =
        action.payload;
      state.id = Number(id);
      state.documentId = documentId;
      state.locale = locale;
      state.title = title;
      state.resumeId = resumeId;
      state.userEmail = userEmail;
      state.userName = userName;
    },
  },
});

export const { setMetaData } = modalSlice.actions;
export default modalSlice.reducer;
