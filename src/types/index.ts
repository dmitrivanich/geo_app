export interface User {
  id: number,
  name: string,
  middleName: string,
  surname: string,
  image_ref: string 
}

export interface UsersState {
  users: User[] | [],
  addUser: (id: number | undefined) => void
}
