import React, { lazy, useMemo } from "react"
import PropTypes from "prop-types"
import { connect as reduxConnect } from "react-redux"
import { Container, Row, Col, Button } from "reactstrap"
import { AddToHomeScreen, BasicCard, Header } from "../../components"
import { HandShake } from "../../images/SVG"
import { RouterPush, RouteMap } from "../../routes"
import "./styles.css"

const Footer = lazy(() => import("../../components/Footer"))

const mapStateToProps = ({ User: { token }, Entries: { items } }) => ({
  entries: items,
  userToken: token
})

const Home = ({ entries, userToken, prompt, promptToInstall, history }) => {
  const handleOnClick = () =>
    RouterPush(history, RouteMap[!userToken ? "ABOUT" : "SETTINGS_ENTRIES"])

  return (
    <Container tag="article" className="Home Container">
      <Row className="mb-3">
        <Col xs={12} className="pt-3 pt-sm-4">
          <BasicCard
            header={<HandShake className="AboutFeatureImage" />}
            title={<Header>Humanity Bartering</Header>}
            text={
              <Button
                color={!userToken ? "info" : "success"}
                onClick={handleOnClick}
              >
                {!userToken ? "Learn More" : "Settings"}
              </Button>
            }
            // button={<HomeButtons />}
          />
        </Col>
      </Row>
      <hr style={{ height: 40 }} />
      <Footer />
    </Container>
  )
}

Home.propTypes = {
  userId: PropTypes.number
}

export default reduxConnect(mapStateToProps)(Home)
