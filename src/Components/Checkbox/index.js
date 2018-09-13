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

const Checkboxes = () => {

  const label = "Your label"
  const info = "Additional information for this choice"

  return (
    <StyledCheckboxes>
      <Checkbox label={label} info={info} />
      <Checkbox label={label} info={info} checked />
      <Checkbox label={label} info={info} disabled />
      <Checkbox label={label} info={info} hasError />
    </StyledCheckboxes>
  )

}

export default Checkboxes