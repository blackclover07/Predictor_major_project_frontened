import React from 'react'

const DashboardAside = () => {
  return (
    <>
        <aside className="hidden xl:flex flex-col justify-between w-64 h-screen sticky top-0 bg-[#0f1216] border-r border-gray-800/60 p-6 z-20">
        <div className="space-y-8">

          <div className="flex items-center gap-3 px-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <i className="ri-shield-user-line text-lg"></i>
            </div>
            <div>
              <h2 className="font-bold tracking-wide text-sm text-white uppercase">Predictor</h2>
              <p className="text-[10px] font-mono text-blue-400 tracking-wider font-semibold uppercase">Super Admin</p>
            </div>
          </div>


          <nav className="space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 mb-2">Systems</p>
            <a href="/adminDashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 text-sm font-medium transition-all">
              <i className="ri-dashboard-3-line text-lg"></i> Dashboard
            </a>
            <a href="#shops" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group">
              <i className="ri-global-line text-lg group-hover:text-blue-400"></i> E-Com Registries
            </a>
            <a href="#inventory" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group">
              <i className="ri-archive-stack-line text-lg group-hover:text-blue-400"></i> Master Inventory
            </a>
            
          </nav>
        </div>

        {/* Admin Profile Segment */}
        <div className="flex items-center gap-3 border-t border-gray-800/60 pt-4 px-2">
          <div className="h-10 w-10 rounded-xl bg-gray-800 border border-gray-700/50 overflow-hidden flex items-center justify-center text-gray-300 font-bold font-mono">
            AD
          </div>
          <div className="truncate">
            <h4 className="text-xs font-bold text-white tracking-wide truncate">Admin Director</h4>
            <p className="text-[10px] text-gray-500 font-medium truncate">root@nexuscore.io</p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default DashboardAside