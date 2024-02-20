import { HiOutlineExternalLink } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
type ShortenedUrl = {
  _id: string;
  originalUrl: string;
  shortUrlKey: string;
  userId: string;
  visits: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
function ShortUrlTable({
  data = [],
  limit = null,
  title = "Latest URLs",
}: any) {
  const { pathname } = useLocation();
  console.log(data, limit, pathname);

  return !data.length ? (
    pathname == "/" ? (
      ""
    ) : (
      <p className="font-gothic text-xl text-white my-auto">
        No Records Found!
      </p>
    )
  ) : (
    <div className="flex flex-col space-y-4  max-w-[95%]  md:max-w-none">
      <h1 className="text-xl font-gothic text-center text-pink-500">{title}</h1>
      <Link to={"/myurls"}>
        <span className="text-sm font-gothic  text-blue-600 flex items-center space-x-2 cursor-pointer hover:text-purple-500">
          {pathname == "/" ? <span>Show All </span> : ""}

          {pathname == "/" ? <HiOutlineExternalLink className="h-5 w-5" /> : ""}
        </span>
      </Link>
      <div className="bg-white">
        <div className=" overflow-x-auto">
          <div className=" min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 ">
                <thead>
                  <tr className="font-gothic">
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-slate-700 uppercase text-nowrap"
                    >
                      Short URLS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-slate-700 uppercase"
                    >
                      Long URLS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-slate-700 uppercase"
                    >
                      Visits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {limit
                    ? data?.map((eachUrl: ShortenedUrl, index: number) => {
                        if (index < limit) {
                          console.log(eachUrl);
                          return (
                            <tr
                              key={eachUrl._id}
                              className="text-lg font-poppins font-semibold cursor-pointer group"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm  text-slate-800 text-center group-hover:text-blue-700">
                                <a
                                  href={`https://baby-url.vercel.app/${eachUrl.shortUrlKey}`}
                                  target="_blank"
                                >
                                  {eachUrl.shortUrlKey}
                                </a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-teal-700">
                                <a href={eachUrl.originalUrl} target="_blank">
                                  {eachUrl.originalUrl}
                                </a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-violet-700">
                                {eachUrl.visits.length}
                              </td>
                            </tr>
                          );
                        }
                      })
                    : data?.map((eachUrl: ShortenedUrl) => {
                        return (
                          <tr
                            key={eachUrl._id}
                            className="text-lg font-poppins font-semibold cursor-pointer group"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm  text-slate-800 text-center group-hover:text-blue-700">
                              <a
                                href={`https://baby-url.vercel.app/${eachUrl.shortUrlKey}`}
                                target="_blank"
                              >
                                {eachUrl.shortUrlKey}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-teal-700">
                              <a href={eachUrl.originalUrl} target="_blank">
                                {eachUrl.originalUrl}
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-violet-700">
                              {eachUrl.visits.length}
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortUrlTable;
