import React from "react"
import styled from "styled-components"
import Checkbox from "@kiwicom/orbit-components/lib/Checkbox"

const StyledCheckboxes = styled.div`
 display: flex;
 justify-content: space-between;
 
 > label + label {
  margin-left: 16px;
 }
`

const Checkboxes = ({ theme }) => {

  const label = "Your label"
  const info = "Additional information for this choice"

  return (
    <StyledCheckboxes>
      <Checkbox label={label} info={info} theme={theme} />
      <Checkbox label={label} info={info} checked theme={theme} />
      <Checkbox label={label} info={info} disabled theme={theme} />
      <Checkbox label={label} info={info} hasError theme={theme} />
    </StyledCheckboxes>
  )

}

export default Checkboxes