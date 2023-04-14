import React from 'react';
import img from '../../assets/1.jpeg';
import cn from './projectReport.module.scss';

const ProjectReport = () => {
  return (
    <section>
      <div className={cn.topDiv}>
        <img src={img} alt="img" loading="lazy" />
      </div>
    </section>
  );
};

export default ProjectReport;
