import React from 'react';
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <Logo isLight={true}/>
      <div className="copyright">
        <p>© 2022 What to Watch Ltd.</p>
        <p>Project by Fogel Egor.</p>
      </div>
    </footer>
  );
};

export default Footer;