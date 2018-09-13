import React from "react"
import styled from "styled-components"

const StyledPanel = styled.div`
  border-left: 1px solid black;
  width: 300px;
`

const Panel = () => (
  <StyledPanel>
    This is fucking panel
  </StyledPanel>
)

export default Panel