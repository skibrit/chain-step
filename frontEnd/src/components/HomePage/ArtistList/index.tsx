import React from "react";
import { useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import SingleItem from "./Artist";

const TaskList: React.FC = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <SingleItem />
      </Accordion>
    </div>
  );
};

export default TaskList;
