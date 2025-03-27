import { SelectablePage } from "../../pageObjects/selectablePage";

describe('MD1', () => {
  context("Grid Test", () => {
      beforeEach(() => {
        SelectablePage.visit();
      })
  
      it('grid selection 2,4,6,8', () => {
        SelectablePage.gridButton().click();
        SelectablePage.gridBox().contains("Two").click();
        SelectablePage.gridBox().contains("Four").click();
        SelectablePage.gridBox().contains("Six").click();
        SelectablePage.gridBox().contains("Eight").click();
        SelectablePage.gridBox().contains("One").should('not.have.class', 'active');
        SelectablePage.gridBox().contains("Two").should('have.class', 'active');
        SelectablePage.gridBox().contains("Three").should('not.have.class', 'active');
        SelectablePage.gridBox().contains("Four").should('have.class', 'active');
        SelectablePage.gridBox().contains("Five").should('not.have.class', 'active');
        SelectablePage.gridBox().contains("Six").should('have.class', 'active');
        SelectablePage.gridBox().contains("Seven").should('not.have.class', 'active');
        SelectablePage.gridBox().contains("Eight").should('have.class', 'active');
        SelectablePage.gridBox().contains("Nine").should('not.have.class', 'active');
      })
    });
})