import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserModel } from "./Models/UserModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "./Schemas/UserSchema";

function App() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid, isSubmitting },
  } = useForm<UserModel>({
    resolver: zodResolver(UserSchema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<UserModel> = (data) => {
    console.log(data);
  };

  return (
    <div className="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <p role="alert">{errors.name.message}</p>}

        <input
          {...register("surname")}
          type="text"
          placeholder="Enter your surname"
        />
        {errors.surname && <p role="alert">{errors.surname.message}</p>}
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
        />
        <input
          {...register("date")}
          type="date"
          placeholder="Enter your date of birth"
        />
        {errors.date && <p role="alert">{errors.date.message}</p>}
        <select {...register("role")} id="role" name="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>

        <button type="submit">Submit</button>
        <button
          type="button"
          disabled={isSubmitting}
          style={{ marginLeft: 15 }}
          onClick={() => trigger()}
        >
          {" "}
          Display Requirements
        </button>
      </form>
      <div style={{ marginTop: 20 }}>
        <p>Form is valid: {isValid ? "Yes" : "No"}</p>
        <p>Form is submitting: {isSubmitting ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;
