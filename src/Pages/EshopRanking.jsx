import React, { useState } from "react";
import axios from "axios";

import ProductConfigurator from "../components/ProductConfigurator";
import useProductConfigurator from "../hooks/useProductConfigurator";
import RankingCard from "../Components/rankings/RankingCard";

import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/react-router";

const EshopRanking = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const {
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
  } = useProductConfigurator();

  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/product-ranking/",
        { name: productName },
      );

      setRankings(res.data.rankings || []);
      setStep(2);
    } catch (err) {
      console.error("Ranking API error:", err);
      setRankings([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-white p-6">
      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-2xl">
            <ProductConfigurator
              categories={categories}
              productTypes={productTypes}
              productNames={productNames}
              category={category}
              productType={productType}
              productName={productName}
              price={price}
              setCategory={setCategory}
              setProductType={setProductType}
              setProductName={setProductName}
              setPrice={setPrice}
              onSubmit={handleSubmit}
              isLoading={loading}
            />
          </div>
        </div>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl bg-[#14171c] rounded-2xl p-6 border border-gray-800">
            <h2 className="text-xl font-bold mb-4 text-center">
              E-Shop Rankings
            </h2>

            {loading && (
              <p className="text-gray-400 text-center">Loading rankings...</p>
            )}

            {!loading && rankings.length === 0 && (
              <p className="text-gray-500 text-center">
                Submit product to see rankings
              </p>
            )}

            <div className="space-y-3 mt-4">
              <RankingCard rankings={rankings} />
            </div>

            {rankings.length > 0 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => {
                    if (!isSignedIn) {
                      navigate("/login");
                      return;
                    }

                    navigate("/services", {
                      state: { productName, price },
                    });
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2
                      ${
                        isSignedIn
                          ? "bg-blue-600 hover:bg-blue-500"
                          : "bg-gray-700 text-gray-400 opacity-60"
                      }`}
                >
                  {!isSignedIn && <span>🔒</span>}
                  View Extended Analytics
                </button>
              </div>
            )}

            <div className="flex justify-center mt-4">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EshopRanking;
