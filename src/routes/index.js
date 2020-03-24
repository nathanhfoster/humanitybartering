import React from "react"
import { Redirect } from "react-router-dom"
const RouteMap = {
  ROOT: "/",
  SETTINGS: "/settings",
  SETTINGS_PROFILE: "/settings/profile",
  SETTINGS_PREFERENCES: "/settings/preferences",
  SUPPORT: "/support",
  ABOUT: "/about",
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  PASSWORD_RESET: "/password-reset",
  PRIVACY_POLICY: "/privacy-policy"
}

const getHistoryState = (state, pathname, route) => {
  if (!state) {
    state = {
      previousRoute: pathname,
      pathHistory: [pathname]
    }
  } else {
    state = {
      previousRoute: pathname,
      pathHistory: state.pathHistory.concat(pathname)
    }
  }

  return state
}

const ValidateHistroy = history => {
  if (!history || !history.location) {
    return false
  }
  return true
}

const RouterPush = (history, route) => {
  if (!ValidateHistroy(history)) return {}
  let {
    location: { pathname, search, state }
  } = history

  const newState = getHistoryState(state, pathname, route)

  // console.log("RouterPush: ", route, newState)

  history.push(route, newState)
}

const RouterLinkPush = (history, route) => {
  if (!ValidateHistroy(history)) return {}
  let {
    location: { pathname, search, state }
  } = history

  const newState = {
    pathname: route,
    state: getHistoryState(state, pathname, route)
  }

  // console.log("RouterLinkPush: ", route, newState)

  return newState
}

const RouterGoBack = (history, shouldRedirect = false) => {
  let route = RouteMap.HOME

  try {
    const {
      location: {
        hash,
        key,
        pathname,
        search,
        state: { previousRoute }
      }
    } = history
    route = previousRoute
    if (shouldRedirect) return <Redirect push to={route} />
    else return RouterPush(history, route)
  } catch {
    return history.goBack()
  }
}

export { RouteMap, RouterPush, RouterLinkPush, RouterGoBack }
