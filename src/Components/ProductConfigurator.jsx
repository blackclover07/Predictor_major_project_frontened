import React from "react";
import SelectBox from "../Components/SelectBox";
import PriceSlider from "../Components/PriceSlider";

const ProductConfigurator = ({
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

  onSubmit,
  isLoading,
}) => {
  return (
    <div className="lg:col-span-4 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-80" />

      <div className="flex flex-col gap-6">
        <header className="flex items-center gap-3 border-b border-gray-800/60 pb-4">
          <div className="h-10 w-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <i className="ri-box-3-line text-xl"></i>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Configurator</h3>
            <p className="text-xs text-gray-400">
              Select product for prediction
            </p>
          </div>
        </header>

        {/* FORM */}
        <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-4 w-full">
            <SelectBox
              label="Category"
              options={categories}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
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

          <PriceSlider
            min={500}
            max={150000}
            step={50}
            value={price}
            onChange={setPrice}
          />

          <button
            type="submit"
            disabled={isLoading || !productName}
            className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-50"
          >
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductConfigurator;
