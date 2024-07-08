import { configureStore } from "@reduxjs/toolkit";
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
