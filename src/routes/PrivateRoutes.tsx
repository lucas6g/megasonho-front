import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { RootState } from '../redux/store'
export function PrivateRoutes() {
  const { user } = useSelector((state: RootState) => state.user)

  return user ? <Outlet /> : <Navigate to="/login" />
}
