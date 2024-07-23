import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'

import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation();
  const user = 1;
  const navigate = useNavigate()

  const questionList = useSelector((state) => state.questionReducer)
  console.log(questionList)

  // var questionList = [
  //   {
  //     _id:1,
  //     upVotes:3,
  //     downVotes:3,
  //     questionTitle:"what is the function",
  //     questionBody: "It meant to be",
  //     questionTags: ["c++","react js", "node js"],
  //     userPosted:"mano",
  //     userId:1,
  //     askedOne:"jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Yadav",
  //       answeredOn:"Jan 1",
  //       userId:1,
  //     }]
  //   },
  //   {
  //     _id:2,
  //     upVotes:3,
  //     downVotes:2,
  //     questionTitle:"what is the function",
  //     questionBody: "It meant to be",
  //     questionTags: ["c++","react js", "node js"],
  //     userPosted:"mano",
  //     userId:2,
  //     askedOn:"jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Yadav",
  //       answeredOn:"Jan 1",
  //       userId:2,
  //     }]
  //   },
  //   {
  //     _id:3,
  //     upVotes:3,
  //     downVotes:2,
  //     questionTitle:"what is the fdunction",
  //     questionBody: "It meant to be",
  //     questionTags: ["c++","react js", "node js"],
  //     userPosted:"mano",
  //     userId:3,
  //     askedOn:"jan 1",
  //     answer:[{
  //       answerBody:"Answer",
  //       userAnswered:"Yadav",
  //       answeredOn:"Jan 1",
  //       userId:3,
  //     }]
  //   },
  // ]
  

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {
            location.pathname === '/' ? ( <h1>Top Questions</h1> ) : ( <h1>All Questions</h1>
          )}
          <Link to={user===null ? checkAuth() :`/AskQuestions`} className='ask-btn'> Ask Questions </Link>
          
      </div>
      <div>
        {
          questionList?.data===null ? <h1>Loading...</h1> :
          
          <>
          <p>{questionList?.data.length} questions</p>
          <QuestionList questionList={questionList?.data} />
          
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
