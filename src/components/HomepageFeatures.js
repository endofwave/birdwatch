// src/components/HomepageFeatures.js
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Guida alle Specie',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Scopri centinaia di specie di uccelli con informazioni dettagliate,
        foto e consigli per l'identificazione.
      </>
    ),
  },
  {
    title: "Consigli per l'Equipaggiamento",
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Confronta binocoli, fotocamere e altri strumenti essenziali per il birdwatching
        con le nostre guide dettagliate.
      </>
    ),
  },
  {
    title: 'Luoghi da Esplorare',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Trova i migliori parchi, riserve naturali e zone umide per avvistare
        uccelli rari e interessanti.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}