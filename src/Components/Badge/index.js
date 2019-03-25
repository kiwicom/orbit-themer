import React from "react"
import styled from "styled-components"
import Badge from "@kiwicom/orbit-components/lib/Badge"


const StyledBadges = styled.div`
  display: flex;
 
  > div + div {
    margin-left: 16px;
  }
 
`

const Badges = () => {
  const message = "Badge"
  return (
    <StyledBadges>
      <Badge type="default">{message}</Badge>
      <Badge type="dark">{message}</Badge>
      <Badge type="info">{message}</Badge>
      <Badge type="success">{message}</Badge>
      <Badge type="warning">{message}</Badge>
      <Badge type="critical">{message}</Badge>
    </StyledBadges>
  )

}

export default Badges