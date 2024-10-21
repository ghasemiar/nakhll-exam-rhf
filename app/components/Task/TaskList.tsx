"use client";
import React from "react";
import { useAppSelector } from "@/app/lib/store/hooks";
import TaskCard from "@/app/components/Task/TaskCard";
import { TaskItem } from "@/types";

const Tasks = () => {
  const test = useAppSelector((state) => state.task.items);
  const completedTasks: TaskItem[] = test.filter(
    (task: TaskItem) => task.completed,
  );
  const progressTasks: TaskItem[] = test.filter(
    (task: TaskItem) => !task.completed,
  );
  return (
    <div className="tw-grid xl:tw-grid-cols-2 tw-gap-5">
      <div className="tw-bg-base-200 tw-p-3 tw-rounded-2xl">
        {completedTasks.length > 0 ? (
          <div className="tw-grid xl:tw-grid-cols-2 tw-gap-3">
            {completedTasks.map((task: TaskItem) => {
              return <TaskCard task={task} key={task.id} />;
            })}
          </div>
        ) : (
          <div className="tw-text-center">
            هیچ وظیفه تکمیل شده ای موجود نمی باشد
          </div>
        )}
      </div>
      <div className="tw-bg-base-200 tw-p-3 tw-rounded-2xl">
        {progressTasks.length > 0 ? (
          <div className="tw-grid xl:tw-grid-cols-2 tw-gap-3">
            {progressTasks.map((task: TaskItem) => {
              return <TaskCard task={task} key={task.id} />;
            })}
          </div>
        ) : (
          <div className="tw-text-center">
            هیچ وظیفه در حال برسی موجود نمی باشد
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
