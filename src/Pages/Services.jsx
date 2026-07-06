import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import DashboardCharts from "../Components/DashboardCharts";
import ReviewCard from "../Components/charts/ReviewCard";

const Services = () => {
  const location = useLocation();

  const productName = location.state?.productName;
  const price = location.state?.price;

  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  // 🚀 AUTO CALL ON PAGE LOAD
  useEffect(() => {
    if (!productName) return;

    const fetchAnalytics = async () => {
      setIsLoading(true);

      try {
        const res = await axios.post("http://127.0.0.1:8000/api/analytics/", {
          name: productName,
          price: price,
        });

        if (res.data && res.data.reviews && res.data.reviews.length > 0) {
          setPredictionData(res.data);
        } else {
          setIsUnavailable(true);
        }
      } catch (err) {
        console.error("Analytics API failed:", err);
        setIsUnavailable(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [productName, price]);

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-white p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

        {productName && (
          <p className="text-gray-400 text-sm">
            Showing results for:{" "}
            <span className="text-white">{productName}</span>
          </p>
        )}
      </div>

      {/* LOADING */}
      {isLoading && (
        <p className="text-gray-400">Running analytics engine...</p>
      )}

      {/* NO DATA */}
      {!isLoading && isUnavailable && (
        <p className="text-red-400">No analytics data found for this product</p>
      )}

      {/* DASHBOARD */}
      {!isLoading && predictionData && (
        <>
          <DashboardCharts apiData={predictionData} />
          <ReviewCard apiData={predictionData} />
        </>
      )}
    </div>
  );
};

export default Services;
