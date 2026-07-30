import type { Meta, StoryObj } from '@storybook/react'
import { fn } from 'storybook/test'
import Graph from './Graph'
import { useEffect, useState } from 'react'


const meta: Meta<typeof Graph> = {
  title: 'Components/Graph',
  component: Graph,
}

export default meta

function StoryComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/samples/sample1.json').then(x => x.json()).then(x => setData(x))
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  return <Graph data={data} />
}

type Story = StoryObj<typeof Graph>

export const Default: StoryObj = {
  render: () => <StoryComponent />
}
