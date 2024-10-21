import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { TaskItem, TaskItemInputs, TaskState } from "@/types";
import { v4 as uuidv4 } from "uuid";

const initialState: TaskState = {
  items: localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task")!)
    : [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (
      state: WritableDraft<TaskState>,
      action: PayloadAction<TaskItemInputs>,
    ) => {
      state.items.push({ ...action.payload, id: uuidv4(), completed: false });
      localStorage.setItem(
        "task",
        JSON.stringify(state.items.map((item) => item)),
      );
    },
    updateTask: (
      state: WritableDraft<TaskState>,
      action: PayloadAction<TaskItem>,
    ) => {
      const findIndex: number = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.items[findIndex] = {
        ...state.items[findIndex],
        title: action.payload.title,
        description: action.payload.description,
      };
      localStorage.setItem(
        "task",
        JSON.stringify(state.items.map((item) => item)),
      );
    },
    removeTask: (
      state: WritableDraft<TaskState>,
      action: PayloadAction<string>,
    ) => {
      const findIndex: number = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      state.items.splice(findIndex, 1);
      localStorage.setItem(
        "task",
        JSON.stringify(state.items.map((item) => item)),
      );
    },
    changeState: (
      state: WritableDraft<TaskState>,
      action: PayloadAction<string>,
    ) => {
      const findIndex: number = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      state.items[findIndex] = {
        ...state.items[findIndex],
        completed: !state.items[findIndex].completed,
      };
      localStorage.setItem(
        "task",
        JSON.stringify(state.items.map((item) => item)),
      );
    },
  },
});

export const { changeState, addTask, updateTask, removeTask } =
  taskSlice.actions;
