export default function  CourseReducer (state = [], action)
{
    switch(action.type)
    {
        case "COURSE_CREATE":
            return [
                ...state,
                {...action.course}
            ]

        default:
            return state;
    }
}