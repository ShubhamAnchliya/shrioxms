"use client";

import Link from "next/link";

function Career() {
  //   const targetUrl = "https://keynote.tailwindui.com";
  const targetUrl = "https://shrioxms.zohorecruit.in/jobs/Careers";

  return (
    <section id="career">
      <>
        <section className="w-full py-12 px-4 bg-gray-50 dark:bg-black flex justify-center items-center">
          {/* Main Container */}
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-lg ring-1 ring-slate-900/5">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/30 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[500px] h-[500px] bg-purple-100 dark:bg-purple-900/30 blur-[80px] rounded-full pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 sm:p-16 lg:p-24 gap-10">
              {/* Text Section */}
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Be Part of the Shrioxms Growth Story
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                  We don’t just offer jobs; we offer pathways to excellence and
                  continuous professional development.
                </p>
              </div>

              {/* Action Section */}
              <div className="w-full max-w-md">
                <div className="flex flex-col gap-y-3">
                  <div className="lets-collaborate ">
                    <Link
                      href={targetUrl}
                      className="group text-dark_black font-medium bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 w-fit "
                    >
                      <span className="group-hover:translate-x-9 transform transition-transform duration-200 ease-in-out">
                        Explore Career
                      </span>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:-translate-x-36 transition-all duration-200 ease-in-out"
                      >
                        <rect width="32" height="32" rx="16" fill="#1B1D1E" />
                        <path
                          d="M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668"
                          stroke="white"
                          strokeWidth="1.42857"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* <div className="flex items-center justify-between rounded-full bg-white dark:bg-slate-800 p-1.5 ring-1 ring-slate-200 dark:ring-slate-700 shadow-sm">
                   

                    
                    <Link
                      href={targetUrl}
                      className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all whitespace-nowrap"
                    >
                      Sign up today
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </section>
  );
}

export default Career;
