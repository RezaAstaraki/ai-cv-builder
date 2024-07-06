import { configureStore } from "@reduxjs/toolkit";
// import loginModal from "./features/modal/loginSlice";
// import signup from "./features/modal/signupSlice";
// import addPropertyReducer from "./features/modal/addPropertySlice";
// import searchReducer from "./features/modal/searchSlice";
// import resumeMetaReducer from "./features/resume/resumeMetaSlice";
// import personaInfoReducer from "./features/resume/personaInfoSlice";
import resumeReducer from "./features/resume/resumeSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    // loginModal: loginModal,
    // signup: signup,
    // search: searchReducer,
    // addProperty: addPropertyReducer,
    // resumeMeta: resumeMetaReducer,
    // personaInfo: personaInfoReducer,
    resume: resumeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
