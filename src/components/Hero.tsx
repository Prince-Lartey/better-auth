import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/16/solid";

export default function Hero() {  

  return (
    <div className="relative isolate pt-24 md:pt-32 pb-16 sm:pb-24 md:pb-32 px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 border-red-500 border-2 -top-40 -z-[999] transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12 flex justify-center">
            <div className="relative flex items-center gap-x-2 rounded-full px-4 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-white/50 backdrop-blur-sm">
              <SparklesIcon
                className="h-4 w-4 text-indigo-600"
                aria-hidden="true"
              />
              <span className="font-medium">
                New Enterprise features released
              </span>
              <a
                href="#"
                className="flex items-center gap-x-1 font-semibold text-indigo-600"
              >
                <span>Learn more</span>
                <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
                <span className="absolute inset-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Main hero content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 leading-tight">
              Transform Your Data
              <br />
              Into Business Intelligence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Unlock actionable insights from your data in minutes, not months.
              Our AI-powered analytics platform helps you make smarter decisions
              faster than ever before.
            </p>

            {/* Improved CTAs with better visual hierarchy */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
              <a
                href="#"
                className="rounded-full bg-indigo-600 px-6 py-3.5 text-base font-medium text-white shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-1 flex-none w-full sm:w-auto"
              >
                Start free trial
              </a>
              <a
                href="#"
                className="rounded-full px-6 py-3.5 text-base font-medium text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-x-2 flex-none w-full sm:w-auto"
              >
                Watch demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Metrics/social proof */}
            <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3 max-w-3xl mx-auto">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-600">
                  2.5M+
                </span>
                <span className="text-sm text-gray-500 mt-1">Active users</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-600">98%</span>
                <span className="text-sm text-gray-500 mt-1">
                  Customer satisfaction
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-600">500+</span>
                <span className="text-sm text-gray-500 mt-1">
                  Enterprise clients
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
  );
}