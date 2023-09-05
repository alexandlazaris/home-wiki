import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Indoors',
    Svg: require('@site/static/img/shower-svgrepo-com.svg').default,
    description: (
      <>
        Kitchen sink filter? Leaky toilet? Time to clean the air-con filter? </>
    ),
  },
  {
    title: 'Outdoors',
    Svg: require('@site/static/img/garden-grass-lawn-lawnmower-svgrepo-com.svg').default,
    description: (
      <>
        Servicing the lawn mower? Window fly-screens looking dirty? Cleaning the outdoor bbq?
      </>
    ),
  },
  {
    title: 'Everything in between',
    Svg: require('@site/static/img/house-svgrepo-com.svg').default,
    description: (
      <>
        Annual pest control? Electric blinds not working? Heat lamps need replacing?
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
