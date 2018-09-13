import React from "react"
import styled from "styled-components"
import Alert from "@kiwicom/orbit-components/lib/Alert"

const StyledAlerts = styled.div`
  display: flex;
  
  > div {
    width: 100%;
    
    + div {
      margin-left: 16px;
    }
  }
`

const Alerts = ({ theme }) => {

  const message = "Type longer explanation of your message here...";

  return (
    <StyledAlerts>
      <div>
        <Alert type="info" title="Alert" theme={theme}>{message}</Alert>
      </div>
      <div>
        <Alert type="success" title="Alert" theme={theme}>{message}</Alert>
      </div>
      <div>
        <Alert type="warning" title="Alert" theme={theme}>{message}</Alert>
      </div>
      <div>
        <Alert type="critical" title="Alert" theme={theme}>{message}</Alert>
      </div>
    </StyledAlerts>
)}

export default Alerts