import React from 'react';
import img from '../../assets/2.jpg';

const Calendar = () => {
  return (
    <section>
      <div>
        <img src={img} alt="img" loading="lazy" />
      </div>
    </section>
  );
};

export default Calendar;
