import { Container } from "../Container";
import { MagicCard, MotionUp, Timeline } from "../animations";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Heading } from "../";
import { WorkExperience, Skill, Certificate } from "@/lib/types";

function sortByStartDate(arr: WorkExperience[]): WorkExperience[] {
  return arr.toSorted(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

interface Props {
  experiences: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
}

export function ExperienceSkills({ experiences, skills, certificates }: Props) {
  const sortedExperiences = sortByStartDate(experiences);

  return (
    <section className="w-full py-10 md:py-20 scroll-mt-[120px]" id="experience">
      <Container>
        {/* ===== Work Experience ===== */}
        <MotionUp delay={0.1}>
          <div id="experience" className="scroll-mt-[120px]">
            <Heading text="Work Experience" />
          </div>
          <Timeline data={sortedExperiences} />
        </MotionUp>

        {/* ===== Expertise ===== */}
        <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
          <div id="expertise" className="scroll-mt-[120px]">
            <Heading text="Expertise" />
          </div>

          <Marquee speed={90} pauseOnHover className="mt-5 overflow-hidden py-5">
            {skills.map((skill, index) => (
              <MagicCard
                key={index}
                className="hover:scale-105 transition-all duration-500 w-40 h-40 ms-10 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor="#262626"
              >
                <div className="flex flex-col items-center w-full gap-2">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-full object-cover border border-white bg-white"
                  />
                  <h6 className="text-start text-lg font-bold text-blue-100">
                    {skill.url ? (
                      <Link
                        target="_blank"
                        href={skill.url}
                        className="hover:underline"
                      >
                        {skill.name}
                      </Link>
                    ) : (
                      skill.name
                    )}
                  </h6>
                </div>
              </MagicCard>
            ))}
          </Marquee>
        </MotionUp>

        {/* ===== Certifications ===== */}
        <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
          <div id="certifications" className="scroll-mt-[120px]">
            <Heading text="Certifications" />
          </div>

          {certificates.length === 0 ? (
            <p className="mt-10 text-center text-gray-500">
              No certifications available.
            </p>
          ) : certificates.length === 1 ? (
            <div className="max-w-4xl mx-auto mt-10 relative">
              <a
                href={certificates[0]?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={certificates[0]?.title || "Certificate"}
                className="block transition-transform hover:scale-105"
              >
                <Image
                  src={certificates[0]?.image || "/fallback.png"}
                  alt={certificates[0]?.title || "Certificate"}
                  width={1280}
                  height={720}
                  className="w-full rounded-lg object-cover shadow-lg"
                />
              </a>
              <p className="mt-4 text-lg font-semibold text-center text-white">
                {certificates[0]?.title || "Certificate"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
  {certificates.map((certificate, index) => (
    <a
      key={index}
      href={certificate?.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      title={certificate?.title || "Certificate"}
      className="flex flex-col items-center text-center transition-transform hover:scale-105"
    >
      <Image
        src={certificate?.image || "/fallback.png"}
        alt={certificate?.title || "Certificate"}
        width={1280}
        height={720}
        className="w-full h-auto max-h-[350px] rounded-lg object-contain bg-white/5 p-2 shadow-lg"
      />
      <p className="mt-3 text-lg font-semibold text-white hover:text-blue-400">
        {certificate?.title || "Certificate"}
      </p>
    </a>
  ))}
</div>

          )}
        </MotionUp>
      </Container>
    </section>
  );
}
