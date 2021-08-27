import { useState } from "react"
import {connect} from 'react-redux'
import {createCourse} from '../src/actions/courseActions'

const Course = ({courses,createCourse}) => {

    const [course,setCourse] = useState({})
    
    const handleChange = event => {
        const {name,value} = event.target
        // const newCourse = { ...course, title: event.target.value,price:event.target.value };
        setCourse(prevCourse => ({
            ...prevCourse,
            [name]:value
        }))
        // setCourse(newCourse)
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log(course)
        // dispatch(createCourse(course))
        createCourse(course)
    }
    return (
        <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={handleChange}
          value={course.title}
          name="title"
        />
        <input
        name="price"
          type="text"
          onChange={handleChange}
          value={course.price}
        />

        <input type="submit" value="Save" />

        {courses.map(course => (
          <div key={course.title}>{course.title}-{course.price}</div>
        ))}

      </form>
    ) 
}
function mapStateToProps (state) {
    return {
        courses: state.courses
    }
}
const mapDispatchToProps = {
    createCourse
}
export default connect(mapStateToProps,mapDispatchToProps)(Course)
// export default Course
