const CommentItem = (props) => {
  const { commentDetails, deleteItem } = props;
  const { name, decsc, date, uniqNo } = commentDetails;
  console.log(commentDetails);
  const onDeletecomment = () => {
    deleteItem(uniqNo);
  };
  return (
    <div>
      <h3>{name}</h3>
      <p>{decsc}</p>
      <p>{date.toLocaleTimeString()}</p>
      <button onClick={onDeletecomment}>Delete</button>
    </div>
  );
};

export default CommentItem;
