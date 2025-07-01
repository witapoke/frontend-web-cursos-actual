import Header from './componentes/Header'
import '../src/estilos/App.css'
import { useEffect, useState } from 'react'
import CourseCard from './componentes/CourseCard'
export default function App() {
  const [courses, setCourses] = useState([])

  async function getCourses() {
    const req = await fetch('http://localhost:3000/api/courses')
    const res= await req.json()
    setCourses(res)
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
