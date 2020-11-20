const UserListItem = (props) => {
  return (
    <div className="border p-3 rounded flex items-center">
      <img src={props.user.picture.thumbnail} className="rounded-full mr-3" />
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="font-bold">
            {props.user.name.first} {props.user.name.last}
          </span>
          <div className="text-gray-700">{props.user.email}</div>
        </div>
        <div className="flex">
          <div className="bg-blue-600 rounded py-1 px-2 text-xs text-white mr-2">
            {props.user.gender}
          </div>
          <div className="bg-blue-600 rounded py-1 px-2 text-xs text-white">
            {props.user.nat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
