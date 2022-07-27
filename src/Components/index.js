// @flow
import * as React from "react";
import styled from "styled-components";
import Alert from "./Alert";
import Badge from "./Badge";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import Card from "@kiwicom/orbit-components/lib/Card";
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection";

const StyledComponentsOuter = styled.div`
  background: #f5f7f9;
  padding: 0 32px;
  max-height: 100vh;
  flex: 1 auto;
  overflow-y: scroll;
`;

const StyledComponentsInner = styled.div`
  padding: 16px 0;

  > div {
    margin-top: 16px;
    height: auto;
  }
`;

const Components = (): React.Node => (
  <StyledComponentsOuter>
    <StyledComponentsInner>
      <Card title="Alerts">
        d{" "}
        <CardSection>
          <Alert />
        </CardSection>
      </Card>
      <Card title="Badges">
        <CardSection>
          <Badge />
        </CardSection>
      </Card>
      <Card title="Buttons">
        <CardSection>
          <Button />
        </CardSection>
      </Card>
      <Card title="ButtonLinks">
        <CardSection>
          <ButtonLink />
        </CardSection>
      </Card>
      <Card title="Checkboxes">
        <CardSection>
          <Checkbox />
        </CardSection>
      </Card>
      <Card title="InputFields">
        <CardSection>
          <InputField />
        </CardSection>
      </Card>
    </StyledComponentsInner>
  </StyledComponentsOuter>
);

export default Components;
