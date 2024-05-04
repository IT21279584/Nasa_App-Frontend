

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-6xl">404</h1>
        <p className="text-lg text-gray-600 sm:text-xl">Page Not Found</p>
        <p className="mt-4 text-gray-500">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
