import { useState } from "react";
import { v4 as id } from "uuid";
import "./index.css";
import CommentItem from "../comment";

const Comments = () => {
  const [title, setTtitle] = useState("");
  const [decsc, setDesc] = useState("");
  const [comment, setComment] = useState([]);
  const [search, setSearch] = useState("");

  const deleteItem = (uniqNo) => {
    setComment((prev) => prev.filter((each) => each.uniqNo !== uniqNo));
  };

  const onChangeSearchComment = (event) => {
    setSearch(event.target.value);
  };

  const filterComment = comment.filter((each) =>
    each.name.toLowerCase().includes(search.toLowerCase()),
  );

  const onChangeTitle = (event) => {
    setTtitle(event.target.value);
  };

  const onChangeDesc = (event) => {
    setDesc(event.target.value);
  };

  const onSubmitFoem = (e) => {
    e.preventDefault();
    const newComment = {
      name: title,
      decsc,
      date: new Date(),
      uniqNo: id(),
    };
    setComment((prevStat) => [...prevStat, newComment]);
    setTtitle("");
    setDesc("");
  };

  console.log(filterComment);
  return (
    <div>
      <input
        className="search-btn"
        type="search"
        onChange={onChangeSearchComment}
        value={search}
      />
      <form className="forms" onSubmit={onSubmitFoem}>
        <input
          className="title"
          type="text"
          placeholder="enter title"
          onChange={onChangeTitle}
          value={title}
        />
        <textarea
          className="description"
          placeholder="enter description"
          onChange={onChangeDesc}
          value={decsc}
        />
        <button type="submit">Add comment..</button>
      </form>
      <hr />

      <ul>
        {filterComment?.map((each) => (
          <CommentItem
            commentDetails={each}
            key={each.uniqNo}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default Comments;
