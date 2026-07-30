import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import AppHeader from './AppHeader'

const meta: Meta<typeof AppHeader> = {
  title: 'Components/AppHeader',
  component: AppHeader,
}

export default meta

type Story = StoryObj<typeof AppHeader>

export const Default: Story = {
  args: {
  },
}

