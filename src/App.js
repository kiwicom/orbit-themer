import React from "react"
import ReactDOM from "react-dom"
import assocPath from "ramda/src/assocPath"
import { hot } from "react-hot-loader"
import styled, { ThemeProvider } from "styled-components"
import { getTokens } from "@kiwicom/orbit-design-tokens"
import Components from "./Components"
import Tabs from "./Components/Tabs"
import { injectGlobal } from 'styled-components';
import { DEFAULT_COLORS } from "./consts"

injectGlobal`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`

const StyledApp = styled.div`
  display: flex;
`

class App extends React.Component {

  state = {
    colors: DEFAULT_COLORS,
  }

  onChangeColor = (flatObjectKey, color) => {

    const flatToDeep = flatObjectKey.split(".");
    const newColors = assocPath(flatToDeep, color, this.state.colors)
    this.setState({
      colors: newColors,
    })
  }

  render() {

    const tokens = getTokens(this.state.colors)

    return (
      <StyledApp>
        <Tabs colors={this.state.colors} onChangeColor={this.onChangeColor} />
        <ThemeProvider theme={{orbit: tokens}}>
          <Components theme={{ orbit: tokens}}/>
        </ThemeProvider>
      </StyledApp>
    )
  }
}

export default hot(module)(App);

ReactDOM.render(<App />, document.getElementById("app"));