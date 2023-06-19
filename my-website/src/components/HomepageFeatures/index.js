import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clases De Programacion',
    imageSrc: 'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1',
    description: (
      <>
        Aprende a programar con nosotros, ofrecemos talleres de programación (al momento taller de Solidity).
      </>
    ),
  },
  {
    title: 'Educacion en tecnologias emergentes',
    imageSrc: 'https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/11eeb7f9-7512-49aa-abdc-a27001dd123e/AI_20230215_article-hero_1200x564.jpg',
    description: (
      <>
        Aprende sobre tecnologías emergentes, principalmente Inteligencia Artificial y Blockchain.
      </>
    ),
  },
  {
    title: 'Conferecias y talleres',
    imageSrc: 'https://assets.gatesnotes.com/8a5ac0b3-6095-00af-c50a-89056fbe4642/55d38122-f28f-43ca-8bcc-2608f4fa826a/AI_20230215_inline%20span%20image%20-%20tablet%20-%201010x360_productivity.jpg',
    description: (
      <>
        Asiste a nuestras conferencias y talleres, y aprende sobre tecnologías emergentes.
      </>
    ),
  },
];




function Feature({ imageSrc, title, description }) {
  return (
    <div className={clsx('col col--4')} style={{ backgroundColor: '#212121' }}>
      <div className="text--center">
        <img src={imageSrc} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 style={{ color: '#39FF14', fontFamily: 'Futura, sans-serif' }}>{title}</h3>
        <p style={{ color: 'white', fontFamily: 'Futura, sans-serif' }}>{description}</p>
      </div>
    </div>
  );
}





export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ backgroundColor: '#212121'}}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props}/>
          ))}
        </div>
      </div>
    </section>
  );
}
