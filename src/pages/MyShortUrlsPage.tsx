import { useQuery } from "@tanstack/react-query";
import MyShortUrls from "../components/MyShortUrls";

import apiClient from "../apiClient";

function MyShortsPage() {
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
      <span className="font-gothic text-xl text-white my-auto">
        Error: {error.message}
      </span>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-start mt-10">
      <MyShortUrls data={data.All_URLS} title={"My Short Urls"} />
    </div>
  );
}

export default MyShortsPage;
