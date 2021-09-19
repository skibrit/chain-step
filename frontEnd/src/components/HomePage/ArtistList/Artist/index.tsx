import React from "react";
import { Accordion, Form, useAccordionButton, Card } from "react-bootstrap";
import Classes from "../style.module.scss";
import AlbumList from "../../AlbumList";

function CustomToggle(props: any) {
  const { children, eventKey, className } = props;
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("Custom Accordion")
  );
  return (
    <div className={className} onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

const SingleItem = () => {
  return (
    <Card>
      <Card.Header>
        <div className={Classes.taskItemHeaderWrapper}>
          <div className={Classes.centerHeaderBox}>
            <h4 className={Classes.headerTitle}>Justin timberlake</h4>
            <div className={Classes.headerFooter}>
              <span>Person</span> from <span>CA</span>
            </div>
          </div>
          <CustomToggle className={Classes.rightHeaderBox} eventKey={"0"}>
            <div className={Classes.taskStatusText}>Albums</div>{" "}
            <button type="button" className={Classes.accordionBtn} />
          </CustomToggle>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={"0"}>
        <AlbumList />
      </Accordion.Collapse>
    </Card>
  );
};

export default SingleItem;
