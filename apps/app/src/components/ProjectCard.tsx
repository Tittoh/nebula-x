import { Icon } from "@iconify/react";
import React from "react";

export function ProjectCard({ id, name, preview, url, repository }: any) {
  return (
    <div
      className={`flex flex-col items-center rounded-md hover:shadow-lg shadow-sm ease-in-out duration-300 overflow-hidden`}
    >
      <div className="w-full">
        <div className="card-content flex flex-col">
          <div className="min-h-[8rem]">
            <img className="" src={preview} alt={name} />
          </div>
          <div className="title-container flex flex-col px-2 pb-2">
            <h2 className="text-lg font-medium text-gray-700 w-max">{name}</h2>
            <div className="flex pt-2 gap-6 items-center">
              <a
                className="flex items-center text-sm py-1 ring-1 hover:ring-blue-700 hover:text-blue-700 rounded-md px-2 ease-in-out duration-300"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View&nbsp;
                <Icon className="w-5 h-5" icon="ci:external-link" />
              </a>
              <a
                className="flex items-center text-sm py-1 ring-1 hover:ring-blue-700 hover:text-blue-700 rounded-md px-2 ease-in-out duration-300"
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code &nbsp;
                <Icon className="w-5 h-5" icon="mdi:github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
