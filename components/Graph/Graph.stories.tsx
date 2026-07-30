import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import Graph from './Graph'
import sample1 from '../../app/sample1.json'


const meta: Meta<typeof Graph> = {
  title: 'Components/Graph',
  component: Graph,
}

export default meta

type Story = StoryObj<typeof Graph>

export const Default: Story = {
  args: {
    data: sample1,
    focusedConstraint: null,
    onFocusedConstraint: fn(),
  },
}
