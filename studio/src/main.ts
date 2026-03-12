import { navigate } from './utils/router'

if (!window.location.hash) {
  window.location.hash = '/tracks'
} else {
  const path = window.location.hash.slice(1)
  navigate(path)
}