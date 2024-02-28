import { useState } from "react";

function sales() {
    const salesData = [
        { day: 1, sales: 10 },
        { day: 2, sales: 15 },
        { day: 3, sales: 20 },
        // Add more sales data for each day
      ];
    
      // Calculate the maximum sales to determine the height of the bars
      const maxSales = Math.max(...salesData.map((data) => data.sales));
    
  return (
    <div className="pl-[280px] md-10">
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Monthly Sales</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {salesData.map((data) => (
        <div key={data.day} className="bg-white rounded-lg shadow-md">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Day {data.day}</h2>
            <div className="bg-gray-200 h-24 mb-4 rounded-lg overflow-hidden relative">
              <div
                className="bg-blue-500 absolute bottom-0 left-0"
                style={{ width: `${(data.sales / maxSales) * 100}%`, height: "100%" }}
              ></div>
            </div>
            <p className="text-gray-700">{data.sales} rentals</p>
          </div>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default sales