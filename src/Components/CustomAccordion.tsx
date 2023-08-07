import { useContext, FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';

interface CustomAccordionItemProps{
    title: string;
    children: JSX.Element;
    eventKey: string;
    callback?: (eventKey: string) => void;
}

const CustomAccordionItem: FC<CustomAccordionItemProps> = ({ title, children, eventKey, callback }: CustomAccordionItemProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const handleClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <Card
        className={isCurrentEventKey ? "opened-wrap accordion-card" : "accordion-card"}
    >
        <div
        onClick={handleClick}
        className="accordion-header-wrapper"
        >
            <Card.Header className='accordion-header'>
                <div className="accordion-text">{title}</div>
                <div className="icon-wrapper">
                    <Icon icon="mingcute:right-line" />
                </div>
            </Card.Header>
        </div>
        <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
                <div className="content">
                    {children}
                </div>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
  );
}

const CustomAccordion = () => {
    return (
        <Accordion defaultActiveKey="0" className='custom-accordion'>
            <CustomAccordionItem eventKey="0" title='FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE '>
                <div className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </CustomAccordionItem>
            <CustomAccordionItem eventKey="1" title='FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE '>
                <div className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </CustomAccordionItem>
            <CustomAccordionItem eventKey="2" title='FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE '>
                <div className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </CustomAccordionItem>
            <CustomAccordionItem eventKey="3" title='FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE '>
                <div className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </CustomAccordionItem>
            <CustomAccordionItem eventKey="4" title='FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE FAQ TITLE '>
                <div className="accordion-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </CustomAccordionItem>
        </Accordion>
      );
}

export default CustomAccordion
