import { useQuery } from "@tanstack/react-query";
import BaseLayout from "./BaseLayout";
import apiClient from "../apiClient";
import ShortUrlTable from "../components/ShortUrlTable";
import useBabyLink from "../store";

function MyShortUrlsLayout() {
  const { token } = useBabyLink();
  const getAllUrls = async () => {
    const record = await apiClient.get("/shortener/getallurls", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    <BaseLayout>
      <div className="flex flex-col items-center mt-10 h-full">
        <ShortUrlTable data={data.All_URLS} title={"My Short Urls"} />
      </div>
    </BaseLayout>
  );
}

export default MyShortUrlsLayout;
