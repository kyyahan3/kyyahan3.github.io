import React from "react";

import styles from "./Experience.module.css";

import experience from "../../data/experience.json";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceContainer}>
        {experience.map((job, id) => {
          return <ExperienceCard key={id} project={job} />;
        })}
      </div>
    </section>
  );
};
