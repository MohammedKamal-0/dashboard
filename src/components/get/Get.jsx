import React, { useState } from "react";
import { Modal, Image, Table, Space } from "antd";
import "./Get.css";
import Delete from "../delete/Delete";
import Edit from "../edit/Edit";

function Get({ products }) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  
  
  
  const showModal = (id) => {
    setSelectedProductId(id);
  };

  const handleOk = () => {
    setSelectedProductId(null);
  };
  const handleCancel = () => {
    setSelectedProductId(null);
  };
  const handleEditSuccess = () => {
    alert("is edited successfully");
  };


  
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Link",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "lat",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "long",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "information",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "department",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          
          <Modal
            title="Product Details"
            open={selectedProductId === record.id}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h1>{record.title}</h1>
            <Image width={200} src={record.thumbnail} alt={record.title} />
            <p>{record.description}</p>
            <p>{record.price}$</p>
          </Modal>
          <Edit
            id={record.id}
            onEdit={handleEditSuccess}
            productDetails={record}
          />
          <Delete id={record.id} />
        </Space>
      ),
    }
  ];
  const columns2 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Link",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "lat",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "long",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "information",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "department",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price}$`,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Edit
            id={record.id}
            onEdit={handleEditSuccess}
            productDetails={record}
          />
          <Delete id={record.id} />
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className="table1">
        <Table columns={columns} dataSource={products}
         pagination={false}
          />
      </div>
       <div className="table2">
        <Table
          columns={columns2}
          dataSource={products}
          pagination={false}
          style={{ width: "100%" }}
        />
      </div> 
      <br />
      {/* <center>
        <Pagination
          defaultCurrent={1}
          total={100}
          showSizeChanger={false}
          onChange={(page) => setSkip((page - 1) * 10)}
        />
      </center> */}
      <br />
    </div>
  );
}

export default Get;
