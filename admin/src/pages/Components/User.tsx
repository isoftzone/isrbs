import React from "react";
const User: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">
      <header className="border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-normal">UserRole</h1>
        <p className="text-sm font-normal mt-1">IdentityRole</p>
      </header>
      <main className="px-6 py-6 flex-1">
        <form className="max-w-md">
          <div className="mb-6 flex items-center">
            <label htmlFor="name" className="w-20 text-sm font-normal">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border border-gray-300 rounded px-3 py-1.5 w-full max-w-xs"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-white text-sm px-3 py-1.5 rounded cursor-not-allowed"
            disabled
          >
            Create
          </button>
        </form>
        <div className="mt-6">
          <a href="#" className="text-sm text-blue-700 hover:underline">
            Back to List
          </a>
        </div>
      </main>
    </div>
  );
};
export default User;