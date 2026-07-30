'use client'

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Graph from '@/components/Graph/Graph'

export default function Page() {
  const [owl, setOwl] = useState('sample1');
  const [data, setData] = useState('{}');

  const handleChange = (event: SelectChangeEvent) => {
    setOwl(event.target.value)
  }
  async function loadOwl() {
    let path = ''
    switch (owl) {
      case 'sample1': path = '/samples/sample1.json'; break
      case 'sample2': path = '/samples/sample2.json'; break
      case 'sample3': path = '/samples/sample3.json'; break
    }
    await fetch(path).then(x => x.json()).then(x => setData(x))
  }

  useEffect(() => {
    loadOwl()
  }, [owl])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
      }}
    >
      <FormControl size="small" sx={{ minWidth: 240 }}>
        <InputLabel id="owl-label">Owl File</InputLabel>
        <Select
          labelId="owl-label"
          value={owl}
          label="Owl"
          onChange={handleChange}
        >
          <MenuItem value="sample1">Sample1</MenuItem>
          <MenuItem value="sample2">Sample2</MenuItem>
          <MenuItem value="sample3">Sample3</MenuItem>
        </Select>
      </FormControl>
      <Graph data={data} />
    </Box>
  )
}
