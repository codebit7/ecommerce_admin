import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import camera from './../assets/camera.png'


const products = [
  {
    id: 1,
    image: camera,
    name: "Black T-shirt",
    sizes: "S, M, L, XL",
    price: "$80.00",
    stock: "486 Item Left",
    sold: "155 Sold",
    category: "Fashion",
    rating: 4.5,
    reviews: "55 Review",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    name: "Olive Green Leather Bag",
    sizes: "S, M",
    price: "$136.00",
    stock: "784 Item Left",
    sold: "674 Sold",
    category: "Hand Bag",
    rating: 4.1,
    reviews: "143 Review",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    name: "Women Golden Dress",
    sizes: "S, M",
    price: "$219.00",
    stock: "769 Item Left",
    sold: "180 Sold",
    category: "Fashion",
    rating: 4.4,
    reviews: "174 Review",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/50",
    name: "Gray Cap For Men",
    sizes: "S, M, L",
    price: "$76.00",
    stock: "571 Item Left",
    sold: "87 Sold",
    category: "Cap",
    rating: 4.2,
    reviews: "23 Review",
  },
];

const ViewProducts = () => {
  return (
    <div className="product-list-container">
      <div className="header d-flex justify-content-between">
        <h2>All Product List</h2>
        <div className="actions ">
          <Button className="add-product">Add Product</Button>
          <Button className="filter">This Month ▼</Button>
        </div>
      </div>

      <Table hover responsive className="product-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Product Name & Size</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} >
              <td>
                <input type="checkbox" />
              </td>
              <td className="product-info d-flex align-content-center  ">
                <img src={product.image} alt={product.name} style={{width:'100px',}}/>
                
                  <p>{product.name}</p>
                
                
              </td>
              <td>{product.price}</td>
              <td>
                <strong>{product.stock}</strong>
                <br />
                {product.sold}
              </td>
              <td>{product.category}</td>
              <td className="rating">
                <span className="star"><FaStar /> {product.rating}</span>
                <br />
                {product.reviews}
              </td>
              <td className="action-buttons">
                <Button variant="light"><FaEye /></Button>
                <Button variant="warning"><FaEdit /></Button>
                <Button variant="danger"><FaTrash /></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewProducts;
