"use client";

import { useState } from "react";
import { Container } from "../Container";
import { MotionUp, ProjectCard, MagicButton } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { Heading } from "../";
import { Project } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
  projects: Project[];
}

const INITIAL_ITEMS = 2; // 👈 IMPORTANT

export function Projects({ projects }: Props) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? sortByPriority(projects)
    : sortByPriority(projects).slice(0, INITIAL_ITEMS);

  return (
    <SmallGridBackground id="projects" className="relative z-10 py-16">
      <Container>
        <MotionUp delay={0.1}>

          {/* CENTERED HEADING */}
          <div className="flex justify-center">
            <Heading text="Projects" />
          </div>

          {/* PERFECTLY CENTERED 2-CARD GRID */}
          <div className="mt-12 flex justify-center">
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-10
                max-w-4xl
                place-items-center
              "
            >
              {visibleProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProjectCard data={project} />
                </a>
              ))}
            </div>
          </div>

          {projects.length > INITIAL_ITEMS && (
            <div className="mt-14 flex justify-center">
              <MagicButton
                title={showAll ? "Show Less" : "Show More"}
                handleClick={() => setShowAll(!showAll)}
              />
            </div>
          )}

        </MotionUp>
      </Container>
    </SmallGridBackground>
  );
}
