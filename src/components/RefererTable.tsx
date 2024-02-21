import { HiOutlineExternalLink } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

function RefererTable({ title }: any) {
  const data = [1,2,3];
  const { pathname } = useLocation();
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
      {pathname == "/" ? (
        <NavLink to="/referers">
          <span className="text-sm font-gothic  text-blue-600 flex items-center space-x-2 cursor-pointer hover:text-purple-500">
            <span>Show All </span>
            <HiOutlineExternalLink className="h-5 w-5" />
          </span>
        </NavLink>
      ) : (
        ""
      )}
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
                  {data.map((each) => (
                    <tr
                      key={each}
                      className="text-lg font-poppins font-semibold cursor-pointer group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-slate-800 text-center group-hover:text-teal-500">
                        dfsajHH
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-teal-500">
                        https://chat.openai.com/c/7b939613-e6cc-4dec-8e7c-5d67d8d947fa
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-800 text-center group-hover:text-teal-500">
                        110
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefererTable;
