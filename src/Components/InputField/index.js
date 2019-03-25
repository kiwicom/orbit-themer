import React from "react"
import styled from "styled-components"
import InputField from "@kiwicom/orbit-components/lib/InputField"

const StyledInputFields = styled.div`
 display: flex;
 justify-content: flex-start;
 flex-wrap: wrap;
 margin: -16px -8px 0;
 
 label {
  z-index: 1;
  flex: 0 25%;
  align-self: flex-end;
  padding: 0 8px;
  margin-top: 16px;
  box-sizing: border-box;
 }
`

const InputFields = () => {

  const label = "Your label";
  const placeholder = "Placeholder";
  const value = "Value";

  return (
    <StyledInputFields>
      <InputField label={label} placeholder={placeholder} />
      <InputField label={label} value={value} prefix="$" required />
      <InputField label={label} value={value} inlineLabel />
      <InputField label={label} value={value} disabled />
      <InputField label={label} value={value} help="Help text" />
      <InputField label={label} value={value} error="Error text" />
    </StyledInputFields>
  )

}

export default InputFields