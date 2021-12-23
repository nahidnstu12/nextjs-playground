import { useRouter } from "next/dist/client/router";
import styles from "../admin.module.scss";
import axios from "axios"

const data = {
  address: {
    geolocation: {
      lat: "-37.3159",
      long: "81.1496",
    },
    city: "kilcoole",
    street: "new road",
    number: 7682,
    zipcode: "12926-3874",
  },
  id: 1,
  email: "john@gmail.com",
  username: "johnd",
  password: "m38rmF$",
  name: {
    firstname: "john",
    lastname: "doe",
  },
  phone: "1-570-236-7033",
};
export default function users({users}) {
  const router = useRouter();
  const userCart = (id) => {
    router.push(`/admin/users/${id}`);
  };
  return (
    <>
      <h3 className={styles.heading}>All Users</h3>
      <div className={styles.users}>
        {users.map((data, i) => (
          <div className={styles.user} key={i}>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <p
              style={{ marginBottom: "1rem" }}
            >{`${data.address.number},${data.address.street},${data.address.city}`}</p>
            <span onClick={() => userCart(data.id)}>Getting All Cart</span>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await axios("https://fakestoreapi.com/users");
  return {
    props: { users: data },
  };
}
