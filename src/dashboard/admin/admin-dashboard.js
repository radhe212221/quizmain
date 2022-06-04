import React from 'react'
import Header from './header'
import Footer from './footer'
import UploadQuiz from './upload-quiz'
import { Box } from '@chakra-ui/react'
export default function AdminDashboard() {
  return (
    <div>
      <Header />
      <Box>
        <UploadQuiz />
      </Box>
      <Footer />
    </div>
  )
}
