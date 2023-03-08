import { Icon } from "@iconify/react";
import React from "react";

export function ProjectCard({ id, name, preview, description, tags, url, repository }: any) {
  return (
    <div
      className={`flex flex-col items-center rounded-md ring-1 ring-white/20 hover:ring-white/70 ease-in duration-200 overflow-hidden`}
    >
      <div className="w-full">
        <div className="card-content flex flex-col">
          <div className="min-h-[8rem]">
            <img className="" src={preview} alt={name} />
          </div>
          <div className="title-container flex flex-col px-4 pb-2">
            <h2 className="text-lg font-semibold text-white w-max">{name}</h2>
            <p className="text-gray-400 font-light">{description}</p>
            <div className="flex pt-2 gap-2 items-center justify-between">
              <p className="flex items-center text-sm font-light text-gray-300 divide-x divide-gray-300/20">
                {tags && tags.map((item: any, i:number) => (
                  <span className=" px-1" key={i}>{item}</span>
                ))}
              </p>
              <div className="flex gap-1">
                <a
                  data-title="Preview"
                  className="flex items-center text-gray-500 text-sm p-1 hover:text-white rounded-md ease-in-out duration-300"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" icon="ci:external-link" />
                </a>
                <a
                  data-title="Code"
                  className="flex items-center text-gray-500 text-sm p-1 hover:text-white rounded-md ease-in-out duration-300"
                  href={repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" icon="mdi:github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
