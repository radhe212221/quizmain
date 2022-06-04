import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

export default function Header() {
  return (
    <div><Flex bg="black" color="white" h="10" alignItems="center" justifyContent="space-around">
      <Box>admin dashboard</Box>
      <Box>logout</Box>
    </Flex></div>
  )
}
