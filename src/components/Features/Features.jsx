import {
  HiOutlineCurrencyRupee,
  HiOutlineFire,
  HiOutlineMap,
  HiOutlineSparkles,
} from "react-icons/hi2";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
            What is fitndur? & What we offer?
          </h5>
          <p className="mb-6 text-gray-900">
            fitndur is a digital platform which helps you to find ideal nearby
            gyms,Pools, health clubs for you, which you can use and pay only for
            those days where you hit the ground :p
          </p>
          <div className="flex items-center">
            <button className="btn-theme-primary">Get started</button>
            <a href="/" aria-label="" className="btn-theme-primary-text">
              Learn more
            </a>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
              <HiOutlineFire />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Traveller / Working professionals
            </h6>
            <p className="text-sm text-gray-700">
              New in town and want to connect with locals? Or a busy
              professional with limited time to achieve your fitness goals? Look
              no further - Fitndur is here to provide you with flexible and
              convenient fitness solutions.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
              <HiOutlineSparkles />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Students / LOB</h6>
            <p className="text-sm text-gray-700">
              If you&apos;re a student who enjoys working on yourself and wants
              to try new things or go on a gym date, we&apos;ve got you covered.
              You can also save a lot of money with us by only paying for the
              days that you really work out.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
              <HiOutlineMap />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Adventure</h6>
            <p className="text-sm text-gray-700">
              If you enjoy trying new things, such as martial arts, yoga, or a
              nearby gym or pool. Given that we make it simpler for you to
              identify and use these services, you will undoubtedly like using
              our application.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 text-3xl">
              <HiOutlineCurrencyRupee />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Flexible pricing models
            </h6>
            <p className="text-sm text-gray-700">
              At Fitndur, we believe in being shredded and flexible - just like
              our pricing models. Whether you prefer to pay per day, month, or
              year, we&apos;ve got you covered with impressive services and
              flexible options. Join us now and start your fitness journey on
              your own terms!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
