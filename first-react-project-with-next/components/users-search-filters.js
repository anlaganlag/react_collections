import { useUsersActions } from "../state/modules/users"
import { useEffect } from "react";
import { usePageStatusActions } from "../state/modules/page-status"
import { useUsersFiltersActions, useUsersFiltersGetters } from "../state/modules/users-search-filters"

const UserFilters = () => {
  const { setNationality, setGender, setResults } = useUsersFiltersActions()
  const { getResults, getGender, getNationality } = useUsersFiltersGetters()
  const { fetchUsers } = useUsersActions()
  const { setPageStatus } = usePageStatusActions();

  const nationalities = ["AU", "BR", "CA", "CH", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IR", "NL", "NZ", "TR", "US"]
  const natOptions = nationalities.map((nat) => (
    <option key={nat} value={nat}>
      { nat }
    </option>
  ));

  useEffect(() => {
    setPageStatus({loading: true, errors: false})
    fetchUsers().then(() => {
      setPageStatus({loading: false, errors: false})
    })
    .catch(() => {
      setPageStatus({loading: false, errors: true})
    })
  }, [getResults, getGender, getNationality])

  return (
    <div className="mb-3 relative">
      <h3 className="font-bold text-xl mb-3 bg-white absolute top-0 left-0 ml-3 -mt-3 px-1">
        Filters
      </h3>

      <div className="border rounded p-3 pt-6">
        <div className="mb-3 flex justify-between">
          <div className="w-full mr-4">
            <input 
              type="number"
              className="border rounded p-3 w-full"
              placeholder="Number of results"
              onChange={setResults}
              value={getResults}
            />
          </div>
          
          <div className="w-full mr-4">
            <select onChange={setGender} className="border rounded p-3 w-full">
              <option selected value="">
                select
              </option>
              <option 
                value="male"
              >
                Male
              </option>
              <option 
                value="female"
              >
                Female
              </option>
            </select>
          </div>

        
          <div className="w-full">
            <select onChange={setNationality} className="border rounded p-3 w-full">
              <option selected value="">
                select
              </option>
              { natOptions }
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
