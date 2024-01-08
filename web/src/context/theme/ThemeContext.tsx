import React, {createContext, useState} from 'react';
import useCookie from "react-use-cookie";
import {THEME_COOKIE_NAME} from "../../other/constants";
import {ThemeTypes} from '../../other/enums';
import {ContextProps} from "../GlobalContext";

export interface IThemeContext {
    onChangeListener: () => string
    theme: string
}

const ThemeContext = createContext<IThemeContext | null>(null);


const ThemeContextProvider = ({children}: ContextProps) => {
    const [themeCookie, setThemeCookie] = useCookie(THEME_COOKIE_NAME, ThemeTypes.LIGHT_THEME);
    const [theme, setTheme] = useState<string>(themeCookie);

    const setThemeListener = () => {
        if (themeCookie === ThemeTypes.LIGHT_THEME) {
            setTheme(ThemeTypes.DARK_THEME);
            setThemeCookie(ThemeTypes.DARK_THEME);
        } else {
            setTheme(ThemeTypes.LIGHT_THEME);
            setThemeCookie(ThemeTypes.LIGHT_THEME);
        }
    };

    const contextData = {
        theme: theme,
        onChangeListener: setThemeListener
    } as IThemeContext;

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeContextProvider};