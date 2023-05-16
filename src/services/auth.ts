import { AsgardeoSPAClient } from '@asgardeo/auth-spa'

const authConfig = {
  signInRedirectURL: import.meta.env.VITE_APP_SIGNIN_REDIRECT_URL,
  signOutRedirectURL: import.meta.env.VITE_APP_SIGNOUT_REDIRECT_URL,
  clientID: import.meta.env.VITE_APP_CLIENT_ID,
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  scope: import.meta.env.VITE_APP_SCOPE.split(',')
}

export const auth = () => {
  const auth = AsgardeoSPAClient.getInstance()
  auth?.initialize(authConfig)
  return auth
}
