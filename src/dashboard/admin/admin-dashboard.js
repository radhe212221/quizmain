import React from 'react'
import Header from './header'
import Footer from './footer'
import UploadQuiz from './upload-quiz'
import { Box } from '@chakra-ui/react'
export default function AdminDashboard() {
  return (
    <div>
      <Header />
      <Box h="90vh">
        <UploadQuiz />
      </Box>
      <Footer />
    </div>
  )
}
