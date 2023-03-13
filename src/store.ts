import { create } from 'zustand'
import { RandomUser, UsersState } from 'types'
import { devtools, persist } from 'zustand/middleware'
import ky from 'ky';


export const useUsersStore = create<UsersState>()(
  devtools(
    persist((set,get) => ({
      users: [],
      randomUsers: [],
      setRandomUsers: async () => {
        const serverResult: {results: RandomUser[]} = await ky.get("https://randomuser.me/api/?results=50").json()
        const randomUsers: RandomUser[] = serverResult.results
        
        console.log('====================================');
        console.log(serverResult);
        console.log('====================================');
        set({ randomUsers: randomUsers })
      },
    }),
    {
      name: "users-storage" // name of the key, state will be saved under items
    })
  )
)