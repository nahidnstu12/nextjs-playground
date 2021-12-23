import styles from "./admin.module.scss"
import Link from "next/link"

export default function Admindashboard() {
    return (
      <div className={styles.admin}>
        <h3>Admin Dashboard</h3>
        <Link href="/admin/product/adminproducts">
          <a>Admin Products</a>
        </Link>
        <Link href="/admin/users/users">
          <a>Users Lists</a>
        </Link>
        <Link href="/admin/repos">
          <a>Reposotory</a>
        </Link>
      </div>
    );
}
