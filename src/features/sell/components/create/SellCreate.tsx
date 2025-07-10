import PartnerSell from "@/features/parter/pages/detail/PartnerSell";
import { Button, Form, Input, type FormProps } from "antd";
import React, { useState, type FC } from "react";
import { useParams } from "react-router-dom";

type FieldType = {
  title: string;
  sellPrice: number;
  quantity: number;
  partnerId?: string;
};

interface Props {
  handleCancel: () => void;
  product: any;
}

export const SellCreate: FC<Props> = React.memo((product) => {
  const { id } = useParams()
  const [active, setActive] = useState(false)
  const [products, setProducts] = useState<FieldType[]>([])

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const newProduct = {
      ...values,
      partnerId: id,
      quantity: Number(values.quantity),
      sellPrice: Number(values.sellPrice),
    };

    setProducts((prev) => {
      const updated = [...prev, newProduct];
      console.log("Yangi product qo‘shildi:", newProduct);
      console.log("Hozirgi barcha productlar:", updated);
      return updated;
    });

    console.log(products);
    console.log(product.product);


    setActive(true)
  };

  return (
    <>

      {products.map((item: any) => (
        <div className="border border-[#c7c2c2] bg-[#eee] rounded-2xl px-3 py-5 flex items-center justify-around mb-5" key={item.sellPrice}>
          <div>
            <h3><strong>Product: </strong>{product.product.title}</h3>
            <h3><strong>Quantity: </strong>{item.quantity}</h3>
            <h3><strong>SellPrice: </strong>{item.sellPrice}</h3>
          </div>
          <div>
            <Button>x</Button>
          </div>
        </div>
      ))}

      <div>
        {active ? (
          <PartnerSell active={active} setActive={setActive} />
        ) : (
          <Form
            name="basic"
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <div className="flex justify-center items-center gap-5">
              <div className="grid md:grid-cols-2 gap-x-4">
                <Form.Item<FieldType>
                  label="Miqdori"
                  name="quantity"
                  rules={[
                    { required: true, message: "Iltimos miqdorni kiriting!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Narxi"
                  name="sellPrice"
                  rules={[
                    { required: true, message: "Iltimos narxni kiriting!" },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="mt-8">
                <Form.Item>
                  <Button htmlType="submit" >+</Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        )}
      </div></>
  )
})