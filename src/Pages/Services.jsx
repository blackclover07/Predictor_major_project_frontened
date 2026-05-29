import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectBox from "../Components/SelectBox";
import PriceSlider from "../Components/PriceSlider";
import DashboardCharts from "../Components/DashboardCharts";
import ReviewCard from "../Components/charts/ReviewCard";

const Services = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(500);

  const [categories, setCategories] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productNames, setProductNames] = useState([]);

  const [predictionData, setPredictionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  const API_URL = "http://127.0.0.1:8000/api/products/";

  // Compiles product array into unique selection tiers
  const parseInventoryData = (rawData) => {
    setAllProducts(rawData);
    const uniqueCategories = [...new Set(rawData.map((item) => item.category))];

    const categoryOptions = uniqueCategories.map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    }));

    setCategories(categoryOptions);
  };

  // Initial load: Fetch directly from Django inventory endpoint
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        parseInventoryData(response.data);
      })
      .catch((err) => {
        console.error(
          "Critical: Unable to communicate with Django API server.",
          err,
        );
      });
  }, []);

  // Cascading Dropdown Tracker: Category -> Subcategory
  useEffect(() => {
    if (!category) {
      setProductTypes([]);
      setProductType("");
      return;
    }

    const filteredItems = allProducts.filter(
      (item) => item.category === category,
    );
    const uniqueSubcats = [
      ...new Set(filteredItems.map((item) => item.subcategory)),
    ];

    const typeOptions = uniqueSubcats.map((sub) => ({
      value: sub,
      label: sub.charAt(0).toUpperCase() + sub.slice(1),
    }));

    setProductTypes(typeOptions);
    setProductType("");
    setProductNames([]);
    setProductName("");
  }, [category, allProducts]);

  // Cascading Dropdown Tracker: Subcategory -> Product Name
  useEffect(() => {
    if (!productType) {
      setProductNames([]);
      setProductName("");
      return;
    }

    const filteredItems = allProducts.filter(
      (item) => item.category === category && item.subcategory === productType,
    );

    const nameOptions = filteredItems.map((item) => ({
      value: item.name,
      label: item.name,
    }));

    setProductNames(nameOptions);
    setProductName("");
  }, [productType, category, allProducts]);

  // Live Query Dispatch System
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim()) return;

    setIsLoading(true);
    setPredictionData(null);
    setIsUnavailable(false);

    const API_URL_POST = "http://127.0.0.1:8000/api/analytics/";
    console.log(productName);
    axios
      .post(API_URL_POST, {
        name: productName,
        price: price,
      })
      .then((response) => {
        // Validation check for empty query response profiles
        if (
          response.data &&
          response.data.reviews &&
          response.data.reviews.length > 0
        ) {
          setPredictionData(response.data);
        } else {
          setIsUnavailable(true);
        }
      })
      .catch((error) => {
        console.error("Pipeline failure on analysis worker dispatch:", error);
        setIsUnavailable(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-gray-100 font-sans antialiased p-4 md:p-6 lg:p-8 selection:bg-blue-500/30 selection:text-blue-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Configurator Card Frame */}
        <div className="lg:col-span-4 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80" />

          <div className="w-full flex flex-col gap-6">
            <header className="flex items-center gap-3 border-b border-gray-800/60 pb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
                <i className="ri-box-3-line text-xl"></i>
              </div>
              <div>
                <h3 className="fun-font text-lg font-bold text-white tracking-wide capitalize">
                  Configurator
                </h3>
                <p className="text-xs text-gray-400 font-medium tracking-tight">
                  Tune variables to run the engine
                </p>
              </div>
            </header>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5"
            >
              <div className="w-[96%] grid grid-cols-1 gap-3.5 sm:gap-4 max-w-full overflow-hidden">
                <SelectBox
                  required
                  label="Category"
                  options={categories}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <SelectBox
                  label="Product Type"
                  options={productTypes}
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  disabled={!category}
                />
                <SelectBox
                  label="Product Name"
                  options={productNames}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  disabled={!productType}
                />
              </div>

              <div className="mt-2 bg-[#1a1f26] border border-gray-800/40 p-4 rounded-2xl shadow-inner">
                <PriceSlider
                  min={500}
                  max={150000}
                  step={50}
                  value={price}
                  onChange={setPrice}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || !productName}
                className={`w-full pop-font font-semibold text-sm py-3.5 px-4 rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97] mt-4 flex items-center justify-center gap-2 tracking-wide
                  ${isLoading || !productName ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                <span>
                  {isLoading ? "Processing Analysis..." : "Predict Best E-Shop"}
                </span>
                <i
                  className={
                    isLoading
                      ? "ri-loader-4-line animate-spin text-base"
                      : "ri-arrow-right-line text-base"
                  }
                ></i>
              </button>
            </form>
          </div>
        </div>

        {/* Analytics Display Panel */}
        <div className="lg:col-span-8 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl shadow-2xl p-6 relative overflow-hidden backdrop-blur-md min-h-[560px] flex flex-col justify-between">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <header className="flex items-center justify-between border-b border-gray-800/60 pb-4 mb-6 w-full">
            <div className="flex items-center gap-3">
              <div
                className={`h-2.5 w-2.5 rounded-full ${predictionData ? "bg-emerald-500" : isUnavailable ? "bg-rose-500" : isLoading ? "bg-amber-500 animate-ping" : "bg-gray-600"}`}
              />
              <h4 className="text-sm font-bold tracking-wider uppercase text-gray-400 block-font">
                Analytical Monitor
              </h4>
            </div>
            <span className="text-[10px] bg-gray-800 border border-gray-700/50 text-gray-300 font-mono px-2 py-0.5 rounded-md uppercase tracking-tight">
              {predictionData
                ? "Data Stream Link Active"
                : isUnavailable
                  ? "Data Nullified"
                  : "Standby Array"}
            </span>
          </header>

          <div className="w-full flex-grow flex items-center justify-center relative z-10 overflow-hidden rounded-xl bg-[#0d0f12]/40 border border-gray-900/50 p-2 md:p-4">
            {/* Loading Display */}
            {isLoading && (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 animate-fade-in">
                <div className="relative flex items-center justify-center h-20 w-20">
                  <div className="absolute p-8 bg-blue-500/10 border-2 border-blue-500/40 rounded-full animate-ping opacity-70" />
                  <div className="absolute p-5 bg-indigo-500/20 border border-indigo-400/30 rounded-full animate-pulse" />
                  <i className="ri-radar-line text-3xl text-blue-400 animate-spin"></i>
                </div>
                <div className="space-y-1">
                  <h5 className="text-white font-mono text-sm tracking-widest uppercase font-bold animate-pulse">
                    Running Prediction Core
                  </h5>
                  <p className="text-xs text-gray-500 max-w-xs">
                    Querying data frames, validating review arrays, and mapping
                    metrics...
                  </p>
                </div>
              </div>
            )}

            {/* Zero Review/Missing Data Filter Exception */}
            {!isLoading && isUnavailable && (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-16 max-w-sm mx-auto">
                <div className="h-20 w-20 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 shadow-lg text-4xl animate-bounce">
                  👻
                </div>
                <div className="space-y-2">
                  <h5 className="text-amber-400 font-sans font-black text-lg tracking-wide uppercase">
                    404: Ghost Town Detected
                  </h5>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono">
                    Our AI engines combed through the deep web, but
                    <span className="text-white font-bold block my-1">
                      "{productName}"
                    </span>
                    has exactly zero reviews. It's either so cutting edge that
                    nobody owns it yet, or it is hiding from us!
                  </p>
                </div>
              </div>
            )}

            {/* Standby View */}
            {!isLoading && !predictionData && !isUnavailable && (
              <div className="flex flex-col items-center justify-center text-center space-y-5 py-20 opacity-80">
                <div className="h-16 w-16 bg-gray-800/40 border border-gray-700/40 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner">
                  <i className="ri-terminal-window-line text-3xl"></i>
                </div>
                <div className="space-y-1.5">
                  <h5 className="text-gray-300 font-sans font-bold text-base tracking-wide">
                    Awaiting Engine Parameters
                  </h5>
                  <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                    Select a target category, item type, and target name in the
                    configurator panel, then run prediction to generate visual
                    charts.
                  </p>
                </div>
              </div>
            )}

            {/* Main Active Evaluation Rendering Frame */}
            {!isLoading && predictionData && !isUnavailable && (
              <div className="w-full animate-fade-in">
                <DashboardCharts apiData={predictionData} />
              </div>
            )}
          </div>
        </div>

        {/* Testimonial Feed Card Layout Component */}
        <div className="col-span-1 lg:col-span-12 mt-4">
          <ReviewCard apiData={predictionData} />
        </div>
      </div>
    </div>
  );
};

export default Services;
