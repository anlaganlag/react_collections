import { useCurrentUserGetters } from '../state/modules/current-user'

export default function userProfile(props){
  const { userFullName } = useCurrentUserGetters()

  if(props.user){
    return (
      <div>
        <h1 className="font-bold text-3xl mb-2">
        { userFullName &&
          <span>
            { userFullName }
          </span>
        }
        </h1>
        <div>
        { props.user.picture ? 
          <img src={props.user.picture.large} className="rounded mr-3 mb-3" />
          : 
          null
        }
        </div>

        <div>
          <span className="font-bold">Name: </span>
          { props.user.name ?
            <span>
              {props.user.name.title} {props.user.name.first} {props.user.name.last}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">Email: </span>
          { props.user.email ?
            <span>
              {props.user.email}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">City: </span>
          { props.user.location ?
            <span>
              {props.user.location.city}
            </span>
            : 
            null
          }
        </div>

        <div>
          <span className="font-bold">Country: </span>
          { props.user.location ?
            <span>
              {props.user.location.country}
            </span>
            : 
            null
          }
        </div>
      </div>
    )
  }
} 