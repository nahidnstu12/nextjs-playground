import FullNavbar from './nav/FullNavbar'
import Notify from "./common/Notify"
export default function Layout({children}) {
    return (
        <div>
            <FullNavbar />
            <Notify />
            {children}
        </div>
    )
}
