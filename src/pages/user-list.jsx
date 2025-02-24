import { Button, Empty, message, Table } from "antd";
import React from "react";
import { request } from "../config/config";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();
  const getUsers = () => {
    request.get("users").then((res) => {
      setUsers(res.data.users);
    });
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const deleteItem = async (data) => {
    request.delete(`users/${data.key}`).then(async (res) => {
      if (res.status == 200) {
        messageApi.success("successfully delete");
        await getUsers();
      } else {
        messageApi.error(res.data.message);
      }
    });
  };

  const updateItem = (data) => {
    navigate(`/update-user/${data.key}`)
  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "AGE",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "ACTION",
      render: (data) => {
        return (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              type="default"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => updateItem(data)}
            >
              Edit
            </Button>
            <Button
              onClick={() => deleteItem(data)}
              type="default"
              style={{ backgroundColor: "red", color: "white" }}
              color="danger"
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const dataSource = users.map((user, index) => ({
    key: user._id,
    id: index + 1,
    name: user.name,
    address: user.address,
    age: user.age,
    email: user.email,
  }));
  const reDirect = () => {
    navigate("/create-user");
  };
  return (
    <>
      {contextHolder}
      {dataSource.length ? (
        <Table dataSource={dataSource} columns={columns} />
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          styles={{
            image: {
              height: 60,
            },
          }}
        >
          <Button onClick={reDirect} type="primary">
            Create Now
          </Button>
        </Empty>
      )}
    </>
  );
};

export default UserList;
