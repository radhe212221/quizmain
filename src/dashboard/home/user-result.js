import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../../comp/loader'
import { listExams } from '../../services'
import { transform } from '../../utils'

export default function UserResult({ userid }) {
    const [loader, setloader] = useState(false)
    const [a, seta] = useState([])
    const boot = () => {
        setloader(true)
        listExams()
            .then(d => transform(d))
            .then(d => d.filter(x => x.userid === userid))
            .then(d => seta(d))
            .catch(d => console.log(d))
            .finally(d => setloader(false))
    }
    useEffect(boot, [])
    if (loader) return <Loader />
    return (
        <>
            <div>UserResult {userid}</div>
            {a.map(x => <>
                <h1>{x.name}</h1>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>sno</Th>
                            <Th>q</Th>
                            <Th>a</Th>
                            <Th>b</Th>
                            <Th>c</Th>
                            <Th>d</Th>
                            <Th>ans</Th>
                            <Th>correct</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {x.questions.map((y, i) => <Tr>
                            <Td>{i + 1}</Td>
                            <Td>{y.q}</Td>
                            <Td>{y.a}</Td>
                            <Td>{y.b}</Td>
                            <Td>{y.c}</Td>
                            <Td>{y.d}</Td>
                            <Td>{y.ans}</Td>
                            <Td>{y.ca}</Td>
                        </Tr>
                        )}                </Tbody>

                </Table>
            </>
            )}
        </>
    )
}
