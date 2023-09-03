import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import useWindowDimensions from './hooks/useWindowDimension';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';

interface FrameProps {
    title: string;
    children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({title, children}) => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [paneState, setPaneState] = useState<boolean>(false);


  const isHome: boolean = location.pathname === "/";
  return (
    <div>
      <Helmet>
        <title>{title} | Pathway Finance</title>
      </Helmet>
      <div className="frame-wrapper">
        {!isHome &&
          width > 1100 ?
          <div className="side-nav">
            <SideNav />
          </div>
          :
          <SlidingPane
            className="sliding-side-nav"
            isOpen={paneState}
            from='left'
            width='232px'
            onRequestClose={() => {
              setPaneState(false);
            }}
          >
            <SideNav />
          </SlidingPane>
        }
        <div className="body-contents">
          <Header paneState={paneState} setPaneState={setPaneState} />
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
