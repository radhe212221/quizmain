import { Box, Button, Container, Flex, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../../comp/loader'
import { createQuiz, listQuiz } from '../../services'
import { transform } from '../../utils'
export default function Quizform() {
  const [loader, setloader] = useState(false)
  const [ob, setob] = useState({
    title: "",
    q: "",
    a: "",
    b: "",
    c: "",
    d: "",
  })
  const [ca, setca] = React.useState('1')

  const handleChange = e => {
    let { value, placeholder } = e.target
    setob({ ...ob, [placeholder]: value })
  }
  const handleClick = async () => {
    setloader(true)
    // console.log({...ob,ca})
    createQuiz({ ...ob, ca })
      .then(d => {
        console.log(d)
      }).catch(e => console.log(e))
      .finally(d => {
        setloader(false)
      })
  }
  if (loader) return <Loader />
  return (
    <Box px={10}>
      <Box fontSize="xl">create questions</Box>
      <Flex direction={["column", "column", "row"]} gap={1}>
        <Input onChange={handleChange} placeholder="title" value={ob.title} />
        <Input onChange={handleChange} placeholder="q" value={ob.q} />
        <Input onChange={handleChange} placeholder="a" value={ob.a} />
        <Input onChange={handleChange} placeholder="b" value={ob.b} />
        <Input onChange={handleChange} placeholder="c" value={ob.c} />
        <Input onChange={handleChange} placeholder="d" value={ob.d} />
        <RadioGroup onChange={setca} value={ca} colorScheme="teal">
          <Stack direction='row'>
            <Radio value='1'>{ob.a}</Radio>
            <Radio value='2'>{ob.b}</Radio>
            <Radio value='3'>{ob.c}</Radio>
            <Radio value='4'>{ob.d}</Radio>
          </Stack>
        </RadioGroup>
        <Box><Button onClick={handleClick} bg="teal" color="white">create quiz</Button></Box>
      </Flex>
    </Box>
  )
}
