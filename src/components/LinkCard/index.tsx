import React from 'react';

import styles from './styles.module.css';

export type LinkCardProps = {
  icon?: string;
  title: string;
  description?: string;
};

export default function LinkCard({ icon, title, description }: LinkCardProps) {
  return (
    <div className={styles.linkCard}>
      <h2 className={styles.title}>{icon && <span className={styles.icon}>{icon}</span>}{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}