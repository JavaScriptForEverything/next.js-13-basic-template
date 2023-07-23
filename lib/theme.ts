import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		// primary: {
		// 	main: colors.orange[500]
		// }
	},
	breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      // lg: 1010,
      lg: 1200,
      xl: 1536,
    },
  },
})