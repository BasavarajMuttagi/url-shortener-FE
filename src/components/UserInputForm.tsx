import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { ImSpinner8 } from "react-icons/im";
import { useState } from "react";
import apiClient from "../apiClient";
import { AxiosError } from "axios";

function UserInputForm({ refetchCall }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const inputSchema = z.object({
    OriginalUrl: z.string().min(1),
  });
  type inputSchemaType = z.infer<typeof inputSchema>;
  const {
    reset,
    formState: { errors },
    register,
    handleSubmit,
    setError,
  } = useForm<inputSchemaType>({
    resolver: zodResolver(inputSchema),
  });

  const genetateShortUrl = async (data: inputSchemaType) => {
    setIsLoading(true);
    await apiClient
      .post("/shortener/create", {
        URL: data.OriginalUrl,
      })
      .then((res) => {
        console.log(res);
        reset();
        refetchCall();
      })
      .catch((err: AxiosError | any) => {
        console.log(err.response?.data.message);
        setError("root", { message: err.response?.data.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="w-full space-y-5">
      <h1 className="text-xl font-gothic text-slate-200 text-center">
        Create New Short URL
      </h1>
      <form
        className="p-2 rounded-md drop-shadow-md w-full flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-3 md:justify-center"
        onSubmit={handleSubmit(genetateShortUrl)}
      >
        <div className=" bg-white  rounded-md w-full md:w-[50%] relative">
          <input
            type="text"
            placeholder="http://www.example.com/"
            {...register("OriginalUrl")}
            className="outline-none h-12  w-full px-3 rounded-md font-inter"
          />
          <div className="absolute top-12 left-0 px-3">
            {errors.OriginalUrl && (
              <p className="text-sm text-red-400">
                {errors.OriginalUrl.message}
              </p>
            )}
            {errors.root && (
              <p className="text-sm text-red-400">{errors.root.message}</p>
            )}
          </div>
        </div>
        <div className="self-center">
          <button
            type="submit"
            className="px-3 py-2 h-12 rounded-md bg-[#9C7EF1] flex items-center"
          >
            <span className="text-white text-center font-gothic">CREATE</span>
            <span>
              {false && (
                <ImSpinner8 className="animate-spin text-white ml-2 h-6 w-6" />
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserInputForm;
