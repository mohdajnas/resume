// "use client";
// import { getDataPath, getImgPath } from "@/utils/image";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const LatestWork = () => {
//   const [workData, setWorkData] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(getDataPath("/data/work-data.json"));
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setWorkData(data?.workData);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section>
//       <div className="bg-softGray">
//         <div className="container">
//           <div className="py-16 xl:py-32 ">
//             <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
//               <h2>Latest Works</h2>
//               <p className="text-xl text-orange-500">( 04 )</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
//               {workData?.map((value: any, index: any) => {
//                 return (
//                   <div
//                     key={index}
//                     className="group flex flex-col gap-3 xl:gap-6"
//                   >
//                     <div className="relative">
//                       <Image
//                         src={getImgPath(value?.image)}
//                         alt="image"
//                         width={570}
//                         height={414}
//                         className="rounded-lg w-full h-full object-cover"
//                       />
//                       <Link
//                         onClick={(e) => e.preventDefault()}
//                         href={"#!"}
//                         className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
//                       >
//                         <span className="flex justify-center items-center p-5 w-full">
//                           <svg
//                             width="65"
//                             height="64"
//                             viewBox="0 0 65 64"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <rect
//                               x="0.333374"
//                               width="64"
//                               height="64"
//                               rx="32"
//                               fill="#FE4300"
//                             />
//                             <path
//                               d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
//                               stroke="#FFFF"
//                               strokeWidth="2"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </span>
//                       </Link>
//                     </div>
//                     <div className="flex flex-col gap-0 xl:gap-2">
//                       <div className="flex items-center justify-between">
//                         <Link href={`${value.slug}`}>
//                           <h5>{value?.title}</h5>
//                         </Link>
//                         <Image
//                           src={getImgPath("/images/icon/right-arrow-icon.svg")}
//                           alt="right-arrow-icon"
//                           width={30}
//                           height={30}
//                         />
//                       </div>
//                       <p>Client: {value?.client}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LatestWork;

"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-3 xl:gap-6"
                  >
                    <div className="relative">
                      <Image
                        src={getImgPath(value?.image)}
                        alt="image"
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-full object-cover"
                      />
                      {/* GitHub repository link overlay */}
                      <Link
                        href={value.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg"
                      >
                        <span className="flex justify-center items-center p-5 w-full">
                          {/* GitHub icon */}
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M32.3334 16C23.5834 16 16.3334 23.25 16.3334 32C16.3334 39.0833 20.8334 45.0833 27.2084 47.25C28.0417 47.4167 28.3334 46.9167 28.3334 46.5V42.75C24.7084 43.75 23.7084 41.25 23.7084 41.25C22.9584 39.3333 21.8334 38.8333 21.8334 38.8333C20.2084 37.8333 21.9584 37.8333 21.9584 37.8333C23.7917 37.9583 24.6667 39.5833 24.6667 39.5833C26.2084 42.1667 28.7917 41.4167 28.3751 41C28.5417 39.9167 29.0001 39.1667 29.5001 38.75C26.0417 38.3333 22.4167 37 22.4167 30.5C22.4167 28.75 23.0417 27.3333 24.7084 26.25C24.5001 25.8333 23.8751 24.1667 24.9167 21.9167C24.9167 21.9167 26.3751 21.5 28.3334 22.8333C29.7084 22.4583 31.2084 22.25 32.7084 22.25C34.2084 22.25 35.7084 22.4583 37.0834 22.8333C39.0417 21.5 40.5001 21.9167 40.5001 21.9167C41.5417 24.1667 40.9167 25.8333 40.7084 26.25C42.3751 27.3333 43.0001 28.75 43.0001 30.5C43.0001 37 39.3751 38.3333 35.9167 38.75C36.5417 39.3333 37.0834 40.4167 37.0834 42.0833V46.5C37.0834 46.9167 37.3751 47.4167 38.2084 47.25C44.5834 45.0833 49.0834 39.0833 49.0834 32C48.3334 23.25 41.0834 16 32.3334 16Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-0 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <Link 
                          href={value.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-orange-500 transition-colors"
                        >
                          <h5>{value?.title}</h5>
                        </Link>
                        <Link
                          href={value.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={getImgPath("/images/icon/right-arrow-icon.svg")}
                            alt="right-arrow-icon"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                      <p>Description: {value?.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
