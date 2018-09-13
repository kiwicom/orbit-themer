import React from "react"
import styled from "styled-components"
import Badge from "@kiwicom/orbit-components/lib/Badge"


const StyledBadges = styled.div`
  display: flex;
 
  > div + div {
    margin-left: 16px;
  }
 
`

const Badges = ({ theme }) => {
  const message = "Badge"
  return (
    <StyledBadges>
      <Badge type="default" theme={theme}>{message}</Badge>
      <Badge type="dark" theme={theme}>{message}</Badge>
      <Badge type="info" theme={theme}>{message}</Badge>
      <Badge type="success" theme={theme}>{message}</Badge>
      <Badge type="warning" theme={theme}>{message}</Badge>
      <Badge type="critical" theme={theme}>{message}</Badge>
    </StyledBadges>
  )

}

export default Badges