import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuperAdminDashboard = () => {
  // Mock Data for Connected E-Commerce Platforms
  const connectedPlatforms = [
    { id: 1, name: "Amazon Global", type: "API integration", productsSynced: 41200, status: "Active", health: 98 },
    { id: 2, name: "Shopify Storefront", type: "Webhook sync", productsSynced: 12450, status: "Active", health: 100 },
    { id: 3, name: "WooCommerce Engine", type: "Legacy REST", productsSynced: 3100, status: "Degraded", health: 74 },
    { id: 4, name: "eBay Marketplace", type: "GraphQL gateway", productsSynced: 8900, status: "Maintenance", health: 91 },
  ];

  // Mock Data for Global Product Inventory
  const globalProducts = [
    { sku: "PROD-NEO-841X", name: "Quantum Pro Graphics Card", category: "Electronics", price: "$1,499.00", stock: 142, platformCount: 3 },
    { sku: "PROD-AURA-109B", name: "Aura Noise-Canceling Headphones", category: "Audio", price: "$299.50", stock: 850, platformCount: 4 },
    { sku: "PROD-CHRON-02", name: "Chronos Titanium Smartwatch", category: "Wearables", price: "$450.00", stock: 21, platformCount: 2 },
    { sku: "PROD-VORT-992M", name: "Vortex Ergonomic Desk Chair", category: "Office", price: "$680.00", stock: 0, platformCount: 1 },
  ];

  // Animation Variant Configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen w-full bg-[#090b0e] text-gray-100 font-sans antialiased flex selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* ================= 2. MAIN WORKING INTERFACE AREA ================= */}
      <main className="flex-grow min-w-0 p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
        
        {/* Dynamic Context Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-900 pb-5 w-full">
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white tracking-wide">Enterprise Command Matrix</h1>
            <p className="text-xs text-gray-400 font-medium mt-0.5">Global management across node engines, product logs, and e-shops.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#12161c] border border-gray-800 hover:border-gray-700 active:scale-95 transition-all rounded-xl text-xs font-semibold tracking-wide flex items-center gap-2 cursor-pointer">
              <i className="ri-refresh-line"></i> Re-Sync Core
            </button>
            <Link to="addAdmin" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_15px_rgba(37,99,235,0.2)] text-white active:scale-95 transition-all rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 cursor-pointer">
              <i className="ri-add-line text-sm"></i> Register New Node
            </Link>
            
          </div>
        </header>

        {/* Telemetry Numeric Statistics Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[
            { label: "Aggregate Synced SKU Items", val: "65,650", sub: "+12.4% scaling", icon: "ri-barcode-box-line", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
            { label: "Active Connected Registries", val: "14 Platforms", sub: "100% gateway up-time", icon: "ri-global-line", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
            { label: "Processed Predictions", val: "142,804", sub: "Avg latency 22ms", icon: "ri-cpu-line", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
            { label: "System Gateway Integrity", val: "99.98%", sub: "Zero dropped sync hooks", icon: "ri-heart-pulse-line", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" }
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-[#0f1216] border border-gray-800/60 rounded-2xl p-5 shadow-xl flex items-center justify-between group relative overflow-hidden">
              <div className="space-y-1 z-10">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">{stat.label}</span>
                <h3 className="text-2xl font-black text-white tracking-tight">{stat.val}</h3>
                <span className="text-[10px] text-gray-400 font-medium block tracking-tight">{stat.sub}</span>
              </div>
              <div className={`h-11 w-11 rounded-xl border flex items-center justify-center ${stat.color} z-10 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} text-lg`}></i>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workspace Central Core Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full">
          
          {/* SECTION A: ALL LISTING E-COMMERCE ENGINE REGISTRY (Spans 5 Columns) */}
          <div className="lg:col-span-5 bg-[#0f1216] border border-gray-800/60 rounded-3xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[460px] flex flex-col justify-between">
            <div className="w-full">
              <header className="flex items-center justify-between border-b border-gray-800/50 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 block-font">E-Commerce Networks</h3>
                </div>
                <span className="text-[9px] bg-gray-800 border border-gray-700/40 text-gray-400 px-2 py-0.5 rounded font-mono tracking-wide">Registry Array</span>
              </header>

              <div className="space-y-2.5 max-h-[340px] overflow-y-auto pr-1">
                {connectedPlatforms.map((shop) => (
                  <div key={shop.id} className="bg-[#090b0e]/60 border border-gray-800/60 rounded-xl p-3.5 flex items-center justify-between hover:border-gray-700/80 transition-all duration-200 group cursor-pointer">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-9 w-9 bg-[#12161c] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors">
                        <i className="ri-store-2-line text-base"></i>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white tracking-wide truncate">{shop.name}</h4>
                        <span className="text-[10px] text-gray-500 font-medium block font-mono tracking-tight">{shop.type}</span>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className="text-xs font-bold text-gray-200 font-mono">{(shop.productsSynced / 1000).toFixed(1)}k SKUs</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono font-medium text-gray-500">H: {shop.health}%</span>
                        <span className={`text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${
                          shop.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                          shop.status === 'Maintenance' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                          'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {shop.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION B: GLOBAL PRODUCT LISTS MATRIX (Spans 7 Columns) */}
          <div className="lg:col-span-7 bg-[#0f1216] border border-gray-800/60 rounded-3xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[460px] flex flex-col justify-between">
            <div className="w-full">
              <header className="flex items-center justify-between border-b border-gray-800/50 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)] animate-pulse" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 block-font">Master Catalog Monitoring</h3>
                </div>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="Search sku/name..." className="bg-[#090b0e] border border-gray-800 px-2.5 py-1 text-[11px] rounded-lg text-gray-300 placeholder-gray-600 outline-none focus:border-blue-500/40 w-36 sm:w-44 transition-all" />
                </div>
              </header>

              {/* Data Table Matrix Container */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-900 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      <th className="pb-3 pl-1">Product Identity</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Mkt Price</th>
                      <th className="pb-3 text-center">Channels</th>
                      <th className="pb-3 text-right pr-1">Stock Vol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900 text-xs">
                    {globalProducts.map((prod, idx) => (
                      <tr key={idx} className="group hover:bg-[#12161c]/30 transition-colors">
                        <td className="py-3 pl-1 max-w-[200px]">
                          <div className="truncate font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">{prod.name}</div>
                          <span className="text-[10px] font-mono text-gray-500 block mt-0.5 tracking-tight">{prod.sku}</span>
                        </td>
                        <td className="py-3 text-gray-400 font-medium">{prod.category}</td>
                        <td className="py-3 font-mono font-bold text-gray-200">{prod.price}</td>
                        <td className="py-3 text-center">
                          <span className="text-[10px] bg-gray-800 text-gray-300 border border-gray-700/50 px-1.5 py-0.5 rounded font-mono font-semibold">
                            {prod.platformCount} networks
                          </span>
                        </td>
                        <td className="py-3 text-right pr-1 font-mono">
                          {prod.stock > 0 ? (
                            <span className="text-emerald-400 font-bold">{prod.stock}</span>
                          ) : (
                            <span className="text-red-400 font-bold bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded text-[10px] tracking-wide uppercase">Out</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SuperAdminDashboard;