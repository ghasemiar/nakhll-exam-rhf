import { changeState, removeTask } from "@/app/lib/store/task-slice";
import AppModal from "@/app/components/AppModal";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { TaskItem } from "@/types";
import CreateTaskForm from "@/app/components/Task/CreateTask";
import { useRef } from "react";

const TaskCard = ({ task }: { task: TaskItem }) => {
  const dispatch = useAppDispatch();
  const closeDialogAfterDone = useRef();
  return (
    <div className="tw-p-5 tw-border tw-rounded-xl" key={task.id}>
      <div className="card-content">
        <h3 className="tw-text-2xl dark:tw-text-white">{task.title}</h3>
        <p className="tw-mt-3">{task.title}</p>
        <div>
          {task.completed ? (
            <div>
              وضعیت : <span className="tw-text-green-500">تکمیل شده</span>
            </div>
          ) : (
            <div>
              وضعیت : <span className="tw-text-red-500">تکمیل نشده</span>
            </div>
          )}
        </div>
      </div>
      <div className="tw-divider"></div>
      <div className="card-actions tw-grid tw-grid-cols-2 tw-gap-2">
        <button
          className="tw-btn tw-btn-error"
          onClick={() => dispatch(removeTask(task.id))}
        >
          حذف
        </button>
        <AppModal
          ref={closeDialogAfterDone}
          label="ویرایش"
          styles="tw-btn tw-btn-accent"
        >
          <CreateTaskForm
            id={task.id}
            afterDone={() => {
              closeDialogAfterDone.current.handleCloseModal();
            }}
          />
        </AppModal>
        <button
          className="tw-btn tw-btn-warning tw-col-span-2"
          onClick={() => dispatch(changeState(task.id))}
        >
          تغییر وضعیت
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
