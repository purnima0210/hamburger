import {useState} from 'react'
import classNames from 'classnames';
import logo from '../public/assets/pn-logo-48.png';
import MobileNavLinks from './MobileNavLinks';
import "./styles.scss";

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const active = classNames('mobile-menu', {
    open: mobileNavOpen,
  });

  return (
    <>
      <header className="navigation-wrapper">
        <div className="navigation-header">
          <span className="navigation-names">
            <a className="link" href="/">
              <img className="logo" src={logo} alt="pn initials logo"></img>
              <span>Paige Niedringhaus</span>
            </a>
          </span>
          <span className="navigation-links">
            <button
              aria-label="Toggle Mobile Menu Button"
              className={active}
              onClick={() => {
                setMobileNavOpen((mobileNavOpen) => !mobileNavOpen);
              }}
            >
              <div className="bar-one" />
              <div className="bar-two" />
              <div className="bar-three" />
            </button>
          </span>
        </div>
      </header>
      <MobileNavLinks open={mobileNavOpen} />
    </>
  );
}

export default App;
