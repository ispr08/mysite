import React from "react";
import DOMPurify from "dompurify"; // Add this import

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
  const sanitizedDescription = DOMPurify.sanitize(description); // Sanitize the description

  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className={styles.container}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.imageBanner}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }} // Use sanitized HTML
          />
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
      </div>
    </a>
  );
};