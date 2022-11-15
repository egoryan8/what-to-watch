import React from 'react';

interface LogoProps {
  isLight?: boolean,
}

const Logo: React.FC<LogoProps> = ({isLight}) => {
  return (
    <div className="logo">
      <a className={isLight ? 'logo__link logo__link--light' : 'logo__link'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

export default Logo;