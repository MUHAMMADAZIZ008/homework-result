import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { request } from "../config/config";
import { saveState } from "../config/storage";
const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setLoading(true);
    request
      .post("auth/login", values)
      .then((res) => {
        saveState("user", res);
        navigate("/app", {
          replace: true,
        });
      })
      .catch((error) => {
        form.setFields([
          {
            name: "email",
            errors: [error.message],
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login__wrapper">
      <Form
        form={form}
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          padding: "50px",
          width: 600,
          backgroundColor: "white",
          borderRadius: "10px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button loading={loading} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
