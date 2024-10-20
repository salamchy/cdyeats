const Orders = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
        Orders Overview
      </h1>
      <div className="space-y-8">
        {/* Resturant orders display here */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex-1 mb-6 sm:mb-0">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Lorem
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              <span className="font-semibold">Address: </span>
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Orders;
