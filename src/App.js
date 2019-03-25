import React from "react"
import ReactDOM from "react-dom"
import assocPath from "ramda/src/assocPath"
import { hot } from "react-hot-loader"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { getTokens } from "@kiwicom/orbit-components"
import Components from "./Components"
import Tabs from "./Components/Tabs"
import { DEFAULT_COLORS } from "./consts"
import hash from "object-hash"

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    min-height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    height: 100%;
  }
`;

const StyledApp = styled.div`
  min-height: 100%;
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

    const customTokens = getTokens({
      palette: this.state.colors
    })

    return (
      <StyledApp>
        <GlobalStyle/>
        <Tabs colors={this.state.colors} onChangeColor={this.onChangeColor} />
        <ThemeProvider theme={{orbit: customTokens}}>
          <Components />
        </ThemeProvider>
      </StyledApp>
    )
  }
}

export default hot(module)(App);

ReactDOM.render(<App />, document.getElementById("app"));