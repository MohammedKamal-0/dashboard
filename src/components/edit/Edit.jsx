import React, { useState, useEffect } from "react";
import { Button, Modal, Input } from "antd";
const { TextArea } = Input;
import { EditOutlined } from "@ant-design/icons";

function Edit({ id, onEdit, productDetails }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const showEditing = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
    onEdit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const updateProduct = () => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        handleOK();
      })
      .catch((error) => {
        console.error("Error editing :", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (productDetails) {
      setTitle(productDetails.title || "");
      setDescription(productDetails.description || "");
      setPrice(productDetails.price || "");
      setRating(productDetails.rating || "" );
      setBrand(productDetails.brand || "");
      setStock(productDetails.stock || "");
      setCategory(productDetails.category || "");
    }
  }, [productDetails]);
  return (
    <div>
      <Button
        type="primary"
        onClick={showEditing}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <EditOutlined />
      </Button>
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onOk={updateProduct}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <p>
          Product Name
          <TextArea
           rows={1}
            placeholder="Ex: iPhone X"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>


        <p>
           Rating
          <TextArea
           rows={1}
            placeholder="test"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </p>

        <p>
           Brand
          <TextArea
           rows={1}
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </p>


        <p>
           Stock
          <TextArea
           rows={1}
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </p>
        <p>
        Category
          <TextArea
           rows={1}
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </p>



        <p>
          Description
          <TextArea
            rows={3}
            placeholder="Ex: An Apple mobile phone with..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>




        <p>
          Price
          <TextArea
          rows={1}
            placeholder="Ex: 1000$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>




      </Modal>
    </div>
  );
}

export default Edit;
