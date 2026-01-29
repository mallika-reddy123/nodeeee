const Users = (props) => {
  const { usersList ,deletedItem} = props;
  const { imageUrl, role, name, uniqueNo } = usersList;

  const onDelete = () => {
    deletedItem(uniqueNo)
  };

  return (
    <div>
      <img src={imageUrl} />
      <h1>{role}</h1>
      <h1>{name}</h1>
      <button type="button" onClick={onDelete}>
        delete
      </button>
    </div>
  );
};

export default Users;