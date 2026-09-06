import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { RetroTvError } from "@/components/ui/404-error-page";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <RetroTvError />
      <div className="mt-8 z-10">
        <Link to="/" className="text-black hover:text-gray-500 underline text-sm uppercase tracking-widest font-mono transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
