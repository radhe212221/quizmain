import React from 'react'
import Quizform from './quiz-form'
import QuizUploadUsingExcel from './quiz-upload-using-excel'
export default function UploadQuiz() {

  return (
    <div>
      <Quizform />
      <QuizUploadUsingExcel />
      {/* all quiz */}
    </div>
  )
}
