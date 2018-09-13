import React from "react"
import ReactDOM from "react-dom"
import assocPath from "ramda/src/assocPath"
import { hot } from "react-hot-loader"
import styled, { ThemeProvider } from "styled-components"
import { getTokens } from "@kiwicom/orbit-design-tokens"
import Components from "./Components"
import Tabs from "./Components/Tabs"
import { injectGlobal } from 'styled-components';

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
    colors: {
      product: {
        light: "#9ae5da",
        lightHover: "#7fded0",
        lightActive: "#64d7c6",
        normal: "#00a991",
        normalHover: "#009882",
        normalActive: "#008f7b",
        dark: "#005448"
      },
      white: {
        normal: "#fff",
      },
      cloud: {
        light: "#f5f7f9",
        lightHover: "#e5eaef",
        lightActive: "#d6dee6",
        normal: "#e8edf1",
        normalHover: "#d9e1e8",
        normalActive: "#cad5df"
      },
      ink: {
        lighter: "#bac7d5",
        lighterHover: "#a6b6c8",
        lighterActive: "#94a8be",
        light: "#7f91a8",
        lightHover: "#6d819c",
        lightActive: "#5f738c",
        normal: "#46515e",
        normalHover: "#3f4854",
        normalActive: "#38404b",
        dark: "#171b1e"
      },
      orange: {
        light: "#fcf1cd",
        lightHover: "#faeab7",
        lightActive: "#f9e4a1",
        normal: "#f9971e",
        normalHover: "#f48a06",
        normalActive: "#e68206",
        dark: "#a93610"
      },
      red: {
        light: "#fae8e8",
        lightHover: "#f5d4d4",
        lightActive: "#f1c0c0",
        normal: "#d21c1c",
        normalHover: "#bd1919",
        normalActive: "#b21717",
        dark: "#650808"
      },
      green: {
        light: "#e7f3e8",
        lightHover: "#d7ebd8",
        lightActive: "#c7e3c9",
        normal: "#46B655",
        normalHover: "#42ac50",
        normalActive: "#3fa34c",
        dark: "#065d12"
      },
      blue: {
        light: "#e0f6ff",
        lightHover: "#c8effe",
        lightActive: "#b0e8fe",
        normal: "#0176D2",
        normalHover: "#006abd",
        normalActive: "#0064b2",
        dark: "#07405c"
      },
      social: {
        facebook: "#3b5998",
        facebookHover: "#385490",
        facebookActive: "#354f88"
      }
    }
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