import React from "react"
import styled from "styled-components"
import { diff } from "deep-object-diff"
import path from "ramda/src/path"

import Heading from "@kiwicom/orbit-components/lib/Heading"
import Button from "@kiwicom/orbit-components/lib/Button"
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight"
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown"
import Badge from "@kiwicom/orbit-components/lib/Badge"


import {SketchPicker} from "react-color";
import copy from "copy-to-clipboard"
import { DEFAULT_COLORS } from "../consts"

const StyledTabs = styled.div`
  padding: 36px 24px;
  box-sizing: border-box;
  flex: 0 318px;
  min-width: 318px;
  border-right: 1px solid #E8EDF1;
  position: relative;
  overflow-y: scroll;
`

const StyledLogo = styled.div`
  width: 125px;
  
  img {
    max-width: 100%;
  }
`

const ColorsPanel = styled.div`
  position: absolute;
  top: 90px;
  bottom: 90px;
  left: 24px;
  right: 24px;
  overflow-y: scroll;
`

const StyledColors = styled.div`
  margin-top: 8px;
`

const StyledColorTab = styled.div`
  font-size: 14px;
`

const StyledColorTabHeader = styled.div`
  border-bottom: 1px solid #E8EDF1;
  cursor: pointer;
  padding: 16px 0;
`
const StyledColorTabTitle = styled.span`
  color: #46515E;
  font-weight: 500;
`

const StyledColorTabIcon = styled.div`
  float: right;
  color: #bac7d5;
`
const StyledColorTabChildren = styled.div`
  max-height: ${({opened}) => opened ? 100 : 0};
  overflow: hidden;
`

class ColorTab extends React.Component {

  state = {
    opened: false,
  }

  render() {
    const {title, children} = this.props
    const {opened} = this.state

    return (
      <StyledColorTab>
        <StyledColorTabHeader onClick={() => {
          this.setState({opened: !this.state.opened})
        }}>
          <StyledColorTabTitle>{title}</StyledColorTabTitle>
          <StyledColorTabIcon>{opened ? <ChevronDown size="small"/> : <ChevronRight size="small"/>}</StyledColorTabIcon>
        </StyledColorTabHeader>
        <StyledColorTabChildren opened={opened}>
          {children}
        </StyledColorTabChildren>
      </StyledColorTab>
    )
  }
}

const StyledColor = styled.div`
  padding: 14px 14px;
`
const StyledColorName = styled.span``

const StyledColorNameHover = styled.span`
  color: #7F91A8;
`

const StyledChoosedColor = styled.div`
  float: right;
  width: 28px;
  height: 20px;
  padding: 3px;
  box-sizing: border-box;
  border: 1px solid #a6b6c8;
  border-radius: 3px;
  cursor: pointer;
  
  > div {
    width: 100%;
    height: 100%;
  }
`

const StyledColorPickerOuter = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`

const StyledColorPicker = styled.div`
  position: absolute;
  z-index: 11;
`

const StyledExportButton = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`

class Color extends React.Component {

  state = {
    openedColorPicker: false,
  }

  handleClick = () => {
    this.setState({openedColorPicker: true})
  }

  handleClose = () => {
    this.setState({openedColorPicker: false})
  }

  handleChange = (color) => {
    const {onChangeColor, objectKey} = this.props
    onChangeColor(objectKey, color.hex);
  }

  render() {
    const {name, extra, color, objectKey } = this.props
    const { openedColorPicker } = this.state

    const defaultColor = path(objectKey.split("."), DEFAULT_COLORS)


    return (
      <StyledColor>
        <StyledColorName>
          {name}
          <StyledColorNameHover>{extra && `:${extra}`}</StyledColorNameHover>
          {color !== defaultColor && <Badge size="small">!</Badge>}
        </StyledColorName>
        <StyledChoosedColor onClick={this.handleClick}>
          <div style={{background: color}}/>
        </StyledChoosedColor>
        {openedColorPicker && (
          <div>
            <StyledColorPickerOuter onClick={this.handleClose}/>
            <StyledColorPicker>
              <SketchPicker color={color} onChange={this.handleChange}/>
            </StyledColorPicker>
          </div>
        )}
      </StyledColor>
    )
  }
}

class Tabs extends React.Component {

  state = {
    copied: false,
  }

  copyToClipboard = () => {
    const { colors } = this.props
    const onlyDifferentColors = diff(DEFAULT_COLORS, colors);

    copy(JSON.stringify({
      palette: onlyDifferentColors
    }, null, "\t"));



    this.setState({
      copied: true,
    })
    setTimeout(this.resetCopied, 1500);
  }

  resetCopied = () => {
    this.setState({
      copied: false,
    })
  }

  render() {

    const { colors, onChangeColor } = this.props

    return (
      <StyledTabs>
        <StyledLogo>
          <img src="https://orbit.kiwi/wp-content/uploads/2018/05/logo-orbit-300x53.png"/>
        </StyledLogo>
        <ColorsPanel>
          <Heading type="title2" element="h2">Colors</Heading>
          <StyledColors>
            <ColorTab title="Product">
              <Color name="Product Light" objectKey="product.light" color={colors.product.light}
                     onChangeColor={onChangeColor}/>
              <Color name="Product Light" objectKey="product.lightHover" extra="hover" color={colors.product.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Product Light" objectKey="product.lightActive" extra="active"
                     color={colors.product.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Product Normal" objectKey="product.normal" color={colors.product.normal}
                     onChangeColor={onChangeColor}/>
              <Color name="Product Normal" objectKey="product.normalHover" extra="hover"
                     color={colors.product.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Product Normal" objectKey="product.normalActive" extra="active"
                     color={colors.product.normalActive} onChangeColor={onChangeColor}/>
              <Color name="Product Dark" objectKey="product.dark" color={colors.product.dark}
                     onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="White">
              <Color name="White Normal" objectKey="white.normal" color={colors.white.normal}
                     onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Cloud">
              <Color name="Cloud Light" objectKey="cloud.light" color={colors.cloud.light}
                     onChangeColor={onChangeColor}/>
              <Color name="Cloud Light" objectKey="cloud.lightHover" extra="hover" color={colors.cloud.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Cloud Light" objectKey="cloud.lightActive" extra="active" color={colors.cloud.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Cloud Normal" objectKey="cloud.normal" color={colors.cloud.normal}
                     onChangeColor={onChangeColor}/>
              <Color name="Cloud Normal" objectKey="cloud.normalHover" extra="hover" color={colors.cloud.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Cloud Normal" objectKey="cloud.normalActive" extra="active" color={colors.cloud.normalActive}
                     onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Ink">
              <Color name="Ink Lighter" objectKey="ink.lighter" color={colors.ink.lighter}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Lighter" objectKey="ink.lighterHover" extra="hover" color={colors.ink.lighterHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Lighter" objectKey="ink.lighterActive" extra="active" color={colors.ink.lighterActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Light" objectKey="ink.light" color={colors.ink.light} onChangeColor={onChangeColor}/>
              <Color name="Ink Light" objectKey="ink.lightHover" extra="hover" color={colors.ink.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Light" objectKey="ink.lightActive" extra="active" color={colors.ink.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Normal" objectKey="ink.normal" color={colors.ink.normal} onChangeColor={onChangeColor}/>
              <Color name="Ink Normal" objectKey="ink.normalHover" extra="hover" color={colors.ink.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Normal" objectKey="ink.normalActive" extra="active" color={colors.ink.normalActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Ink Dark" objectKey="ink.dark" color={colors.ink.dark} onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Orange">
              <Color name="Orange Light" objectKey="orange.light" color={colors.orange.light}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Light" objectKey="orange.lightHover" extra="hover" color={colors.orange.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Light" objectKey="orange.lightActive" extra="active" color={colors.orange.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Normal" objectKey="orange.normal" color={colors.orange.normal}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Normal" objectKey="orange.normalHover" extra="hover" color={colors.orange.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Normal" objectKey="orange.normalActive" extra="active"
                     color={colors.orange.normalActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Orange Dark" objectKey="orange.dark" color={colors.orange.dark}
                     onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Red">
              <Color name="Red Light" objectKey="red.light" color={colors.red.light} onChangeColor={onChangeColor}/>
              <Color name="Red Light" objectKey="red.lightHover" extra="hover" color={colors.red.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Red Light" objectKey="red.lightActive" extra="active" color={colors.red.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Red Normal" objectKey="red.normal" color={colors.red.normal} onChangeColor={onChangeColor}/>
              <Color name="Red Normal" objectKey="red.normaHover" extra="hover" color={colors.red.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Red Normal" objectKey="red.normalActive" extra="active" color={colors.red.normalActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Red Dark" objectKey="red.dark" color={colors.red.dark} onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Green">
              <Color name="Green Light" objectKey="green.light" color={colors.green.light}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Light" objectKey="green.lightHover" extra="hover" color={colors.green.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Light" objectKey="green.lightActive" extra="active" color={colors.green.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Normal" objectKey="green.normal" color={colors.green.normal}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Normal" objectKey="green.normalHover" extra="hover" color={colors.green.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Normal" objectKey="green.normalActive" extra="active" color={colors.green.normalActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Green Dark" objectKey="green.dark" color={colors.green.dark} onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Blue">
              <Color name="Blue Light" objectKey="blue.light" color={colors.blue.light} onChangeColor={onChangeColor}/>
              <Color name="Blue Light" objectKey="blue.lightHover" extra="hover" color={colors.blue.lightHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Blue Light" objectKey="blue.lightActive" extra="active" color={colors.blue.lightActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Blue Normal" objectKey="blue.normal" color={colors.blue.normal}
                     onChangeColor={onChangeColor}/>
              <Color name="Blue Normal" objectKey="blue.normalHover" extra="hover" color={colors.blue.normalHover}
                     onChangeColor={onChangeColor}/>
              <Color name="Blue Normal" objectKey="blue.normalActive" extra="active" color={colors.blue.normalActive}
                     onChangeColor={onChangeColor}/>
              <Color name="Blue Dark" objectKey="blue.dark" color={colors.blue.dark} onChangeColor={onChangeColor}/>
            </ColorTab>
            <ColorTab title="Social">
              <Color name="Social Facebook" objectKey="social.facebook" color={colors.social.facebook}
                     onChangeColor={onChangeColor}/>
              <Color name="Social Facebook" objectKey="social.facebookHover" extra="hover"
                     color={colors.social.facebookHover} onChangeColor={onChangeColor}/>
              <Color name="Social Facebook" objectKey="social.facebookActive" extra="active"
                     color={colors.social.facebookActive} onChangeColor={onChangeColor}/>
            </ColorTab>
          </StyledColors>
        </ColorsPanel>
        <StyledExportButton>
          {this.state.copied ?
            <Button type="secondary" block disabled>Copied to clipboard!</Button> :
            <Button type="primary" block onClick={this.copyToClipboard}>Export</Button>
          }
        </StyledExportButton>
      </StyledTabs>
    )
  }
}

export default Tabs