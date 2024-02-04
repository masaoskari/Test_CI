import React from "react";
import PartFormEditor from "../../../../src/PartEditor/PartFormEditor";
import { withTestProviders } from "../../../withTestProviders";

describe("PartFormEditor", () => {
  it("mounts", () => {
    cy.mount(withTestProviders(<PartFormEditor partId={"test-part"} />));
  });

  it("renders the form", () => {
    cy.mount(withTestProviders(<PartFormEditor partId={"test-part"} />));
    cy.contains("PartFormEditor").should("be.visible");
    cy.contains("Part ID: test-part").should("be.visible");
  });
});
