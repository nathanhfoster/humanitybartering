import React, { Fragment } from "react"
import { useLocation } from "react-router-dom"
import { RouteMap } from "../../routes"
import "./styles.css"

const backgroundImageRouteMap = route => {
  switch (route) {
    case RouteMap.ABOUT:
      return null
    default:
      return null
  }
}

const BackgroundImage = () => {
  const { pathname } = useLocation()
  const background = backgroundImageRouteMap(pathname)

  return (
    <Fragment>
      <div className="BackgroundImage">{/* <Media src={bgImage} /> */}</div>
      {background}
    </Fragment>
  )
}

export default BackgroundImage
