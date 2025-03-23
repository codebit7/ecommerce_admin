import React, { useEffect, useState } from "react";

const token = "hello";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    category: "",
    brand: "",
    condition: "Any",
    stock: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      alert("You must upload at least 5 images!");
      return;
    }

    const previews = files.map((file) => URL.createObjectURL(file));

    setFormData((prev) => ({ ...prev, images: files }));
    setImagePreviews(previews);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/category", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch categories");

        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length > 5) {
      alert("You must upload at least 5 images!");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData.images.forEach((image) => data.append("images", image));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const res = await fetch("http://localhost:3000/api/v1/create", {
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to create product");

      const result = await res.json();
      alert("Product Created Successfully");

      setFormData({
        name: "",
        description: "",
        price: "",
        discount: "",
        category: "",
        brand: "",
        condition: "Any",
        stock: "",
        images: [],
      });
      setImagePreviews([]);
    } catch (error) {
      alert(error.message || "Error creating product");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input type="number" className="form-control" name="discount" value={formData.discount} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Categories</label>
          <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" name="brand" value={formData.brand} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Condition</label>
          <select className="form-select" name="condition" value={formData.condition} onChange={handleChange}>
            <option value="Any">Any</option>
            <option value="New">Brand new</option>
            <option value="Old Items">Old items</option>
            <option value="Refurbished">Refurbished</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Images (Min: 5)</label>
          <input type="file" className="form-control" multiple accept="image/*" onChange={handleFileChange} required />
        </div>

        <div className="mb-3 d-flex">
          {imagePreviews.map((src, index) => (
            <img key={index} src={src} alt="Preview" className="me-2" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          ))}
        </div>

        <button type="submit" className="btn btn-primary">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;