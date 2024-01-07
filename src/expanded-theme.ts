// @ts-nocheck
//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette"{
    interface PaletteColor{
        [key:number]:string;
    }
    interface Palette{
        tertiary:PaletteColor;
    }
}



// Update the existing PaletteColor and Palette interfaces
// interface PaletteColor {
//     [key: number]: string;
//   }
  
//   interface Palette {
//     tertiary: PaletteColor;
//   }
  
//   // Module augmentation for createPalette
//   declare module "@mui/material/styles/createPalette" {
//     interface Palette {
//       tertiary: PaletteColor;
//     }
//   }
  


  