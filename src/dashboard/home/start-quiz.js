import { Box, Button, filter, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../../comp/loader'
import { completeExam } from '../../services'
import { fillAnswersFromAutomation } from '../../utils'

export default function StartQuiz({ userid, name, data }) {
    const [loader, setloader] = useState(false)
    const [timer, settimer] = useState(0)
    const [state, setstate] = useState(data)

    const handleChange = (ob, index, e) => {
        let val = (e.target.value)
        setstate(state.map((x, i) => i === index ? { ...x, ans: val } : x))
    }

    const starttimer = () => {
        if (timer <= 60) {
            setTimeout(() => settimer(timer + 1), 1000)
        }
    }

    const submittest = async (status) => {
        setloader(true)
        settimer(100)
        const payload = {
            userid,
            name,
            questions: fillAnswersFromAutomation(state),
            status,
            allowed: false
        }
        let res=await completeExam(payload)
        // console.log(status ? "submitted automatically" : "user submit")
        setloader(false)
    }

    useEffect(starttimer, [timer])
    if (loader) return <Loader />
    if (timer > 60 && timer < 100) {
        submittest(true)
        return <h1>timeout form submittted</h1>
    }
    return (
        <>
            <div>StartQuiz - {userid} for [{name}]</div>
            <Box>
                <Button onClick={() => submittest(false)} bg={timer > 60 ? "silver" : "yellow"}>Submit {timer} seconds</Button>
                <br />
                {state?.map((x, i) => <Box p={1} w="130px" mx={5} display="inline-flex" mb={10} shadow="lg" key={i}>
                    <Box>
                        <Box fontSize="2xl">{x.q}</Box>
                        <Box bg={x.ans === "1" ? "silver" : "white"}>{x.a}</Box>
                        <Box bg={x.ans === "2" ? "silver" : "white"}>{x.b}</Box>
                        <Box bg={x.ans === "3" ? "silver" : "white"}>{x.c}</Box>
                        <Box bg={x.ans === "4" ? "silver" : "white"}>{x.d}</Box>
                        <Input
                            onChange={(e) => handleChange(x, i, e)}
                            value={x.ans}
                            type="number"
                            min={0}
                            max={4} />
                    </Box>
                </Box>)}
            </Box>
        </>
    )
}
