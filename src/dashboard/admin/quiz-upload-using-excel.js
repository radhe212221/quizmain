import {
    Box, Button, Heading, Image, Input, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../../comp/loader'
import { textToCSV, convertToQuiz, transform } from '../../utils'
import { createQuiz, listQuiz } from '../../services'
export default function QuizUploadUsingExcel() {
    const [loader, setloader] = useState(false)
    const [a, seta] = useState([])
    const [b, setb] = useState([])
    const handleChange = e => {
        let file = e.target.files[0]
        let fr = new FileReader()

        fr.onload = () => {
            seta(textToCSV(fr.result))
        }
        if (file) {
            return fr.readAsText(file)
        }

    }
    const handleCick = async () => {
        setloader(true)
        for (let i = 0; i < a.length; i++) {
            let payload = convertToQuiz(a[i])
            // console.log(payload)
            let res = await createQuiz(payload)
            console.log(res)
        }
        setloader(false)
    }
    const boot = () => {
        listQuiz()
          .then(d => transform(d))
          .then(d => setb(d))
          .catch(e => {
            console.log(e)
          })
          .finally(d => {
            console.log("finally useeffect")
          })
      }
      useEffect(boot, [])
     
    if (loader) return <Loader />
    return (
        <Box p={10}>
            <Heading>QuizUploadUsingExcel</Heading>
            <Box h="100" pos="relative">
                <Image w={200} src="https://thumbs.dreamstime.com/b/upload-button-2468752.jpg" />
                <Input pos="absolute" top="0" left="0" w="full" h="full" opacity={0} type="file" onChange={handleChange} />
            </Box>
            <Button onClick={handleCick}>upload</Button>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>id</Th>
                            <Th>quiz</Th>
                            <Th>question</Th>
                            <Th>option1</Th>
                            <Th>option2</Th>
                            <Th>option3</Th>
                            <Th>option4</Th>
                            <Th>correct</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {b.map((x, i) => <Tr key={i}>
                            <Td>{i + 1}</Td>
                            <Td>{x.title}</Td>
                            <Td>{x.q}</Td>
                            <Td>{x.a}</Td>
                            <Td>{x.b}</Td>
                            <Td>{x.c}</Td>
                            <Td>{x.d}</Td>
                            <Td>{x.ca}</Td>
                        </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}
