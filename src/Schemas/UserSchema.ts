import * as z from "zod";

export const UserSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  surname: z.string().trim().min(2, "Surname is required").optional(),
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  date: z
    .string()
    .trim()
    .min(1, "Date is required")
    .refine((val) => !isNaN(Date.parse(val)), "Enter a valid date"),
  role: z.string().trim().min(2, "Role is required"),
});

export type UserFormData = z.infer<typeof UserSchema>;
