import UserListItem from "./user-list-item";
import { useUsersGetters } from "../state/modules/users"
import Link from "next/link";

const Users = () => {
  const { users } = useUsersGetters();
  let usersList = null;

  if (Array.isArray(users) && users.length) {
    usersList = users.map((user, index) => (
      <div key={index} className="mb-3">
        <Link href={`/users/${index+1}`}>
          <a>
            <UserListItem user={user} />
          </a>
        </Link>
      </div>
    ));
  }

  return (
    <div>
      {usersList}
    </div>
  );
};

export default Users;
