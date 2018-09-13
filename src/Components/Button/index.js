import React from "react"
import styled from "styled-components"
import Button from "@kiwicom/orbit-components/lib/Button"

const StyledButtons = styled.div`
 display: flex;
 justify-content: space-between;
 
 button + button {
  margin-left: 16px;
 }
`

const Buttons = ({ theme }) => {

  const message = "Your label"

  return (
    <StyledButtons>
      <Button type="primary" block theme={theme}>{message}</Button>
      <Button type="secondary" block theme={theme}>{message}</Button>
      <Button type="info" block theme={theme}>{message}</Button>
      <Button type="success" block theme={theme}>{message}</Button>
      <Button type="warning" block theme={theme}>{message}</Button>
      <Button type="critical" block theme={theme}>{message}</Button>
      <Button type="facebook" block theme={theme}>{message}</Button>
      <Button type="google" block theme={theme}>{message}</Button>
    </StyledButtons>
  )

}

export default Buttons