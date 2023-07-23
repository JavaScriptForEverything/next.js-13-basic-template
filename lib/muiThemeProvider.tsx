'use client'
import { ThemeProvider } from '@mui/material'
import { theme } from '.'

type Props = {
	children: React.ReactNode
}
const MuiThemeProvider = ({ children }: Props) => {

	return (
		<>
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
		</>
	)
}
export default MuiThemeProvider
