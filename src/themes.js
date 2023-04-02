import BgBlue from './assets/bg-blue.jpeg'
import BgRed from './assets/bg-red.jpeg'
import BgGreen from './assets/bg-green.jpeg'
import BgViolet from './assets/bg-violet.jpeg'
import BgOcean from './assets/bg-ocean.jpeg'
import { createContext, useCallback, useState } from 'react'

export const THEMES = {
    red: {
        css: {
            "--text-primary": "#510F3D",
            "--text-contrast": "#251C9B",
            "--highlight": "#BEA1FE",
        },
        img: BgRed
    },
    blue: {
        css: {
            "--text-primary": "#3e5365",
            "--text-contrast": "#63032D",
            "--highlight": "#7a8ea0",
        },
        img: BgBlue
    },
    green: {
        css: {
            "--text-primary": "#364B3C",
            "--text-contrast": "#3E694B",
            "--highlight": "#BBA7A5",
        },
        img: BgGreen
    },
    violet: {
        css: {
            "--text-primary": "#115791",
            "--text-contrast": "#3E0A70",
            "--highlight": "#FF6701",
        },
        img: BgViolet
    },
    ocean: {
        css: {
            "--text-primary": "#015B61",
            "--text-contrast": "#04979F",
            "--highlight": "#CEB7A5",
        },
        img: BgOcean
    }
}

export const themeNames = Object.keys(THEMES)

export const ThemeContext = createContext()

export function useTheme() {
    const [storedTheme, setStoredTheme] = useState(() => {
        try {
            return localStorage.getItem("theme") || "red"
        } catch (error) {
            return "red"
        }
    })

    const changeTheme = useCallback(() => {
        const nextTheme = themeNames[(themeNames.indexOf(storedTheme) + 1) % themeNames.length]

        setStoredTheme(nextTheme);
        localStorage.setItem("theme", nextTheme)
    }, [storedTheme])

    return [storedTheme, changeTheme]
}