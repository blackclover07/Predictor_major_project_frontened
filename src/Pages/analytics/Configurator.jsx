import React from "react";
import SelectBox from "../../Components/SelectBox";
import PriceSlider from "../../Components/PriceSlider";

const Configurator = ({
  categories,
  productTypes,
  productNames,
  category,
  productType,
  productName,
  price,
  setCategory,
  setProductType,
  setProductName,
  setPrice,
  handleSubmit,
  isLoading,
}) => {
  return (
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

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
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
  );
};

export default Configurator;
