import React from "react"
import styled from "styled-components"
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink"

const StyledButtons = styled.div`
 display: flex;
 
 button + button {
  margin-left: 16px;
 }
`

const ButtonLinks = ({ theme }) => {

  const message = "Your label"

  return (
    <StyledButtons>
      <ButtonLink type="primary" theme={theme}>{message}</ButtonLink>
      <ButtonLink type="secondary" theme={theme}>{message}</ButtonLink>
    </StyledButtons>
  )

}

export default ButtonLinks