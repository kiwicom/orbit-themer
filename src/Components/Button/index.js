import React from "react"
import styled from "styled-components"
import Button from "@kiwicom/orbit-components/lib/Button"
import Facebook from "@kiwicom/orbit-components/lib/icons/Facebook"
import Google from "@kiwicom/orbit-components/lib/icons/Google"

const StyledButtons = styled.div`
  margin-top: -16px;
  
  > div {
    display: flex;
    margin-top: 16px;
  }
  
  button {
    flex: 0 15%;
  }
 
  button + button {
    margin-left: 16px;
  }
`

const Buttons = () => {

  const message = "Your label"

  return (
    <StyledButtons>
      <div>
        <Button type="primary" block>{message}</Button>
        <Button type="secondary" block>{message}</Button>
        <Button type="info" block>{message}</Button>
        <Button type="success" block>{message}</Button>
        <Button type="warning" block>{message}</Button>
        <Button type="critical" block>{message}</Button>
      </div>
      <div>
        <Button type="facebook" bordered iconLeft={<Facebook />}>{message}</Button>
        <Button type="google" bordered iconLeft={<Google />}>{message}</Button>
      </div>
    </StyledButtons>
  )

}

export default Buttons