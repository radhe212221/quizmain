import { Box, Button, Container, Flex, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function Quizform() {
  const [quiz, setquiz] = useState({
    title: "",
    q: "",
    a: "",
    b: "",
    c: "",
    d: "",
    ca: "",
  })
  return (
    <Box px={10}>
      <Box fontSize="xl">create questions</Box>
      <Flex gap={1}>
        <Input placeholder="title" />
        <Input placeholder="q" />
        <Input placeholder="a" />
        <Input placeholder="b" />
        <Input placeholder="c" />
        <Input placeholder="d" />
        <Box><Button bg="blue" color="white">create quiz</Button></Box>
      </Flex>

    </Box>
  )
}
