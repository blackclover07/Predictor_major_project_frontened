import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products/options";

export default function useProductConfigurator() {
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(500);

  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productNames, setProductNames] = useState([]);

  // fetch inventory
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const data = res.data;
        setAllProducts(data);

        const uniqueCategories = [...new Set(data.map((i) => i.category))];

        setCategories(
          uniqueCategories.map((cat) => ({
            value: cat,
            label: cat.charAt(0).toUpperCase() + cat.slice(1),
          })),
        );
      })
      .catch((err) => console.error("Inventory fetch failed:", err));
  }, []);

  // category → subcategory
  useEffect(() => {
    if (!category) {
      setProductTypes([]);
      setProductType("");
      return;
    }

    const filtered = allProducts.filter((item) => item.category === category);

    const uniqueSubs = [...new Set(filtered.map((i) => i.subcategory))];

    setProductTypes(
      uniqueSubs.map((sub) => ({
        value: sub,
        label: sub.charAt(0).toUpperCase() + sub.slice(1),
      })),
    );

    setProductType("");
    setProductNames([]);
    setProductName("");
  }, [category, allProducts]);

  // subcategory → product names
  useEffect(() => {
    if (!productType) {
      setProductNames([]);
      setProductName("");
      return;
    }

    const filtered = allProducts.filter(
      (item) => item.category === category && item.subcategory === productType,
    );

    setProductNames(
      filtered.map((item) => ({
        value: item.name,
        label: item.name,
      })),
    );

    setProductName("");
  }, [productType, category, allProducts]);

  return {
    category,
    setCategory,
    productType,
    setProductType,
    productName,
    setProductName,
    price,
    setPrice,
    categories,
    productTypes,
    productNames,
  };
}
