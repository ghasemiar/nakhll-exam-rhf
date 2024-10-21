import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "@/app/lib/store/task-slice";
import { themeSlice } from "@/app/lib/store/theme-slice";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    theme: themeSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
