import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Breadcrumb() {

  const [path, setPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setPath(pathName);
  }, [location]);

  const pathParts = path.split("/").filter((part) => part !== "");
  const lastPart = pathParts.pop();

  return (
    
          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between py-4">
            {/* <!-- Navigation Toggle --> */}
            {/* <!-- End Navigation Toggle --> */}
  
            {/* <!-- Breadcrumb --> */}
            <div>
            <ol
              className="ml-3 flex items-center whitespace-nowrap min-w-0"
              aria-label="Breadcrumb"
            >
              <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                QRest
                <svg
                  className="flex-shrink-0 mx-1 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              {pathParts.map((part, index) => (
                <li
                  key={index}
                  className="text-sm flex items-center ml-1 capitalize font-semibold text-gray-800 truncate dark:text-gray-400"
                >
                  <Link to={`/${part}`}>{part}</Link>
                  <svg
                    className="flex-shrink-0 mx-1 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </li>
              ))}
              <li>
                <span className="text-sm ml-1 capitalize flex items-center font-semibold text-gray-800 truncate dark:text-gray-400">
                  {lastPart}
                </span>
              </li>
            </ol>
            </div>
            <div>
              <Sidebar/>
            </div>
            {/* <!-- End Breadcrumb --> */}
          </div>
        </div>


  )
}
