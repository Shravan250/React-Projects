import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-row gap-10 bg-gray-600 m-4 p-4">
      <img src={data.avatar_url} width={300} alt="" />
      <div className=" text-white text-3xl flex flex-col">
        <p>
          <span className="text-orange-400">Github Username:</span> {data.login}
        </p>
        <p>
          <span className="text-orange-400">Github Public Repository:</span>{" "}
          {data.public_repos}
        </p>
        <p>
          <span className="text-orange-400">Github Following:</span>{" "}
          {data.following}
        </p>
      </div>
    </div>
  );
}

export default Github;

//preprocessing and retriving data before click
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Shravan250");
  return response.json();
};
