import React from 'react';
import FilterLink from '../filter/FilterLink';

const Footer = () => (
    <div>
      <FilterLink filter="SHOW_ALL">
         All
      </FilterLink>
      {" "}
      <FilterLink filter="LAST_MONTH">
         LAST MONTH
       </FilterLink>
      {" "}
      <FilterLink filter="LAST_YEAR">
         LAST YEAR
       </FilterLink>
    </div>
);

export default Footer;
