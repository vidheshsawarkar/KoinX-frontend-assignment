import React from "react";
import { PieChart, Pie, Legend, Sector, Cell, ResponsiveContainer } from "recharts";

export function DountChart(){

    const data = [
        { name: 'Tea', value: 1000 },
        { name: 'Coffee', value: 400 },
    ];
 
    const COLORS = ["#0082FF", "#FAA002"];

	return (
        <div className="flex items-center">
            <div class="row d-flex justify-content-center text-center">
                <div className="col-md-8">
                    <ResponsiveContainer width={300} height={300} className="text-center">
                        <PieChart width={400} height={400}>
                            {/* <Legend layout="vertical" verticalAlign="top" align="top"  /> */}
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                innerRadius={65}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 bg-[#0082FF] rounded-full h-min"></div>
                    <h1 className="text-nowrap">Crowdsale investors: 80%</h1>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#FAA002] rounded-full h-min"></div>
                    <h1>Foundation: 20%</h1>
                </div>
            </div>
        </div>
	);
};
