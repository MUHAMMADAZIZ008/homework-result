import { Button } from "antd";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { request } from "../config/config";
import UserForm from "../components/user-form/user-form";

const UpdatePage = () => {
  const [user, setUser] = React.useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  React.useEffect(() => {
    request.get(`users/${id}`).then((res) => {
      setUser(res.data.data);
    });
  }, []);

  const backGo = () => {
    navigate(-1);
  };
  return (
    <div>
      <Button
        style={{ marginBottom: "50px" }}
        onClick={backGo}
        icon={<IoMdArrowRoundBack />}
      ></Button>
      <UserForm userDefaultValue={user} />
    </div>
  );
};

export default UpdatePage;
