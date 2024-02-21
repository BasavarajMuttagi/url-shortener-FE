import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { z } from "zod";
import { useState } from "react";
import apiClient from "../apiClient";
import useBabyLink from "../store";
import { ImSpinner8 } from "react-icons/im";
import logo from "../assets/logo.png";
function SignUp() {
  const { setToken } = useBabyLink();
  const [isSpin, setIsSpin] = useState(false);

  const navigate = useNavigate();
  const userSignUpSchema = z
    .object({
      username: z
        .string()
        .min(3, { message: "username must be more than 2 digits" }),
      email: z.string().email(),
      password: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
      confirmpassword: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
    })
    .refine((data) => data.password == data.confirmpassword, {
      message: "Passwords don't match",
      path: ["confirmpassword"],
    });

  type userSignUpType = z.infer<typeof userSignUpSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userSignUpType>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: userSignUpType) => {
    setIsSpin(true);
    await apiClient
      .post(`/auth/register`, data)
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setToken(res.data.token);
        navigate("/");
        reset();
        location.reload();
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message || "Something Went Wrong!", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-screen-sm h-fit space-y-12 p-5 w-full md:w-[400px] "
    >
      <div className="text-2xl font-gothic text-white">
        <div className="flex  items-center justify-center">
          <img src={logo} className="aspect-video h-14 mr-6" />
          <div className="border border-l-2 rounded-md border-yellow-400 h-14"></div>
          <div className="ml-6 text-pink-500">Sign Up</div>
        </div>
      </div>
      <div className="space-y-9">
        <div className="relative">
          <input
            type="text"
            {...register("username")}
            className="relative p-2 rounded-sm w-full outline-none font-gothic py-3"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-400 font-medium text-sm absolute top-12">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            {...register("email")}
            className="p-2 rounded-sm w-full outline-none font-gothic py-3"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-400 font-medium text-sm absolute top-12">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            {...register("password")}
            className="p-2 rounded-sm w-full outline-none font-gothic py-3"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-400 font-medium text-sm absolute top-12">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            {...register("confirmpassword")}
            className="p-2 rounded-sm w-full outline-none font-gothic py-3"
            placeholder="Confirm Password"
          />
          {errors.confirmpassword && (
            <p className="text-red-400 font-medium text-sm absolute top-12">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <button className="w-full px-3 py-2 h-12 rounded-md bg-[#9C7EF1] flex items-center justify-center">
          <span className="text-white text-center font-gothic">Sign Up</span>
          <span>
            {isSpin && (
              <ImSpinner8 className="animate-spin text-white  ml-2 h-6 w-6" />
            )}
          </span>
        </button>
      </div>
      <div className="flex flex-col space-y-5  items-center justify-center font-gothic text-white">
        <div>or</div>
        <div className="text-wrap text-center">
          Already Have An Account ?{" "}
          <span className="text-blue-500" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
