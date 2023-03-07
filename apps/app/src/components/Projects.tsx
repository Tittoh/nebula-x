import React from "react";

import projects from "../lib/projects.json";
import { ProjectList } from "./ProjectList";

export function Projects() {
  return (
    <section className="relative px-4 lg:w-full ">
      <div className="flex gap-4">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
