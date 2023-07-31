import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';

interface FrameProps {
    title: string;
    children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({title, children}) => {
  const location = useLocation();

  const isHome: boolean = location.pathname === "/";
  return (
    <div>
      <Helmet>
        <title>{title} | Pathway Finance</title>
      </Helmet>
      <div className="frame-wrapper">
        {!isHome &&
          <div className="side-nav">
            <SideNav />
          </div>
        }
        <div className="body-contents">
          <Header />
          <div className="body-content">
              <div className="wrapper">{children}</div>
          </div>
        {isHome &&  <Footer /> }
        </div>
      </div>
    </div>
  )
}

export default Frame
