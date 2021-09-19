import React from "react";
import { useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import { ArtistNode } from "../../../types/ArtistPayload";
import SingleItem from "./Artist";
import { RootState } from "../../../reducers";
import { getSessionItem } from "../../../utils/store";

const TaskList: React.FC = () => {
  const artistList = useSelector((state: RootState) => state.artist.resultList);
  return (
    <div>
      <Accordion
        defaultActiveKey={getSessionItem("selectedAccordion") || undefined}
      >
        {artistList.map((item: ArtistNode) => {
          return <SingleItem key={item.mbid} item={item} />;
        })}
      </Accordion>
    </div>
  );
};

export default TaskList;
