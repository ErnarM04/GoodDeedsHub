export interface User{
  name: string,
  surname: string,
  email: string,
  phone: string,
  password: string,
  gender: boolean
}

export interface Post{
  title: string,
  organization: string,
  text: string,
  date: Date
}
