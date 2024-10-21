import { useForm, FieldPath } from "react-hook-form";
import { createTask, State } from "@/app/components/Task/action";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/components/Task/validation";
import { useEffect } from "react";
import RhfInput from "@/app/components/RhfInput";
import AppButton from "@/app/components/AppButton";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { addTask, updateTask } from "@/app/lib/store/task-slice";

export interface FormValues {
  title: string;
  description: string;
}

const inputClasses: string = "tw-input tw-input-bordered tw-w-full tw-m-2";
const buttonClasses: string = "tw-btn tw-btn-primary";
interface CreateTaskForm {
  id?: string;
  afterDone: () => void;
}
export default function CreateTaskForm({ afterDone, id }: CreateTaskForm) {
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { isValid, errors },
    setError,
    reset,
  } = useForm<FormValues>({
    mode: "all",
    resolver: zodResolver(formSchema),
  });
  const [state, formAction] = useFormState<State, FormData>(createTask, null);
  const { pending } = useFormStatus();
  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "error") {
      console.log(state.errors);
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        });
      });
    }
    if (state.status === "success") {
      if (id != undefined) {
        dispatch(updateTask({ ...state.data, id }));
      } else dispatch(addTask(state.data));
      reset();
      afterDone();
    }
  }, [state, setError, reset]);

  return (
    <>
      <form action={formAction}>
        <div className="w-full">
          <RhfInput
            name="title"
            register={register}
            placeholder="title"
            costumeClass={inputClasses}
            errors={errors}
          />
        </div>
        <div className="w-full">
          <RhfInput
            name="description"
            register={register}
            placeholder="description"
            costumeClass={inputClasses}
            errors={errors}
          />
        </div>
        <AppButton
          type="submit"
          disable={pending || !isValid}
          costumeClass={buttonClasses}
        >
          {!isValid && "لطفا فیلد هارا به درستی پر کنید"}
          {pending && "در انتظار"}
          {!pending && isValid && "ثبت"}
        </AppButton>
      </form>
    </>
  );
}
