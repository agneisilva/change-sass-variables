import { Injectable } from "@angular/core";
import { ClientService } from "./client.service";

@Injectable({
    providedIn: 'root'
})
export class StyleService {

    //https://www.c-sharpcorner.com/article/dynamic-themes-without-a-library-in-angular/
    //https://stackblitz.com/edit/native-theming-form-medium?file=src%2Fapp%2Fcomponents%2Ftheme-picker%2Ftheme-picker.component.ts
    //https://native-theming-form-medium.stackblitz.io/

    private themeWrapper = document.querySelector('body');

    constructor(private clientService: ClientService){}

    public setStyle(clientId: number): void {

        this.clientService.getClientConfig(clientId).subscribe(config => {
            this.configStyle(config);
        });
    }

    public configStyle(stylesheet) {
        console.log(stylesheet);

        // Navigation Styles
        if (stylesheet.globalNavColor) {
            this.themeWrapper.style.setProperty('--navColor', stylesheet.globalNavColor);
        }
        if (stylesheet.globalNavBackground) {
            this.themeWrapper.style.setProperty('--navBackground', stylesheet.globalNavBackground);
        }

        // Card Styles
        if (stylesheet.globalCardColor) {
            this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
        }
        if (stylesheet.globalNavBackground) {
            this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
        }

        // Footer Styles
        if (stylesheet.globalFooterColor) {
            this.themeWrapper.style.setProperty('--footerColor', stylesheet.globalFooterColor);
        }
        if (stylesheet.globalFooterBackground) {
            this.themeWrapper.style.setProperty('--footerBackground', stylesheet.globalFooterBackground);
        }
        if (stylesheet.globalFooterAlignment) {
            this.themeWrapper.style.setProperty('--footerAlignment', stylesheet.globalFooterAlignment);
        }

        // Button Styles
        if (stylesheet.globalButtonColor) {
            this.themeWrapper.style.setProperty('--buttonColor', stylesheet.globalButtonColor);
        }
        if (stylesheet.globalButtonBackground) {
            this.themeWrapper.style.setProperty('--buttonBackground', stylesheet.globalButtonBackground);
        }
    }
}