import React from 'react';

import locales from '../../translations';


const LocaleSwitch = ({ onLocalChange }) => {
  return (
      <div className='form-group'>
        <select
            style={{ height: '50px', width: '80px', marginTop: '-50px', float: "right"}}
            className='form-control'
            id='lang'
            value={localStorage.getItem('lang')}
            onChange={(e) => {
              onLocalChange(e.target.value);
              localStorage.setItem('lang', e.target.value);
            }}>
          <option value={locales.EN}>En</option>
          <option value={locales.RU}>Ru</option>
        </select>
      </div>
  );
};

export default LocaleSwitch;
