import { Button, Form, Input, type FormProps } from "antd";
import React from "react";

type FieldType = {
  price: number;
  quantity: number;
  comment?: string;
};

const { TextArea } = Input;

const BuyCreate = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2 className="my-4 text-xl font-semibold">Qalam</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <div className="grid md:grid-cols-2 gap-x-4">
          <Form.Item<FieldType>
            label="Miqdori"
            name="quantity"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Narxi"
            name="price"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item<FieldType> label="Izoh" name="comment">
          <TextArea />
        </Form.Item>

        <Form.Item style={{ margin: 0 }} label={null}>
          <Button
            // loading={isPending}
            type="primary"
            className="w-full"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.memo(BuyCreate);
