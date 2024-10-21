import { zfd } from "zod-form-data";
import { z } from "zod";

export const formSchema = zfd.formData({
  title: zfd.text(z.string().min(1, "این فیلد اجباری است")),
  description: zfd.text(z.string().min(1, "این فیلد اجباری است")),
});
