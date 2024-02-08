import React from "react";
import { Button, Popconfirm } from "antd";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";

function Delete({ id }) {
  const handleDelete = () => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to delete with ID ${id}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(` ID ${id} is deleted successfully`);
        alert("is deleted successfully");
      })
      .catch((error) => {
        console.error(`Error in deleting ID ${id}:`, error);
      });
  };

  return (
    <div>
      <Popconfirm
        title="Be carful"
        description="Are you sure to delete it ?"
        icon={<QuestionCircleOutlined style={{ color: "red" }} />}
        onConfirm={handleDelete}
      >
        <Button
          type="dashed"
          danger
          style={{ backgroundColor: "#FF0000", color: "white" }}
        >
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </div>
  );
}

export default Delete;
