import {
  HiOutlineMagnifyingGlassCircle,
  HiOutlineSparkles,
  HiOutlineTrophy,
} from "react-icons/hi2";

export const Header = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Get Ready Adventurer
              </p>
            </div>
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Now</span>
              </span>{" "}
              you can find the best fitness center near you.
            </h1>
            <p className="text-base text-gray-700 md:text-lg">
              the ultimate fitness companion that helps you discover new fitness
              centers, meet new people, and achieve your fitness goals with
              ease. With our flexible payment plans and a variety of features,
              you&apos;ll be on your way to a healthier lifestyle in no time.
              explore your way to heal yourself!
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button className="btn-theme-primary !bg-theme-primary">
              Get started
            </button>
            {/* <button className="btn-theme-primary">Get started</button> */}
            <a href="/" aria-label="" className="btn-theme-primary-text">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gray-100 h-1/2" />
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 text-2xl">
              <HiOutlineMagnifyingGlassCircle />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Search your happiness
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 text-2xl">
              <HiOutlineSparkles />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Go byond plus ultra
            </p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 text-2xl">
              <HiOutlineTrophy />
            </div>
            <p className="font-bold tracking-wide text-gray-800">
              Enjoy your win
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
