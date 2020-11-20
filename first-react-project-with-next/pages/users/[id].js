import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import { useUsersActions } from "../../state/modules/users"
import { useCurrentUserActions } from "../../state/modules/current-user"
import { useEffect } from 'react'
import UserProfile from '../../components/user-profile'
import Spinner from '../../components/spinner'


export default function userDetails() {
  const router = useRouter()
  const {id} = router.query
  const users = useSelector((state) => state.users);
  const { fetchUsers } = useUsersActions()
  const { setCurrentUser } = useCurrentUserActions()
  const currentUser = useSelector((state) => state.currentUser);
  const loading = useSelector((state) => state.pageStatus.loading);
  
  useEffect(() => {
    if(Array.isArray(users) && !users.length){
      fetchUsers()
    }
    if(Array.isArray(users) && users.length){
      setCurrentUser(users[id -1])
    }
  }, [users])

  return <div className="container mx-auto p-3">
    { currentUser && <UserProfile user={currentUser}/> }

    { 
      (!currentUser || loading)
      && 
      <Spinner color='bg-blue-500' />
    }
  </div>;
}
