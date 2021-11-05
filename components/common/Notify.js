import Loading from "./Loading";
import Toast from "./Toast";
import { useSelector } from "react-redux";

const Notify = () => {
  // const {state, dispatch} = useContext(DataContext)
  // const { notify } = state
  const notify = useSelector((state) => state.notify.notify);
  console.log(notify);
  return (
    <>
      {notify?.loading && <Loading />}
      {/* <Loading /> */}
      {/* {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: "Error" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-danger"
        />
      )} */}

      {/* {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: "Success" }}
          handleShow={() => dispatch({ type: "NOTIFY", payload: {} })}
          bgColor="bg-success"
        />
      )} */}
    </>
  );
};

export default Notify;
