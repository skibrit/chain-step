import React, { Fragment } from "react";
import { Accordion, Form, useAccordionButton, Card } from "react-bootstrap";
import Classes from "../style.module.scss";
import AlbumList from "../../AlbumList";
import { ArtistNode } from "../../../../types/ArtistPayload";
import { setSessionItem, getSessionItem } from "../../../../utils/store";

function CustomToggle(props: any) {
  const { children, eventKey, className } = props;
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    let newAccordion = eventKey;
    const prevKey = getSessionItem("selectedAccordion");
    if (prevKey === eventKey) {
      newAccordion = "";
    }
    setSessionItem("selectedAccordion", newAccordion);
  });
  return (
    <div className={className} onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

interface ArtistInterface {
  item: ArtistNode;
}

const Artist: React.FC<ArtistInterface> = (props: ArtistInterface) => {
  const { item } = props;
  return (
    <Card>
      <Card.Header>
        <div className={Classes.taskItemHeaderWrapper}>
          <div className={Classes.centerHeaderBox}>
            <h4 className={Classes.headerTitle}>{item.name}</h4>
            <div className={Classes.headerFooter}>
              <span>{item.type || "n/a"}</span> from{" "}
              <span>{item.country || "n/a"}</span>
            </div>
          </div>
          <CustomToggle className={Classes.rightHeaderBox} eventKey={item.mbid}>
            {item.releaseGroups.nodes.length ? (
              <Fragment>
                <div className={Classes.taskStatusText}>Albums</div>{" "}
                <button type="button" className={Classes.accordionBtn} />
              </Fragment>
            ) : (
              <Fragment>
                <div className={Classes.taskStatusText}>No Albums</div>{" "}
              </Fragment>
            )}
          </CustomToggle>
        </div>
      </Card.Header>
      <Accordion.Collapse eventKey={item.mbid}>
        <AlbumList albums={item.releaseGroups.nodes} />
      </Accordion.Collapse>
    </Card>
  );
};

export default Artist;
