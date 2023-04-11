import { useSelector } from 'react-redux'
import { UserState } from '../reducers/useReducers'
import { RootState } from '../store'

const HomeScreen = () => {
  const userLogin = useSelector<RootState, UserState>(
    (state: RootState) => state.userLogin
  )

  const { userInfo } = userLogin
  const firstName = userInfo ? userInfo.firstName : null

  return firstName ? (
    <h1>Welcome {firstName}</h1>
  ) : (
    <h1>Welcome to the Home Page!</h1>
  )
}

export default HomeScreen