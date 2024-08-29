// app/not-found.tsx

import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">Go back to the homepage</Link>
      </div>
    </>
  );
};

export default NotFound;
