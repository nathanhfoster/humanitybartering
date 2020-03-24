import React, { memo } from "react"
import PropTypes from "prop-types"
import { RouterGoBack } from "../../routes"
import { withRouter, Link } from "react-router-dom"
import "./styles.css"

const PageNotFound = ({ history, title }) => (
  <div className="PageNotFound bg-purple">Page Not Found</div>
)

PageNotFound.defaultProps = { title: "Page Not Found" }

export default withRouter(memo(PageNotFound))
