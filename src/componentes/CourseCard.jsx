/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../estilos/CourseCard.css'
import { useNavigate } from 'react-router'
export default function CourseCard({ course }) {
  const { thumbnail, title, description, price, videos, _id } = course

  const navigate = useNavigate()

  function handleClick() {
    localStorage.setItem('Course', JSON.stringify(course))
    navigate(`/courses/${_id}`)
  }

  return (
    <div className='card-container' onClick={() => handleClick()}>
      <div className='thumbnail-div'>
        <img src={thumbnail} alt='' />
      </div>
      <div className='info-div'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
