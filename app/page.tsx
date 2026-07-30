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
import sample1 from './sample1.json'
import sample2 from './sample2.json'
import sample3 from './sample3.json'

export default function Page() {
  const [owl, setOwl] = useState('sample1');
  const [data, setData] = useState(sample1);

  const handleChange = (event: SelectChangeEvent) => {
    setOwl(event.target.value)
  }

  useEffect(() => {
    switch (owl) {
      case 'sample1': setData(sample1); break
      case 'sample2': setData(sample2); break
      case 'sample3': setData(sample3); break
    }
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
