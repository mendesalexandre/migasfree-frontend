import { LocalStorage } from 'quasar'
import { translate } from 'vue-gettext'

export function setUser(state, value) {
  state.user = value
  LocalStorage.set('auth.user', state.user)
}

export function setLoggedIn(state, value) {
  state.loggedIn = value
  LocalStorage.set('auth.loggedIn', state.loggedIn)
}

export function setToken(state, value) {
  state.token = value
  LocalStorage.set('auth.token', state.token)
}

export function addDomain(state, value) {
  if (!state.domains.find((el) => el.name === value.name)) {
    const removeIndex = state.domains.map((item) => item.id).indexOf(value.id)
    if (removeIndex >= 0) state.domains.splice(removeIndex, 1)
    state.domains.push(value)
    LocalStorage.set('auth.domains', state.domains)
  }
}

export function resetDomains(state) {
  state.domains = [{ id: 0, name: translate.gettext('All').toUpperCase() }]
  LocalStorage.set('auth.domains', state.domains)
}

export function addScope(state, value) {
  if (!state.scopes.find((el) => el.name === value.name)) {
    const removeIndex = state.scopes.map((item) => item.id).indexOf(value.id)
    if (removeIndex >= 0) state.scopes.splice(removeIndex, 1)
    state.scopes.push(value)
    LocalStorage.set('auth.scopes', state.scopes)
  }
}

export function resetScopes(state) {
  state.scopes = [{ id: 0, name: translate.gettext('All').toLowerCase() }]
  LocalStorage.set('auth.scopes', state.scopes)
}
