import localStorage from './localStorage'
import api from './api'

async function onSignIn(token: any) {
  await localStorage.setItem('token', token)
}
async function onSignOut() {
  await localStorage.removeItem('token')
}

async function isSignedIn() {
  const token = await localStorage.getItem('token')
  return (token !== null) ? true : false;
}

async function getUser() {

  console.log("getuser 1")
  const token = await localStorage.getItem('token')

  if (!token) return false

  console.log("getuser 2", token)
  const config = { headers: { Authorization: `Bearer ${token}` } };



  const res = await api.get('/user/me', config)

  console.log("debug res", res.data)

  return res.data
}

async function getHeaderConfig() {
  const token = await localStorage.getItem('token')

  if (!token) return {}

  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config
}

export default { onSignIn, onSignOut, isSignedIn, getUser, getHeaderConfig }