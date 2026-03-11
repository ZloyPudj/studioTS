import { navigate } from './utils/router'

const path = window.location.hash.slice(1) || '/tracks'
navigate(path)