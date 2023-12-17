import React from "react";
// import { useGetUsersQuery } from "api";
import { UserList } from "modules";
export const Employees = () => {
  // const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const onclick = () => {
  //   fetch("http://192.168.2.127:8000/api/clients/", {
  //     headers: { "Content-Type": "application/json", Accept: "*/*" },
  //     method: "POST",
  //     body: JSON.stringify({ name }),
  //   })
  //     .then((data) => data)
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  // useEffect(() => {}, []);
  // const { data, error, isLoading } = useGetUsersQuery();

  return (
    <div>
      <UserList />
    </div>
  );
};
