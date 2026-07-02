import React, { useEffect, useState } from "react";
import { getProducts } from "../../../services/ProductService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");

  const handleRefresh = async () => {
    // Reset all filters
    setSearch("");
    setCategory("");
    setSubcategory("");
    setBrand("");
    setStatus("");

    // Fetch latest products
    await fetchProducts();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let data = [...products];

    if (search) {
      data = data.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category) {
      data = data.filter((p) => p.category === category);
    }

    if (subcategory) {
      data = data.filter((p) => p.subcategory === subcategory);
    }

    if (brand) {
      data = data.filter((p) => p.brand === brand);
    }

    if (status) {
      data = data.filter((p) =>
        status === "active" ? p.is_active : !p.is_active,
      );
    }

    setFilteredProducts(data);
  }, [search, category, subcategory, brand, status, products]);

  const categories = [...new Set(products.map((p) => p.category))];
  const subcategories = [...new Set(products.map((p) => p.subcategory))];
  const brands = [...new Set(products.map((p) => p.brand))];

  return (
    <div className="min-h-screen bg-[#090b0e] text-white p-8 w-full">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Products Management</h1>
          <p className="text-sm text-gray-400">
            Manage all products in the catalog.
          </p>
        </div>

        <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 text-sm font-semibold">
          <i className="ri-add-line mr-1"></i>
          Add Product
        </button>
      </header>

      {/* Filters */}

      <div className="bg-[#0f1216] border border-gray-800 rounded-2xl p-4 mb-6 flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder="Search product..."
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-4 py-2 text-sm outline-none focus:border-blue-500 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2 text-sm"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2 text-sm"
        >
          <option value="">All Brands</option>

          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2 text-sm"
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">All Subcategories</option>
          {subcategories.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>

        <select
          className="bg-[#090b0e] border border-gray-800 rounded-lg px-3 py-2 text-sm"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button
          onClick={handleRefresh}
          disabled={loading}
          className="ml-auto bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50"
        >
          <i className={`ri-refresh-line ${loading ? "animate-spin" : ""}`}></i>
        </button>
      </div>
      {/* Table */}

      <div className="bg-[#0f1216] border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="border-b border-gray-800 text-gray-500 text-xs uppercase">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Subcategory</th>
              <th className="p-4 text-center">Brand</th>
              <th className="p-4 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-400">
                  Loading Products...
                </td>
              </tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-400">
                  📦 No products matched your filters. Try changing the search
                  or filters.
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-900 hover:bg-[#15191f]"
                >
                  <td className="p-4 font-semibold">{product.name}</td>

                  <td className="p-4 uppercase">{product.category}</td>

                  <td className="p-4 uppercase">{product.subcategory}</td>

                  <td className="p-4 text-center">
                    <span className="px-2 py-1 rounded bg-gray-800 text-xs">
                      {product.brand}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${
                        product.is_active ? "bg-green-400" : "bg-red-400"
                      }`}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
