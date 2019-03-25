// @flow
import React from "react"
import styled from "styled-components"
import Alert from "./Alert"
import Badge from "./Badge"
import Button from "./Button"
import ButtonLink from "./ButtonLink"
import Checkbox from "./Checkbox"
import InputField from "./InputField"
import Card from "@kiwicom/orbit-components/lib/Card"
import CardHeader from "@kiwicom/orbit-components/lib/Card/CardHeader"
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection"

const StyledComponentsOuter = styled.div`
  background: #F5F7F9;
  padding: 0 32px;
  max-height: 100vh;
  flex: 1 auto;
  overflow-y: scroll;
`

const StyledComponentsInner = styled.div`
  padding: 16px 0;
  
   > div {
    margin-top: 16px;
    height: auto;
  }
`

const Components = () => (
  <StyledComponentsOuter>
    <StyledComponentsInner>
      <Card>
          <CardHeader title="Alerts" />
          <CardSection>
              <Alert />
          </CardSection>
      </Card>
      <Card>
          <CardHeader title="Badges"/>
          <CardSection>
            <Badge />
          </CardSection>
      </Card>
      <Card>
        <CardHeader title="Buttons"/>
        <CardSection>
          <Button />
        </CardSection>
      </Card>
      <Card>
        <CardHeader title="ButtonLinks"/>
        <CardSection>
          <ButtonLink />
        </CardSection>
      </Card>
      <Card>
        <CardHeader title="Checkboxes"/>
        <CardSection>
          <Checkbox />
        </CardSection>
      </Card>
      <Card>
        <CardHeader title="InputFields"/>
        <CardSection>
          <InputField />
        </CardSection>
      </Card>
    </StyledComponentsInner>
  </StyledComponentsOuter>
)

export default Components