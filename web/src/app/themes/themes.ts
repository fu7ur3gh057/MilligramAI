import { ThemeTypes } from "../../other/enums";
import {darkPalette, lightPalette } from "./colorPalette";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string,
        secondary: string,
        text: string,
        title: string,
        accent: string,
        hover: string,
        filter: string,
        primaryFilter: string,
        activeFilter: string,
        accentFilter: string,
        transition: string,
        shadowColor: string,
        borderColor: string
    }
}

export const lightTheme = {
    primary: lightPalette.primary,
    secondary: lightPalette.secondary,
    text: lightPalette.text,
    title: lightPalette.title,
    accent: lightPalette.accent,
    hover: lightPalette.hover,
    filter: lightPalette.filter,
    primaryFilter: lightPalette.primaryFilter,
    activeFilter: lightPalette.activeFilter,
    accentFilter: lightPalette.accentFilter,
    transition: lightPalette.transition,
    shadowColor: lightPalette.shadowColor,
    borderColor: lightPalette.borderColor,
}

export const darkTheme = {
    primary: darkPalette.primary,
    secondary: darkPalette.secondary,
    text: darkPalette.text,
    title: darkPalette.title,
    accent: darkPalette.accent,
    hover: darkPalette.hover,
    filter: darkPalette.filter,
    primaryFilter: darkPalette.primaryFilter,
    activeFilter: darkPalette.activeFilter,
    accentFilter: darkPalette.accentFilter,
    transition: darkPalette.transition,
    shadowColor: darkPalette.shadowColor,
    borderColor: darkPalette.borderColor,
}

export const setupThemeProvider = (value: string) => {
    if (value === ThemeTypes.LIGHT_THEME) {
        return lightTheme;
    } else {
        return darkTheme;
    }
};
