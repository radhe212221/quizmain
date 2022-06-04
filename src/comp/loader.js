import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loader() {
    return (
        <Flex w="full" h="90vh" bg="white" justifyContent="center" alignItems="center">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    )
}
