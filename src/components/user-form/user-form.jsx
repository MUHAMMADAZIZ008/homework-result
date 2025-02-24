import { Button, Input, InputNumber, Form, message } from "antd";
import React from "react";
import { request } from "../../config/config";
import { useNavigate } from "react-router-dom";

const UserForm = ({ userDefaultValue }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (!userDefaultValue) {
      request.post("users", values).then((res) => {
        if (res.status == 201) {
          messageApi.success(res.data.message);
        } else {
          messageApi.error(res.data.message);
        }
      });
      form.resetFields(); // Inputlarni tozalash
    } else if (userDefaultValue) {
      request.put(`users/${userDefaultValue._id}`, values).then((res) => {
        if (res.status === 200) {
          navigate("/");
        } else {
          messageApi.error(res.data.message);
        }
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <Form
        form={form} // Form obyektini biriktirish
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{
          name: userDefaultValue?.name,
          address: userDefaultValue?.address,
          email: userDefaultValue?.email,
          age: userDefaultValue?.age,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input your age!" }]}
        >
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
