import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex text-6xl gap-3 font-semibold sm:text-3xl">
        <h1 className="text-secondary r">R</h1>
        <h1 className="text-white s">S</h1>
        <h1 className="text-tertiary a">A</h1>
      </div>
    </div>
  );
};

export default Loader;
