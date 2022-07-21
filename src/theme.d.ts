import { ThemeOptions } from "@mui/material";
import React from "react";

declare module '@mui/material/styles' {

    interface Theme {
        status: {
            danger: string
        }
    }

    interface ThemeOptions {
        status:{
            danger: React.CSSProperties['color'];
        }
    }

    
    interface Palette {
        neutrals?:PaletteColor
    }

    interface PaletteOptions {
        neutrals?: PaletteColorOptions
    }

    interface SimplePaletteOptions {
        darker?: string
    }

    interface PaletteColor {
        darker?: string
    }

}