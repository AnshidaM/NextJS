"use client";
// error component must be client components
import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create mail.</p>
    </main>
  );
};

export default Error;
