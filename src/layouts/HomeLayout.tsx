import { QueryClient, useQuery } from "@tanstack/react-query";
import ShortUrlTable from "../components/ShortUrlTable";
import StatCards from "../components/StatCards";
import UserInputForm from "../components/UserInputForm";
import apiClient from "../apiClient";
import BaseLayout from "./BaseLayout";
import RefererTable from "../components/RefererTable";

function HomeLayout() {
  const refetchCall = () => {
    const queryClient = new QueryClient();
    queryClient
      .invalidateQueries({ queryKey: ["all_urls"], exact: true })
      .then(() => {
        console.log("invalidate");
        queryClient.refetchQueries({ queryKey: ["all_urls"], exact: true });
      });
  };
  const getAllUrls = async () => {
    const record = await apiClient.get("/shortener/getallurls");

    return record.data;
  };
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["all_urls"],
    queryFn: () => getAllUrls(),
  });

  if (isLoading) {
    return (
      <span className="font-gothic text-xl text-white my-auto mx-auto">
        Loading...
      </span>
    );
  }

  if (isError) {
    return (
      <span className="font-gothic text-xl text-white my-auto mx-auto">
        Error: {error.message}
      </span>
    );
  }
  return (
    <BaseLayout>
      <StatCards total={data.total_urls_created} users={data.users} />
      <div className="w-full flex justify-center  mt-10">
        <UserInputForm refetchCall={refetchCall} />
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-10  mt-10">
        <ShortUrlTable data={data.All_URLS.toReversed()} limit={3} />
        <RefererTable title={"Top Referers"} />
      </div>
    </BaseLayout>
  );
}

export default HomeLayout;
