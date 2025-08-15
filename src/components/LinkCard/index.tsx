import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

export type LinkCardProps = {
  type?: 'internal' | 'folder' | 'external';
  text: string;
  href: string;
  description?: string;
};

export default function LinkCard({ type, text, href, description }: LinkCardProps) {
  let icon;
  switch (type) {
    case 'folder':
      icon = '📁';
      break;
    case 'external':
      icon = '🔗';
      break;
    default:
      icon = '📄';
      break;
  }
  return (
    <article className={clsx(styles.docCardListItem, 'col col--6')}>
      <Link
        href={href}
        className={clsx('card padding--lg', styles.cardContainer)}>
        <Heading
          as="h2"
          className={clsx('text--truncate', styles.cardTitle)}
          title={text}>
          {icon} {text}
        </Heading>
      </Link>
    </article>
  );
}