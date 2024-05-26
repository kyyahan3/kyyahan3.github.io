import React from "react";

import styles from "./ExperienceCard.module.css";
import { getImageUrl } from "../../utils";

export const ExperienceCard = ({
  project: { role, organization, date, imageSrc, experiences, skills },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${role}`}
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{role}</h3>
      <div className={styles.subtitleContainer}>
        <h4 className={styles.subtitle}>{organization}</h4>
        <h4 className={styles.subtitle}>{date}</h4>
      </div>
      <ul className={styles.descriptionList}>
        {experiences.map((experience, index) => (
          <li key={index} className={styles.description}>{experience}</li>
        ))}
      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
