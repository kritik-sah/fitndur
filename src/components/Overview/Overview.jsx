import React from "react";

const Overview = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Wan&apos;t to grow your
              <br className="hidden md:block" />
              business with{" "}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-theme-secondary" />
                <span className="relative inline-block text-theme-primary">
                  fitndur
                </span>
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We will showcase your fitness business with 1000&apos;s of our
              daily users, and best part we don&apos;t charge you a single penny
              for this or any member you got with us.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-theme-primary hover:border-theme-primary-dark">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  We belive in hard work!
                </h6>
                <p className="text-sm text-gray-900">
                  We dont want you to pay us to rank your gym higher, So lets
                  make a promise we will treat our users properly and give them
                  the best services.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-theme-primary hover:border-theme-primary-dark">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  Only the best will servive!!
                </h6>
                <p className="text-sm text-gray-900">
                  Your business will be ranked according to members uses your
                  services, reviews and affordability.
                </p>
                <p className="text-sm text-gray-900">
                  if you loose, its game over for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
