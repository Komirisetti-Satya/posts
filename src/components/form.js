import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Select from "react-select";
import "./form.css";
import jsonServer from "../jsonServer";

const ReactSelect = styled(Select)`
    border-radius: 4px;
    width: 100%;
    background: black;
    outline: none;
    font-size: 18px;
  `;

function Titleform() {
  const [options, setOptions] = useState([]);

  const [title, setTittle] = useState("");
  const [post, setPost] = useState("");
  const [username, setUsername] = useState(null);

  useEffect(() => {
    jsonServer.get("/profile").then((res) => {
      const data = res.data.map((data) => data);
      setOptions(data);
    });
  }, []);
  

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (title && post && username) {
      const formData = { title, post, user: username.label };
      jsonServer.post("/posts", {
        ...formData,
        //userId: Math.random().toString(),
      });
      setTittle("");
      setUsername("");
      setPost("");
    }
  };
  const titleChangeHandler = (e) => {
    setTittle(e.target.value);
  };
  const postChangeHandler = (e) => {
    setPost(e.target.value);
  };

  return (
    <div className="title">
      <h1>Post Management</h1>
      <form onSubmit={formSubmitHandler}>
        <fieldset>
          <div>
            <p>
              <b>Title</b>
            </p>
            <textarea
              id="value"
              placeholder="Your Title.."
              style={{ height: "100px" }}
              maxLength="100"
              value={title}
              onChange={titleChangeHandler}
            ></textarea>
          </div>

          <div>
            <p>
              <b>posts</b>
            </p>
            <textarea
              id="values"
              placeholder="Write something.."
              style={{ height: "100px" }}
              value={post}
              onChange={postChangeHandler}
            ></textarea>
          </div>
          <div>
            <ReactSelect
              defaultValue={username}
              onChange={setUsername}
              options={options}
            />
          </div>
        </fieldset>
        <div>
          <button type="submit">Create</button>
          &nbsp; &nbsp;
          <Link to="/">
            <button type="submit">close</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Titleform;
