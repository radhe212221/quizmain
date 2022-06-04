import { Badge, Box, Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../../comp/loader'
import UserResult from './user-result'
import StartQuiz from './start-quiz'
import { listQuiz } from '../../services'
import { transform, uniqueBy ,countBy} from '../../utils'
export default function HomeDashboard() {
    const [loader, setloader] = useState(false)
    const [a, seta] = useState([])

    const boot = () => {
        setloader(true)
        listQuiz()
            .then(d => transform(d))
            .then(d => seta(d))
            .catch(e => console.log(e))
            .finally(e => setloader(false))
    }
    useEffect(boot, [])
    if (loader) return <Loader />
    return (
        <Box p={5}>
            <Heading>HomeDashboard</Heading>
            <Flex gap={2}>
                {uniqueBy(a, "title").map(x => <Button colorScheme="orange">take {x} <Badge ml={2} fontSize="xl" colorScheme="yellow">{countBy(a,x,"title")?.length}</Badge></Button>)}
            </Flex>
            {/* <StartQuiz userid="-N3hdTXoGz4xR2I5uhPu" name="quiz1" data={countBy(a,"quiz1","title")} /> */}
            <UserResult userid="-N3hdTXoGz4xR2I5uhPu"  />
        </Box>
    )
}
