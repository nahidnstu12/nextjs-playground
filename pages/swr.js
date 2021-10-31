import Home from "../components/swr/Home";
import axios from "axios"
axios.defaults.baseURL = "http://localhost:5000";
export default function SWR() {
    return (
        <div className="">
            <Home />
        </div>
    )
}
