import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/devops.png")} alt="DevOps icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps Engineer</h3>
              <p>
              I'm a DevOps engineer skilled in 
              optimising CI/CD pipelines and building automated infrastructure
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sre.png")} alt="SRE icon" />
            <div className={styles.aboutItemText}>
              <h3>Site Reliability Engineer</h3>
              <p>
              Hands-on in 
              ensuring reliability and performance of back-end systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mlops.png")} alt="MLOps icon" />
            <div className={styles.aboutItemText}>
              <h3>MLOps Engineer</h3>
              <p>
              Currently learning MLOps, 
              designing efficient ML pipelines and managing data workflows
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
