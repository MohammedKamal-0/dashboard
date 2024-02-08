import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function NewProduct() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState("");

  const showAdding = () => {
    setIsModalOpen(true);
  };

  const handleOK = () => {
    setIsModalOpen(false);
    alert("is added successfully");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addNewProduct = () => {
    setIsLoading(true);

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
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
        console.error("Error in adding :", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showAdding}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Add new product
      </Button>
      
      <Modal
        title="Add new product"
        open={isModalOpen}
        onOk={addNewProduct}
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

export default NewProduct;
