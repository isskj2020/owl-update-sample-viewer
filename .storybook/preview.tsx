import type { Preview } from '@storybook/nextjs-vite'
import AppHeader from '@/components/AppHeader'
import { Stack } from '@mui/material'
import AppThemeProvider from '@/components/AppThemeProvider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <AppThemeProvider>
        <Stack>
          {Story()}
        </Stack>
      </AppThemeProvider>
    ),
  ],
}

export default preview
