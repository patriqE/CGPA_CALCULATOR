import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">CGPA Calculator</h1>
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl text-gray-600 mb-8">
          Welcome to your CGPA Calculator application
        </p>

        <div className="space-x-4">
          <Link
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md text-lg font-medium inline-block"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md text-lg font-medium inline-block"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
