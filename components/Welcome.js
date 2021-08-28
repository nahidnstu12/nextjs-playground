import Button from '@material-ui/core/Button';
import styles from "../styles/test.module.scss";

export default function Welcome() {
    return (
        <div className="bg-red-400 flex m-5">
            <p className="font-bold -mx-auto p-2 uppercase text-blue-900">Welcome page</p>
            <Button  className={styles.btn1}>Default</Button>
            <Button className="bg-red-500 text-gray-400 hover:bg-red-800 ">Testing Css</Button>
        </div>
    )
}