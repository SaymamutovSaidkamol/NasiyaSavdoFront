import { Button, Table } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import React, { type FC } from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const columns = [
  {
    title: "Ism",
    dataIndex: "fullname",
    key: "fullname",
    // render: (text: any) => {
    //   return (
    //     // <Link>{text}</Link>
    //   );
    // },
  },
  {
    title: "Manzil",
    dataIndex: "adress",
    key: "adress",
  },
  {
    title: "Telefon",
    dataIndex: "phone",
    key: "adress",
    render: (text: any) => {
      return text[0];
    },
  },
  {
    title: "Balans",
    dataIndex: "balance",
    key: "balance",
    render: (number: number) => {
      return number.fprice();
    },
  },
  {
    title: "Option",
    dataIndex: "option",
    key: "option",
    render: () => {
      return (
        <div className="flex gap-2 justify-end">
          <Button>To'lov</Button>
          <Button>
            <MoreOutlined />
          </Button>
        </div>
      );
    },
  },
];

interface Props {
  data: undefined | any;
  loading: boolean;
}

const TableView: FC<Props> = ({ data, loading }) => {
  return (
    <>
      <Table
        loading={loading}
        dataSource={data}
        rowKey={"id"}
        columns={columns}
        pagination={false}
      />
    </>
  );
};

export default React.memo(TableView);
