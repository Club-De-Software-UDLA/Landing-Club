import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Clases De Programacion',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Aprende a programar con nosotros, tenemos clases de programacion en diferentes lenguajes de programacion.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];



function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')} style={{ backgroundColor: '#212121' }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        
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
