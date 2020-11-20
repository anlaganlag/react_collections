import { useEffect } from "react";
import UserList from "../components/user-list";
import UsersSearchFilters from "../components/users-search-filters";
import { useUsersActions } from "../state/modules/users"
import { usePageStatusActions } from "../state/modules/page-status"
import Spinner from '../components/spinner'
import { useSelector } from "react-redux";

export default function Users() {
  const { fetchUsers } = useUsersActions();
  const { setPageStatus } = usePageStatusActions();
  const loading = useSelector((state) => state.pageStatus.loading);
  const errors = useSelector((state) => state.pageStatus.errors);

  useEffect(() => {
    setPageStatus({loading: true, errors: false})
    fetchUsers().then(() => {
      setPageStatus({loading: false, errors: false})
    })
    .catch(() => {
      setPageStatus({loading: false, errors: true})
    })
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl mb-3">Users</h1>
      
      <UsersSearchFilters />
      
      {
        loading && <Spinner />
      }

      {
        !loading && <UserList />
      }

      {
        errors !== false && 'There was an error.' 
      }
      
    </div>
  );
}