"use server";

import { formSchema } from "@/app/components/Task/validation";
import { ZodError } from "zod";
import { useAppDispatch } from "@/app/lib/store/hooks";
import { addTask } from "@/app/lib/store/task-slice";
import { FormValues } from "@/app/components/Task/CreateTask";

// [...]

export type State =
  | {
      status: "success";
      message: string;
      data: FormValues;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export async function createTask(
  prevState: State | null,
  data: FormData,
): Promise<State> {
  try {
    const { title, description } = formSchema.parse(data);
    return {
      status: "success",
      message: `Created ${title} task!`,
      data: { title, description },
    };
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
