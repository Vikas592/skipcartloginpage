import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,

    handleSubmit,

    getValues,

    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      email: "",
    },
  });

  const history = useHistory();

  const onSubmit = (e: any) => {
    if (getValues().email) {
      history.push("/");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <header className="login-header">FORGET PASSWORD</header>
      <div className="login-body">
        <label className="email" htmlFor="email">
          Email Address
        </label>

        <input
          type="email"
          autoComplete="off"
          className="email-input"
          id="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
        />

        {errors.email && <span>This field is required</span>}

        <button className="login-btn" type="submit">
          send email
        </button>
      </div>
    </form>
  );
};

export default ForgotPassword;
