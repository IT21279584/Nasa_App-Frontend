import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const Mars = () => {
  const [fhazPhoto, setFhazPhoto] = useState(null);
  const [rhazPhoto, setRhazPhoto] = useState(null);
  const [mastPhoto, setMastPhoto] = useState(null);
  const [chemcamPhoto, setChemcamPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const apiKey = import.meta.env.VITE_NASA_API_KEY;

        const fetchPhoto = async (cameraType, setter) => {
          const response = await axios.get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
            {
              params: {
                sol: 1000,
                camera: cameraType,
                api_key: apiKey,
              },
            }
          );
          setter(response.data.photos[0]);
        };

        await Promise.all([
          fetchPhoto("fhaz", setFhazPhoto),
          fetchPhoto("rhaz", setRhazPhoto),
          fetchPhoto("mast", setMastPhoto),
          fetchPhoto("chemcam", setChemcamPhoto),
        ]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching Mars photos:", error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

    return (
        <div>
            <NavBar/>
        <div className="py-12 bg-gray-100">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Mars Rover Photos
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <svg
                    className="w-8 h-8 mr-3 text-gray-500 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737 0 3.428-.627 4.708-1.591z"
                    />
                  </svg>
                  <p className="text-gray-500">Loading...</p>
                </div>
              ) : (
                <>
                  {fhazPhoto && (
                    <div
                      className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
                      key={fhazPhoto.id}
                    >
                      <img
                        src={fhazPhoto.img_src}
                        alt={`Mars photo taken by ${fhazPhoto.camera.full_name}`}
                        className="object-cover w-full h-64"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">
                          {fhazPhoto.camera.full_name}
                        </p>
                        <p className="text-gray-700">{fhazPhoto.earth_date}</p>
                        <p className="text-gray-700">
                          <strong>Rover:</strong> {fhazPhoto.rover.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Launch Date:</strong>{" "}
                          {fhazPhoto.rover.launch_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Landing Date:</strong>{" "}
                          {fhazPhoto.rover.landing_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Mission Status:</strong>{" "}
                          {fhazPhoto.rover.status}
                        </p>
                      </div>
                    </div>
                  )}
                  {rhazPhoto && (
                    <div
                      className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
                      key={rhazPhoto.id}
                    >
                      <img
                        src={rhazPhoto.img_src}
                        alt={`Mars photo taken by ${rhazPhoto.camera.full_name}`}
                        className="object-cover w-full h-64"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">
                          {rhazPhoto.camera.full_name}
                        </p>
                        <p className="text-gray-700">{rhazPhoto.earth_date}</p>
                        <p className="text-gray-700">
                          <strong>Rover:</strong> {rhazPhoto.rover.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Launch Date:</strong>{" "}
                          {rhazPhoto.rover.launch_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Landing Date:</strong>{" "}
                          {rhazPhoto.rover.landing_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Mission Status:</strong>{" "}
                          {rhazPhoto.rover.status}
                        </p>
                      </div>
                    </div>
                  )}
                  {mastPhoto && (
                    <div
                      className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
                      key={mastPhoto.id}
                    >
                      <img
                        src={mastPhoto.img_src}
                        alt={`Mars photo taken by ${mastPhoto.camera.full_name}`}
                        className="object-cover w-full h-64"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">
                          {mastPhoto.camera.full_name}
                        </p>
                        <p className="text-gray-700">{mastPhoto.earth_date}</p>
                        <p className="text-gray-700">
                          <strong>Rover:</strong> {mastPhoto.rover.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Launch Date:</strong>{" "}
                          {mastPhoto.rover.launch_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Landing Date:</strong>{" "}
                          {mastPhoto.rover.landing_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Mission Status:</strong>{" "}
                          {mastPhoto.rover.status}
                        </p>
                      </div>
                    </div>
                  )}
                  {chemcamPhoto && (
                    <div
                      className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
                      key={chemcamPhoto.id}
                    >
                      <img
                        src={chemcamPhoto.img_src}
                        alt={`Mars photo taken by ${chemcamPhoto.camera.full_name}`}
                        className="object-cover w-full h-64"
                      />
                      <div className="p-4">
                        <p className="text-lg font-semibold">
                          {chemcamPhoto.camera.full_name}
                        </p>
                        <p className="text-gray-700">
                          {chemcamPhoto.earth_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Rover:</strong> {chemcamPhoto.rover.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Launch Date:</strong>{" "}
                          {chemcamPhoto.rover.launch_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Landing Date:</strong>{" "}
                          {chemcamPhoto.rover.landing_date}
                        </p>
                        <p className="text-gray-700">
                          <strong>Mission Status:</strong>{" "}
                          {chemcamPhoto.rover.status}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Mars;
