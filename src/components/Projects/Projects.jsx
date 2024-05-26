import React, { useState } from "react";

import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("WebDev");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const filteredProjects = projects[selectedTab];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${
            selectedTab === "WebDev" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("WebDev")}
        >
          Web Development
        </button>
        <button
          className={`${styles.tab} ${
            selectedTab === "DS" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabChange("DS")}
        >
          Data Science
        </button>
        
      </div>
      <div className={styles.content}>
        <ul className={styles.history}>
          {filteredProjects.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemOverview}>
                  <h3>{historyItem.title}</h3>
                  {historyItem.linkType !== 'noShow' && (
                    <a href={historyItem.link} className={styles.link}>{historyItem.linkType}</a>
                  )}
                  {historyItem.imageSrc && (
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      className={styles.image}
                      alt={`${historyItem.title} project`}
                    />
                  )}
                </div>
                <div className={styles.historyItemDetails}>
                  <p>{`${historyItem.date}`}</p>
                  <p className={styles.description}>{`${historyItem.description}`}</p>
                  <ul className={styles.skills}>
                    {historyItem.skills.map((skill, id) => {
                      return (
                        <li key={id} className={styles.skill}>
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
