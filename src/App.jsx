import Header from './componentes/Header'
import axios from 'axios'
import '../src/estilos/App.css'
import { useEffect, useState } from 'react'
import CourseCard from './componentes/CourseCard'
export default function App() {
  const [courses, setCourses] = useState([])

  async function getCourses() {
    const courses = await axios.get('http://localhost:3000/api/courses')
    setCourses(courses.data)
  }

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div className='app-container'>
      <Header />
      {courses.map(course=><CourseCard course={course} key={course._id}/>)}
    </div>
  )
}
