import React from 'react';
import classNames from 'classnames';
import './MobileNavLinks.scss';

const MobileNavLinks = ({ open }) => {
  const displayMobileNavLinks = classNames('mobile-nav-wrapper', {
    open: open,
  });

  return (
    <nav arai-label="mobile navigation" className={displayMobileNavLinks}>
      <a className="mobile-link" href="/blog">
        Blog
      </a>
      <a className="mobile-link" href="/media">
        Media
      </a>
      <a className="mobile-link" href="/about">
        About
      </a>
      <a className="mobile-link" href="/contact">
        Contact
      </a>
    </nav>
  );
};

export default MobileNavLinks;