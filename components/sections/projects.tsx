"use client";

import { Container } from "../Container";
import { MotionUp, ProjectCard, MagicButton } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { useState } from "react";
import { Heading } from "../";
import { Project } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
  projects: Project[];
}

const INITIAL_ITEMS = 3;

export function Projects({ projects }: Props) {
  const [items, setItems] = useState(sortByPriority(projects).slice(0, INITIAL_ITEMS));
  const [showAll, setShowAll] = useState(false);

  function handleShowMore() {
    if (!showAll) {
      setShowAll(true);
      setItems(projects);
    } else {
      setShowAll(false);
      setItems(projects.slice(0, INITIAL_ITEMS));
    }
  }

  return (
    // ✅ Added relative + z-10 to prevent layering issues
    <SmallGridBackground className="relative z-10 py-10" id="projects">
      <Container>
        <MotionUp delay={0.1}>
          <Heading text="Projects" />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((project, index) => (
              <a
                key={index}
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ProjectCard data={project} />
              </a>
            ))}
          </div>

          {projects.length > INITIAL_ITEMS && (
            <MagicButton
              title={showAll ? "Show Less" : "Show More"}
              handleClick={handleShowMore}
              className="mx-auto !block mt-12"
            />
          )}
        </MotionUp>
      </Container>
    </SmallGridBackground>
  );
}
