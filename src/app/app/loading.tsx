const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Hero Skeleton */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="h-10 w-64 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-5 w-full max-w-xl bg-gray-200 rounded mb-2"></div>
        <div className="h-5 w-96 bg-gray-200 rounded"></div>
      </section>

      {/* Cards Skeleton */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-200 rounded-xl mb-5"></div>

              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>

              {/* Description */}
              <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>

              {/* Bottom */}
              <div className="flex justify-between items-center">
                <div className="h-5 w-20 bg-gray-200 rounded"></div>
                <div className="h-9 w-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loading;