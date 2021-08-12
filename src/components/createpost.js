import React from "react";
import styled from "styled-components";
import history from "../history";

const CreateButton = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  margin: 20px 0;
  font-size: 18px;
  background: #0052cc;
  cursor: pointer;
  outline: none;
  border: none;
`;

function Createpost() {
  const onCreateClicked = (event) => {
    event.preventDefault();
    history.push("/form");
  };
  return <CreateButton onClick={onCreateClicked}> Create</CreateButton>;
}

export default Createpost;
