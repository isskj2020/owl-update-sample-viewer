export type Node = {
  id: string
  name: string
  x?: number
  y?: number
  fx?: number | null
  fy?: number | null
}

export type Edge = {
  source: string | Node
  target: string | Node
  label: string
  type: string
}

export type Constraint = {
  id: number
  subject?: string
  parent?: string
  left?: string
  right?: string
  priority: number
  violation: number
  depth: number
  repair_cost: number
}

export type Axioms = {
  violation_score: number,
  constraints: Constraint[],
  namespaces: Record<string, string>
}

export type OWLData = {
  axioms: Axioms,
  nodes: Node[],
  edges: Edge[],
}
