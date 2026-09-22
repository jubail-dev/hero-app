const Loading = () => {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Navbar Skeleton */}
      <nav className="shadow py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              <div className="h-5 w-12 bg-gray-200 rounded"></div>
              <div className="h-5 w-12 bg-gray-200 rounded"></div>
              <div className="h-5 w-28 bg-gray-200 rounded"></div>
            </div>

            {/* Contribute Button */}
            <div className="hidden md:block h-12 w-36 bg-gray-200 rounded-2xl"></div>

            {/* Mobile Hamburger */}
            <div className="md:hidden w-7 h-7 bg-gray-200 rounded"></div>
          </div>
        </div>
      </nav>

      {/* Banner Skeleton */}
      <section className="pt-[150px] bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center">
          
          {/* Text Area */}
          <div className="flex flex-col items-center text-center space-y-6 max-w-4xl w-full">
            
            {/* Heading */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="h-12 sm:h-14 lg:h-20 w-64 sm:w-80 lg:w-[450px] bg-gray-200 rounded-lg"></div>
              <div className="h-12 sm:h-14 lg:h-20 w-52 sm:w-64 lg:w-[350px] bg-gray-200 rounded-lg"></div>
            </div>

            {/* Description */}
            <div className="w-full max-w-2xl flex flex-col items-center gap-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="h-12 w-40 bg-gray-200 rounded-xl"></div>
              <div className="h-12 w-40 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="mt-16 w-full flex justify-center">
            <div className="w-full max-w-4xl h-64 sm:h-80 lg:h-[450px] bg-gray-200 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loading;