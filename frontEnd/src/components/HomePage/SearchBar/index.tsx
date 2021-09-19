import React, { useState } from "react";
import Classes from "./style.module.scss";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchWork } from "../../../actions/task";
import { setSessionItem } from "../../../utils/store";

const SearchBar: React.FC = () => {
  const [fieldValue, setFieldValue] = useState("Justin Bieber");
  const [isLoading, toggleLoader] = useState(false);
  const dispatch = useDispatch();

  const onSearchHandler = async () => {
    try {
      if (isLoading) return;
      if (!fieldValue.trim()) return;
      toggleLoader(true);
      setSessionItem("keyword", fieldValue);
      await dispatch(searchWork(fieldValue, 5));
      toggleLoader(false);
    } catch (e) {
      toggleLoader(false);
      console.log(e);
    }
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
