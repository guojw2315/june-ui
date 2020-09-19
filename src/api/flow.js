import { get, post } from './request'

export function postAuthenticate(data = {}) {
  return post('/caas/authenticate', { data })
}