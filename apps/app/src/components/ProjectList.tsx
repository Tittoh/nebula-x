import React from "react";

import { ProjectCard } from "./ProjectCard";

export function ProjectList({ clickAction, projects }: any) {
  return (
    <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl">
      {projects.map(
        (project: { id: React.Key | null | undefined }, index: number) => (
          <ProjectCard
            {...project}
            clickAction={clickAction}
            key={project.id}
            fullWH
          />
        )
      )}
    </div>
  );
}
