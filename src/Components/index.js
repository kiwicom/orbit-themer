// @flow
import React from "react"
import styled from "styled-components"
import Alert from "./Alert"
import Badge from "./Badge"
import Button from "./Button"
import ButtonLink from "./ButtonLink"
import Checkbox from "./Checkbox"
import InputField from "./InputField"
import Heading from "@kiwicom/orbit-components/lib/Heading"
import Card from "@kiwicom/orbit-components/lib/Card"
import CardHeader from "@kiwicom/orbit-components/lib/Card/CardHeader"
import CardContent from "@kiwicom/orbit-components/lib/Card/CardContent"
import Separator from "@kiwicom/orbit-components/lib/Separator"
import Portal from "@kiwicom/orbit-components/es/Portal"
import Modal from "@kiwicom/orbit-components/lib/Modal"
import ModalHeader from "@kiwicom/orbit-components/lib/Modal/ModalHeader"
import ModalSection from "@kiwicom/orbit-components/lib/Modal/ModalSection"

const StyledComponentsOuter = styled.div`
  background: #F5F7F9;
  padding: 0 32px;
  max-height: 100vh;
  overflow-y: scroll;
`

const StyledComponentsInner = styled.div`
  padding: 16px 0;
  
   > div {
    margin-top: 16px;
    height: auto;
  }
`

const Components = ({ theme }) => (
  <StyledComponentsOuter>
    <StyledComponentsInner>
      <Card>
          <CardHeader title="Alerts" />
          <CardContent>
              <Alert theme={theme} />
          </CardContent>
      </Card>
      <Card>
          <CardHeader title="Badges"/>
          <CardContent>
            <Badge theme={theme} />
          </CardContent>
      </Card>
      <Card>
        <CardHeader title="Buttons"/>
        <CardContent>
          <Button theme={theme} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="ButtonLinks"/>
        <CardContent>
          <ButtonLink theme={theme} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="Checkboxes"/>
        <CardContent>
          <Checkbox theme={theme} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader title="InputFields"/>
        <CardContent>
          <InputField theme={theme} />
        </CardContent>
      </Card>
    </StyledComponentsInner>
  </StyledComponentsOuter>
)

export default Components