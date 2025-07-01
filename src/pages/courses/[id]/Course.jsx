/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router'
import Header from '../../../componentes/Header'
import CourseCard from '../../../componentes/CourseCard'
import { useEffect, useState } from 'react'

export default function Course() {
  const [localStorageCourse, setLocalStorageCourse] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const courseFromStorage = JSON.parse(localStorage.getItem('Course'))
    setLocalStorageCourse(courseFromStorage)
  }, [])

  const goBack = () => {
    navigate('/')
    localStorage.clear('')
  }

  return (
    <div>
      <Header />
      <div className='card-div-container'>
        <CourseCard course={localStorageCourse} />
        <button onClick={() => goBack()}>Go back</button>
      </div>
    </div>
  )
}
