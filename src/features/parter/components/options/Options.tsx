import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const Options = () => {
  return (
    <div className="mb-4 flex justify-between">
      <div className="flex gap-3">
        <span className="underline">Aktiv</span>
        <span>Arxiv</span>
      </div>
      <div>
        <Button type="primary">
          <PlusOutlined />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Options);
