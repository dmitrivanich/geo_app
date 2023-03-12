import { create } from 'zustand'
import { UsersState } from 'types'
import { devtools, persist } from 'zustand/middleware'

export const useUsersStore = create<UsersState>()(
  devtools(
    persist((set,get) => ({
      users: [
        {
          id: 0,
          name: "Ivan",
          middleName: "Ivanovich",
          surname: "Ivanov",
          image_ref: ""
        },
      ],
      addUser: (id) => set({ users: [...get().users, get().users[0]] }),
    }),
    {
      name: "users-storage" // name of the key, state will be saved under items
    })
  )
)