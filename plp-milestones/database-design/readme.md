# 🛒 E-Commerce Database Design

Welcome to our E-Commerce Database project! This project involves designing a robust and scalable relational database schema to support a full-featured e-commerce platform. It includes an Entity-Relationship Diagram (ERD), SQL schema, and documentation for team collaboration and future development.

---

## 📌 Project Objective

> **Goal:** Master the art of database design by collaboratively building an e-commerce database from scratch using proper normalization, constraints, and relationships.

---

## 📘 ERD (Entity-Relationship Diagram)

You can view the complete ERD here:  
🔗 [View ERD on draw.io](https://drive.google.com/file/d/1YQ70qUZ199BF2XFoc26sRAFYjqIo6e4I/view?usp=sharing) 
The ERD includes 12 interrelated tables representing various aspects of an e-commerce platform, such as products, images, variations, categories, sizes, and attributes.

---

## 📂 Tables Overview

| Table Name           | Description |
|----------------------|-------------|
| `brand`              | Stores brand information. |
| `product_category`   | Contains product category names and descriptions. |
| `product`            | Stores general information about each product. |
| `product_image`      | Stores image URLs linked to a product. |
| `color`              | Lists available product colors. |
| `size_category`      | Groups related sizes (e.g., clothes, shoes). |
| `size_option`        | Contains specific size values like 'S', 'M', '42'. |
| `product_variation`  | Links a product to a specific color and size combination. |
| `product_item`       | Represents a sellable SKU of a product with stock and price. |
| `attribute_category` | Categorizes attributes (e.g., physical, technical). |
| `attribute_type`     | Defines the data type of an attribute (text, boolean, etc.). |
| `product_attribute`  | Links a product with a custom attribute. |

---

## 🛠️ Technologies Used

- MySQL
- draw.io (for ERD visualization)
- Git & GitHub (for version control and collaboration)

---

## 📄 Installation & Usage

### Step 1: Clone the Repository

```bash
git clone https://github.com/Erick-Ondiwa/PLP/tree/main/database-design.git
cd database-design


## Authors and Contributors

This project was developed as part of the **PLP Academy Group Assignment**. Below are the contributors:

### Group 463 Members

#### Erick Ondiwa

- **Role**: Lead Developer
- **Email**: [erickondiwaz01@gmail.com](mailto:erickondiwaz01@gmail.com)
- **GitHub**: [@erick-ondiwa](https://github.com/erick-ondiwa)

#### Natasha Mwangi

- **Role**: Code Testing

#### Naomi Ng'ang'a 

- **Role**:  Implementing the database structure

#### Joh Mure Kazungu

- **Role**: Code testing, Review correct code workability and Error Correction/debugging.
