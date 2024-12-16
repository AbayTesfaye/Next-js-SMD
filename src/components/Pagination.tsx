const Pagination = () => {
    return (
      <div className="p-4 flex justify-between items-center text-gray-500">
        {/* Previous Button */}
        <button disabled className="bg-slate-200 text-xs font-semibold rounded-md px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        
        {/* Pagination Numbers */}
        <div className="flex items-center text-sm gap-2">
          <button className="px-2 rounded-sm bg-schoolSky">1</button>
          <button className="px-2 rounded-sm">2</button>
          <button className="px-2 rounded-sm">3</button>
          ...
          <button className="px-2 rounded-sm bg-schoolSky">10</button>
        </div>
        
        {/* Next Button */}
        <button className="bg-slate-200 text-xs font-semibold rounded-md px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
      </div>
    );
  };
  
  export default Pagination;
  