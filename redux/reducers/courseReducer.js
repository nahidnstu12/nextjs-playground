import initialState from "./initialState";

export default function  CourseReducer (state = initialState, action)
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