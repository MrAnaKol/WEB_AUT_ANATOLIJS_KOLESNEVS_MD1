import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {

    static get url(){
        return"selectable";
    }

    static gridButton(){
        return cy.get("#demo-tab-grid");
    }

    static gridBox(){
        return cy.get('#gridContainer') ;
    }
}