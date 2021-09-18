import React, { useState } from "react";
import Classes from "./style.module.scss";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBar: React.FC = () => {
  const [fieldValue, setFieldValue] = useState("");
  const [isLoading, toggleLoader] = useState(false);
  const dispatch = useDispatch();

  const onSearchHandler = async () => {

  };

  return (
    <div className={Classes.searchBarWrapper}>
      <h3 className={Classes.searchBarTitle}>Chain Step</h3>
      <div className={Classes.searchBarInputWrapper}>
        <div className={Classes.leftBox}>
          <input
            type="text"
            className={`form-control`}
            placeholder="Search Album By Artist/Genre"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={Classes.rightBox}>
          {isLoading ? (
            <Button variant="success" type="button">
              Processing...
            </Button>
          ) : (
            <Button variant="success" type="button" onClick={onSearchHandler}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
