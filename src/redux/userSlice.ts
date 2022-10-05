import { createSlice } from '@reduxjs/toolkit'
import api from '../services/api'
interface User {
  uuid: string
  name: string
  access_token: string
}

export interface AuthState {
  user: User | null
}

function loadInitialState (): User | null {
  const userString = localStorage.getItem('@MEGASONHO:user')

  let user: User | null = null
  if (userString) {
    user = JSON.parse(userString) as User
    api.defaults.headers.common.Authorization = `Bearer ${user.access_token}`
  }
  return user
}

const initialState: AuthState = {
  user: loadInitialState()
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state, { payload }) {
      return {
        ...state,
        user: payload
      }
    }
  }
})

export const { login } = userSlice.actions

export default userSlice.reducer
