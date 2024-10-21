export type TaskItemInputs = {
    title: string;
    description: string;
};
export type TaskItem = {
    id: string;
    title: string;
    description: string;
    completed?: boolean;
};
export type TaskState = {
    items: TaskItem[];
};
export type ThemeState = {
    theme: "light" | "dark";
};
