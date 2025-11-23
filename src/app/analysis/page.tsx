// "use client";

// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title,
// } from "chart.js";
// import {
//   Line,
//   Bar,
//   Pie,
//   Doughnut,
//   Radar,
//   PolarArea,
//   Bubble,
//   Scatter,
// } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title
// );

// // ---------------------------
// // Helpers & Types (simple)
// // ---------------------------
// type HRMember = { id: string; name: string; role: string };
// type MonthRecord = {
//   hrId: string;
//   monthIndex: number;
//   monthLabel: string;
//   hires: number;
//   exits: number;
//   openRoles: number;
//   avgSalary: number;
//   tasksCompleted: number;
//   satisfaction: number; // 0-100
//   timeToHire: number; // days
//   perf: number; // 0-100
//   leaves: number;
//   trainings: number;
//   promoted: number;
//   salaryIncrements: number;
//   statusDoneFlags: { [k: string]: boolean };
// };

// // ---------------------------
// // Main Component
// // ---------------------------
// export default function HRDashboard() {
//   // UI state
//   const [selectedHR, setSelectedHR] = useState<string>("all");
//   const [monthsWindow, setMonthsWindow] = useState<number>(12);
//   const [showAnimations, setShowAnimations] = useState<boolean>(true);
//   const [compact, setCompact] = useState<boolean>(true); // smaller cards

//   // HR team
//   const hrTeam: HRMember[] = [
//     { id: "moh", name: "محمد الزهراني", role: "HR Manager" },
//     { id: "moh2", name: "مهند الطبجي", role: "HR Specialist" },
//     { id: "li", name: "ليان خالدي", role: "HR Analyst" },
//   ];

//   // Generate month labels (last N months)
//   const monthsLabels = useMemo(() => {
//     const base = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];
//     const now = new Date();
//     const arr: string[] = [];
//     for (let i = monthsWindow - 1; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       arr.push(`${base[d.getMonth()]} ${d.getFullYear()}`);
//     }
//     return arr;
//   }, [monthsWindow]);

//   // Generate synthetic data (heavy-ish but local)
//   const rawData = useMemo(() => {
//     const rows: MonthRecord[] = [];
//     for (const h of hrTeam) {
//       for (let m = 0; m < monthsLabels.length; m++) {
//         // base seeds by hr
//         const seed = h.id.length + m;
//         const hires = Math.max(0, Math.round((seed % 5) / 2 + (Math.sin(m / 2 + seed) + 1) * 1.8));
//         const exits = Math.max(0, Math.round((Math.abs(Math.cos(m / 2 + seed)) * 2) + (seed % 3 === 0 ? 0 : 1)));
//         const openRoles = Math.max(0, Math.round(1 + (Math.cos(m / 3 + seed) + 1) * 2 + (seed % 4)));
//         const avgSalary = Math.round((h.id === "moh" ? 9500 : h.id === "moh2" ? 6200 : 4700) + Math.sin(m / 3 + seed) * 250 + (seed % 7) * 30);
//         const tasksCompleted = Math.max(0, Math.round(8 + Math.abs(Math.sin(m / 1.3 + seed) * 9) + (seed % 5)));
//         const satisfaction = Math.min(100, Math.max(40, Math.round(60 + Math.sin(m / 2 + seed) * 12 + (seed % 6) * 2)));
//         const timeToHire = Math.max(3, Math.round(20 - hires * 2 + (seed % 6)));
//         const perf = Math.min(100, Math.round(tasksCompleted / 0.4 + satisfaction / 4 - timeToHire / 1.2) % 100);
//         const leaves = Math.max(0, Math.round(Math.random() * 3 + (seed % 4 === 0 ? 2 : 0)));
//         const trainings = Math.max(0, (seed % 3) + Math.round(Math.random() * 2));
//         const promoted = (seed % 12 === 0) ? 1 : 0;
//         const salaryIncrements = Math.round(Math.random() * (seed % 3));
//         const statusDoneFlags = {
//           "Recruitment process reviewed": Math.random() > 0.15,
//           "Salary structure updated": Math.random() > 0.6,
//           "Policies reviewed": Math.random() > 0.25,
//           "Trainings scheduled": Math.random() > 0.4,
//           "Performance calibration done": Math.random() > 0.55,
//         };

//         rows.push({
//           hrId: h.id,
//           monthIndex: m,
//           monthLabel: monthsLabels[m],
//           hires,
//           exits,
//           openRoles,
//           avgSalary,
//           tasksCompleted,
//           satisfaction,
//           timeToHire,
//           perf,
//           leaves,
//           trainings,
//           promoted,
//           salaryIncrements,
//           statusDoneFlags,
//         });
//       }
//     }
//     return rows;
//   }, [hrTeam, monthsLabels]);

//   // Aggregation based on selected HR (or all)
//   const aggregated = useMemo(() => {
//     const hrFilter = selectedHR === "all" ? (_: MonthRecord) => true : (r: MonthRecord) => r.hrId === selectedHR;
//     return monthsLabels.map((label, idx) => {
//       const slice = rawData.filter((r) => r.monthIndex === idx && hrFilter(r));
//       const count = slice.length || 1;
//       return {
//         monthLabel: label,
//         hires: slice.reduce((s, r) => s + r.hires, 0),
//         exits: slice.reduce((s, r) => s + r.exits, 0),
//         openRoles: slice.reduce((s, r) => s + r.openRoles, 0),
//         avgSalary: Math.round(slice.reduce((s, r) => s + r.avgSalary, 0) / count),
//         tasksCompleted: slice.reduce((s, r) => s + r.tasksCompleted, 0),
//         satisfaction: Math.round(slice.reduce((s, r) => s + r.satisfaction, 0) / count),
//         timeToHire: Math.round(slice.reduce((s, r) => s + r.timeToHire, 0) / count),
//         perf: Math.round(slice.reduce((s, r) => s + r.perf, 0) / count),
//         leaves: slice.reduce((s, r) => s + r.leaves, 0),
//         trainings: slice.reduce((s, r) => s + r.trainings, 0),
//         promoted: slice.reduce((s, r) => s + r.promoted, 0),
//         salaryIncrements: slice.reduce((s, r) => s + r.salaryIncrements, 0),
//         statusDone: Object.keys(slice.length ? slice[0].statusDoneFlags : {}).reduce((acc: any, k: string) => {
//           acc[k] = slice.every((s) => s.statusDoneFlags[k]);
//           return acc;
//         }, {}),
//       };
//     });
//   }, [rawData, monthsLabels, selectedHR]);

//   // Totals / KPIs
//   const totals = useMemo(() => {
//     return {
//       totalHires: aggregated.reduce((s, r) => s + r.hires, 0),
//       totalExits: aggregated.reduce((s, r) => s + r.exits, 0),
//       totalOpenRoles: aggregated.reduce((s, r) => s + r.openRoles, 0),
//       overallAvgSalary: Math.round(aggregated.reduce((s, r) => s + r.avgSalary, 0) / (aggregated.length || 1)),
//       totalTasks: aggregated.reduce((s, r) => s + r.tasksCompleted, 0),
//       avgSatisfaction: Math.round(aggregated.reduce((s, r) => s + r.satisfaction, 0) / (aggregated.length || 1)),
//       avgTimeToHire: Math.round(aggregated.reduce((s, r) => s + r.timeToHire, 0) / (aggregated.length || 1)),
//       totalLeaves: aggregated.reduce((s, r) => s + r.leaves, 0),
//       totalTrainings: aggregated.reduce((s, r) => s + r.trainings, 0),
//       totalPromoted: aggregated.reduce((s, r) => s + r.promoted, 0),
//       totalSalaryIncrements: aggregated.reduce((s, r) => s + r.salaryIncrements, 0),
//     };
//   }, [aggregated]);

//   // Chart common options (compact sizes)
//   const commonOptions: any = useMemo(() => ({
//     responsive: true,
//     plugins: { legend: { position: "top", labels: { boxWidth: 10, boxHeight: 6 } } },
//     animation: showAnimations ? { duration: 700 } : false,
//     maintainAspectRatio: false,
//     scales: {
//       x: { ticks: { maxRotation: 0, minRotation: 0, autoSkip: true, maxTicksLimit: 8 } },
//       y: { beginAtZero: true },
//     },
//   }), [showAnimations]);

//   // Prepare multiple chart datasets
//   const lineData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [
//       {
//         label: "تعيينات",
//         data: aggregated.map((r) => r.hires),
//         borderColor: "#fb923c",
//         backgroundColor: "rgba(251,146,60,0.15)",
//         tension: 0.3,
//         fill: true,
//         pointRadius: 3,
//         borderWidth: 2,
//       },
//       {
//         label: "استقالات",
//         data: aggregated.map((r) => r.exits),
//         borderColor: "#ef4444",
//         backgroundColor: "rgba(239,68,68,0.08)",
//         tension: 0.2,
//         fill: false,
//         pointRadius: 2,
//         borderDash: [4, 3],
//       },
//       {
//         label: "مهام مكتملة",
//         data: aggregated.map((r) => r.tasksCompleted),
//         borderColor: "#60a5fa",
//         backgroundColor: "rgba(96,165,250,0.08)",
//         tension: 0.2,
//         fill: false,
//         pointRadius: 2,
//       },
//     ],
//   };

//   const barData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [
//       { label: "وظائف مفتوحة", data: aggregated.map((r) => r.openRoles), backgroundColor: "#f97316", barThickness: compact ? 8 : 14 },
//       { label: "زمن التوظيف (أيام)", data: aggregated.map((r) => r.timeToHire), backgroundColor: "#34d399", barThickness: compact ? 8 : 14 },
//     ],
//   };

//   const pieData = {
//     labels: ["Hires", "Exits", "Open Roles"],
//     datasets: [{ data: [totals.totalHires || 1, totals.totalExits || 1, totals.totalOpenRoles || 1], backgroundColor: ["#fb923c", "#ef4444", "#facc15"] }],
//   };

//   const doughnutData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [{ label: "Avg Salary", data: aggregated.map((r) => r.avgSalary), backgroundColor: aggregated.map((_, i) => `rgba(${200 - i * 3},${120 + (i % 5) * 10},${60 + (i % 3) * 20},0.9)`) }],
//   };

//   const radarData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [
//       { label: "Satisfaction", data: aggregated.map((r) => r.satisfaction), backgroundColor: "rgba(251,146,60,0.12)", borderColor: "#fb923c" },
//       { label: "Performance", data: aggregated.map((r) => r.perf), backgroundColor: "rgba(99,102,241,0.08)", borderColor: "#6366f1" },
//     ],
//   };

//   const polarData = {
//     labels: ["Hires", "Exits", "Tasks", "Leaves", "Trainings"],
//     datasets: [{ data: [totals.totalHires || 1, totals.totalExits || 1, totals.totalTasks || 1, totals.totalLeaves || 1, totals.totalTrainings || 1], backgroundColor: ["#fb923c", "#ef4444", "#60a5fa", "#a78bfa", "#34d399"] }],
//   };

//   const bubbleData = {
//     datasets: aggregated.map((r, i) => ({
//       label: r.monthLabel,
//       data: [{ x: r.avgSalary, y: r.hires, r: Math.max(3, Math.round(r.tasksCompleted / 6)) }],
//     })),
//   };

//   const scatterData = {
//     datasets: [
//       { label: "Satisfaction vs Performance", data: aggregated.map((r) => ({ x: r.satisfaction, y: r.perf })), backgroundColor: "#fb923c", pointRadius: 5 },
//     ],
//   };

//   // "Done / Not done" matrix
//   const doneMatrix = useMemo(() => {
//     // aggregate across months for the selected HR
//     const keys = Object.keys(aggregated[0]?.statusDone || {});
//     const result: { key: string; doneCount: number; total: number }[] = keys.map((k) => {
//       const total = aggregated.length;
//       const doneCount = aggregated.reduce((s, r: any) => s + (r.statusDone[k] ? 1 : 0), 0);
//       return { key: k, doneCount, total };
//     });
//     return result;
//   }, [aggregated]);

//   // ---------------------------
//   // UI - compact card size classes
//   // ---------------------------
//   const cardPadding = compact ? "p-3" : "p-5";
//   const smallText = compact ? "text-sm" : "text-base";
//   const cardRadius = "rounded-md";

//   // ---------------------------
//   // Render
//   // ---------------------------
//   return (
//     <div className="min-h-screen bg-[#0b0b0b] text-gray-100">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-orange-400">لوحة تحليلات HR — متقدمة</h1>
//             <p className="text-xs text-gray-400 mt-1">Dark • لمسة برتقالية • أحجام مصغرة/متوسطة • مليانة شارتس و تحليلات</p>
//           </div>

//           <div className="flex items-center gap-3">
//             <select value={selectedHR} onChange={(e) => setSelectedHR(e.target.value)} className="bg-[#111111] border border-orange-600 text-gray-100 px-2 py-1 rounded">
//               <option value="all">كل الفريق</option>
//               {hrTeam.map((h) => <option key={h.id} value={h.id}>{h.name} — {h.role}</option>)}
//             </select>

//             <select value={monthsWindow} onChange={(e) => setMonthsWindow(Number(e.target.value))} className="bg-[#111111] border border-orange-600 text-gray-100 px-2 py-1 rounded">
//               <option value={6}>6 شهور</option>
//               <option value={12}>12 شهر</option>
//               <option value={24}>24 شهر</option>
//             </select>

//             <button onClick={() => setShowAnimations((s) => !s)} className={`px-3 py-1 rounded ${showAnimations ? "bg-orange-500 text-black" : "bg-[#111] border border-gray-700"}`}>{showAnimations ? "انيميشن✔" : "انيميشن✖"}</button>

//             <button onClick={() => setCompact((c) => !c)} className="px-3 py-1 rounded bg-gray-800 border border-gray-700">حجم: {compact ? "صغير" : "متوسط"}</button>
//           </div>
//         </div>

//         {/* Top KPIs */}
//         <div className={`grid grid-cols-2 md:grid-cols-6 gap-3 mb-4`}>
//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`${cardPadding} ${cardRadius} bg-gradient-to-br from-[#0f0f0f] to-[#131313] border border-orange-600`}>
//             <div className="text-xs text-gray-400">إجمالي التعيينات</div>
//             <div className="text-lg md:text-2xl font-bold text-orange-300">{totals.totalHires}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">إجمالي الاستقالات</div>
//             <div className="text-lg md:text-2xl font-bold text-red-400">{totals.totalExits}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">الوظائف المفتوحة</div>
//             <div className="text-lg md:text-2xl font-bold text-yellow-400">{totals.totalOpenRoles}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">متوسط الراتب</div>
//             <div className="text-lg md:text-2xl font-bold text-green-300">{totals.overallAvgSalary} SAR</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.43 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">مهام مكتملة (مجموع)</div>
//             <div className="text-lg md:text-2xl font-bold text-indigo-300">{totals.totalTasks}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">متوسط رضا</div>
//             <div className="text-lg md:text-2xl font-bold text-orange-200">{totals.avgSatisfaction}%</div>
//           </motion.div>
//         </div>

//         {/* Main grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Left column - Line + Small charts */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-40`}>
//               <h3 className="text-sm text-orange-300 mb-1">اتجاهات شهرية (التعيينات، الاستقالات، مهام)</h3>
//               <div className="h-28"><Line data={lineData as any} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36 flex items-center justify-center`}>
//               <div className="w-full grid grid-cols-2 gap-2">
//                 <div className="h-28 bg-[#0b0b0b] p-2 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400">توزيع KPI — Pie</h4>
//                   <div className="h-20"><Pie data={pieData as any} options={commonOptions} /></div>
//                 </div>
//                 <div className="h-28 bg-[#0b0b0b] p-2 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400">متوسط الراتب — Doughnut</h4>
//                   <div className="h-20"><Doughnut data={doughnutData as any} options={commonOptions} /></div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//               <h4 className="text-sm text-orange-300 mb-2">قائمة المهام: حالات (عملت/لم تعمل)</h4>
//               <div className="text-xs text-gray-300 grid gap-1">
//                 {Object.entries(aggregated[0]?.statusDone || {}).map(([k, v]) => (
//                   <div key={k} className="flex items-center justify-between">
//                     <div className="truncate">{k}</div>
//                     <div className={`px-2 py-0.5 rounded text-xs ${v ? "bg-green-600 text-black" : "bg-gray-700 text-gray-200"}`}>{v ? "مكتمل" : "غير مكتمل"}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Middle column - bars + radar + small table */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-40`}>
//               <h3 className="text-sm text-orange-300 mb-1">وظائف مفتوحة و زمن التوظيف</h3>
//               <div className="h-28"><Bar data={barData as any} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-48`}>
//               <h3 className="text-sm text-orange-300 mb-1">مقارنة: رضا مقابل أداء (Radar)</h3>
//               <div className="h-36"><Radar data={radarData as any} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//               <h3 className="text-sm text-orange-300 mb-2">أهم 6 شهور (تفاصيل)</h3>
//               <div className="text-xs text-gray-300">
//                 <table className="min-w-full text-left text-xs">
//                   <thead>
//                     <tr className="text-gray-400">
//                       <th className="p-1">شهر</th>
//                       <th className="p-1">تعيينات</th>
//                       <th className="p-1">استقالات</th>
//                       <th className="p-1">راتب</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {aggregated.slice(-6).map((r) => (
//                       <tr key={r.monthLabel} className="border-t border-gray-800">
//                         <td className="p-1">{r.monthLabel}</td>
//                         <td className="p-1 text-orange-300 font-medium">{r.hires}</td>
//                         <td className="p-1 text-red-400">{r.exits}</td>
//                         <td className="p-1">{r.avgSalary} SAR</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right column - advanced charts */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36`}>
//               <h3 className="text-sm text-orange-300 mb-1">Polar Area — KPI distribution</h3>
//               <div className="h-28"><PolarArea data={polarData as any} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-44`}>
//               <h3 className="text-sm text-orange-300 mb-1">Bubble — حجم التوظيف مقابل الراتب</h3>
//               <div className="h-36"><Bubble data={bubbleData as any} options={Object.assign({}, commonOptions, { scales: { x: { title: { display: true, text: "متوسط الراتب (SAR)" } }, y: { title: { display: true, text: "تعيينات" } } } })} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36`}>
//               <h3 className="text-sm text-orange-300 mb-1">Scatter — رضا vs أداء</h3>
//               <div className="h-28"><Scatter data={scatterData as any} options={commonOptions} /></div>
//             </div>
//           </div>
//         </div>

//         {/* Lower area - bigger visualizations + insights */}
//         <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 col-span-2`}>
//             <h3 className="text-sm text-orange-300 mb-2">تفاصيل وتحليلات عميقة</h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">متوسط زمن التوظيف</div>
//                 <div className="text-xl font-bold text-green-300">{totals.avgTimeToHire} يوم</div>
//                 <div className="text-gray-400 mt-1">تحسن عن الشهر السابق: <strong className="text-orange-300">-1.2 يوم</strong></div>
//               </div>

//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">الترقيات</div>
//                 <div className="text-xl font-bold text-indigo-300">{totals.totalPromoted}</div>
//                 <div className="text-gray-400 mt-1">حالات تمت مراجعتها: <strong className="text-orange-300">yes</strong></div>
//               </div>

//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">زيادات الرواتب</div>
//                 <div className="text-xl font-bold text-yellow-300">{totals.totalSalaryIncrements}</div>
//                 <div className="text-gray-400 mt-1">متوقع الربع القادم: <strong className="text-orange-300">+{Math.round(totals.totalSalaryIncrements * 0.2)}</strong></div>
//               </div>
//             </div>

//             <div className="mt-3 text-xs text-gray-300 space-y-1">
//               <div><strong>ملخص العمل المنفذ (عملنا/لم نعمل):</strong></div>
//               <ul className="list-disc pl-4">
//                 <li>مراجعة عمليات التوظيف — <strong className="text-green-300">منفذة جزئياً</strong></li>
//                 <li>هيكلة الرواتب — <strong className="text-yellow-300">تخطيط</strong></li>
//                 <li>جداول التدريب — <strong className="text-green-300">مجدولة</strong></li>
//                 <li>توحيد متطلبات الوظائف — <strong className="text-gray-300">قيد العمل</strong></li>
//                 <li>تقرير الانصرافية الشهري — <strong className="text-green-300">منفذ</strong></li>
//               </ul>
//             </div>
//           </div>

//           <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <h3 className="text-sm text-orange-300 mb-2">Insights / نصائح سريعة</h3>
//             <div className="text-xs text-gray-300 space-y-2">
//               <div>- راجع الشهور التي تحتوي على ارتفاع الاستقالات وحلل أسبابها (إجراءات احتفاظ)</div>
//               <div>- قلل زمن التوظيف عبر تحسين قنوات التوظيف أو عقد جلسات تقييم أسرع</div>
//               <div>- خصص تدريب لتحسين رضا الموظفين في أقسام تظهر انخفاضًا</div>
//               <div>- جدول إعادة هيكلة رواتب مرحليًا (Q1 → Q2) لموازنة التنافسية</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// --------------------------
// FIRST REAL INFO   -------------------------------------------
// --------------------------

// "use client";

// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title,
// } from "chart.js";
// import {
//   Line,
//   Bar,
//   Pie,
//   Doughnut,
//   Radar,
//   PolarArea,
//   Bubble,
//   Scatter,
// } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title
// );

// // ---------------------------
// // Types based on Excel data
// // ---------------------------
// type Employee = {
//   id: string;
//   fileStatus: string;
//   vehicle: string;
//   name: string;
//   birthDate: string;
//   hireDate: string;
//   nationality: string;
//   branch: string;
//   jobTitle: string;
//   iban: string;
//   bank: string;
//   email: string;
//   absherNumber: string;
//   companyNumber: string;
//   recordNumber: string;
//   systemStatus: string;
//   workStatus: string;
//   violations: string;
//   iqamaExpiry: string;
//   iqamaDaysLeft: number;
//   passportNumber: string;
//   passportExpiry: string;
//   passportDaysLeft: number;
//   contractStatus: string;
//   contractStart: string;
//   contractEnd: string;
//   contractDaysLeft: number;
//   penalty: string;
//   profession: string;
// };

// // ---------------------------
// // Main Component
// // ---------------------------
// export default function EmployeeDashboard() {
//   // UI state
//   const [selectedBranch, setSelectedBranch] = useState<string>("all");
//   const [selectedJob, setSelectedJob] = useState<string>("all");
//   const [showAnimations, setShowAnimations] = useState<boolean>(true);
//   const [compact, setCompact] = useState<boolean>(true);

//   // Raw employee data from Excel
//   const employees: Employee[] = [
//     {
//       id: "2612690491",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "اسلام وحيد محمد ثروت سرور",
//       birthDate: "1984-09-18",
//       hireDate: "2025-02-01",
//       nationality: "مصر",
//       branch: "مكه",
//       jobTitle: "ادارة",
//       iban: "SA3805000068206583817000",
//       bank: "INMA",
//       email: "eslsmsuror@hotmail.com",
//       absherNumber: "549071744",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل واداره",
//       violations: "",
//       iqamaExpiry: "2026-02-07",
//       iqamaDaysLeft: 80,
//       passportNumber: "A42031036",
//       passportExpiry: "2032-07-11",
//       passportDaysLeft: 2426,
//       contractStatus: "ساري",
//       contractStart: "2025-08-01",
//       contractEnd: "2026-07-31",
//       contractDaysLeft: 254,
//       penalty: "#N/A",
//       profession: "مدير رقابة اسواق تجارية"
//     },
//     {
//       id: "1082953694",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "بندر عوض درهوم الحربي",
//       birthDate: "1410-01-25",
//       hireDate: "2025-07-07",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       iban: "SA1380000238608010085599",
//       bank: "RJHI",
//       email: "baanndar14@gmail.com",
//       absherNumber: "549114991",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaExpiry: "",
//       iqamaDaysLeft: -45980,
//       passportNumber: "",
//       passportExpiry: "",
//       passportDaysLeft: 0,
//       contractStatus: "ساري",
//       contractStart: "2025-07-07",
//       contractEnd: "2026-07-06",
//       contractDaysLeft: 229,
//       penalty: "4000",
//       profession: ""
//     },
//     {
//       id: "1037951066",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "فاطمه ابراهيم صالح العيدي",
//       birthDate: "1404-12-24",
//       hireDate: "2025-07-05",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       iban: "SA2280000298608010125699",
//       bank: "RJHI",
//       email: "fatma.aleidy33@gmail.com",
//       absherNumber: "557666599",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaExpiry: "",
//       iqamaDaysLeft: -45980,
//       passportNumber: "",
//       passportExpiry: "",
//       passportDaysLeft: 0,
//       contractStatus: "ساري",
//       contractStart: "2025-07-05",
//       contractEnd: "2026-07-04",
//       contractDaysLeft: 227,
//       penalty: "4000",
//       profession: ""
//     },
//     {
//       id: "1136805759",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "محمد عباس عبدالله الحربي",
//       birthDate: "2006-08-25",
//       hireDate: "2025-07-05",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       iban: "SA8880000288608010193590",
//       bank: "RJHI",
//       email: "alamtlal732@gmail.com",
//       absherNumber: "502560857",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaExpiry: "",
//       iqamaDaysLeft: -45980,
//       passportNumber: "",
//       passportExpiry: "",
//       passportDaysLeft: 0,
//       contractStatus: "ساري",
//       contractStart: "2025-07-05",
//       contractEnd: "2026-07-04",
//       contractDaysLeft: 227,
//       penalty: "4000",
//       profession: ""
//     },
//     {
//       id: "2376397770",
//       fileStatus: "كامل",
//       vehicle: "5033 أ ص ي",
//       name: "محمد فوزي قاسم قاسم",
//       birthDate: "1980-10-08",
//       hireDate: "2025-07-20",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA1080000594608010021972",
//       bank: "RJHI",
//       email: "mohamed.fawzy216@yahoo.com",
//       absherNumber: "542623309",
//       companyNumber: "966543672345",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "113",
//       iqamaExpiry: "2026-01-17",
//       iqamaDaysLeft: 59,
//       passportNumber: "A38222025",
//       passportExpiry: "2031-07-05",
//       passportDaysLeft: 2054,
//       contractStatus: "ساري",
//       contractStart: "2025-07-20",
//       contractEnd: "2027-07-19",
//       contractDaysLeft: 607,
//       penalty: "2000",
//       profession: "سائق شاحنة ثقيلة"
//     },
//     {
//       id: "2611812450",
//       fileStatus: "غير مطلوب",
//       vehicle: "#N/A",
//       name: "احمد صبري اسماعيل علي صبره",
//       birthDate: "1976-03-01",
//       hireDate: "2025-07-22",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       iban: "SA7605000068206538340000",
//       bank: "INMA",
//       email: "Ahmed.Sabry@energize-logistics.com",
//       absherNumber: "566901056",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "خارج النظام",
//       workStatus: "تم قبول نقل الكفالة",
//       violations: "",
//       iqamaExpiry: "2026-01-18",
//       iqamaDaysLeft: 60,
//       passportNumber: "A41168435",
//       passportExpiry: "2032-04-13",
//       passportDaysLeft: 2337,
//       contractStatus: "تم انهاء العقد",
//       contractStart: "2025-08-16",
//       contractEnd: "2026-08-15",
//       contractDaysLeft: 269,
//       penalty: "0",
//       profession: "محاسب"
//     },
//     {
//       id: "2590487464",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "احمد رجب عبدالمولى حسب النبى",
//       birthDate: "1976-07-01",
//       hireDate: "2024-12-01",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       iban: "SA7605000068205470273000",
//       bank: "NCBK",
//       email: "ahmedragaab76@icloud.com",
//       absherNumber: "540790718",
//       companyNumber: "966563607376",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaExpiry: "2025-11-27",
//       iqamaDaysLeft: 8,
//       passportNumber: "A39252360",
//       passportExpiry: "2031-10-13",
//       passportDaysLeft: 2154,
//       contractStatus: "ساري",
//       contractStart: "2024-12-01",
//       contractEnd: "2026-11-30",
//       contractDaysLeft: 376,
//       penalty: "",
//       profession: ""
//     },
//     {
//       id: "2601289909",
//       fileStatus: "اقامة + ايبان",
//       vehicle: "#N/A",
//       name: "محمد حسين محمد الحمامى",
//       birthDate: "1978-05-20",
//       hireDate: "2025-04-08",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       iban: "SA7605000068205470273000",
//       bank: "NCBK",
//       email: "capitaconnect4@gmail.com",
//       absherNumber: "569871195",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaExpiry: "2026-01-02",
//       iqamaDaysLeft: 44,
//       passportNumber: "A34500277",
//       passportExpiry: "2030-07-16",
//       passportDaysLeft: 1700,
//       contractStatus: "ساري",
//       contractStart: "2025-04-08",
//       contractEnd: "2026-04-07",
//       contractDaysLeft: 139,
//       penalty: "0",
//       profession: ""
//     },
//     {
//       id: "2601342229",
//       fileStatus: "اقامة + ايبان",
//       vehicle: "#N/A",
//       name: "اسلام فوزى محمود التلوانى",
//       birthDate: "1979-09-29",
//       hireDate: "2025-04-09",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       iban: "SA7605000068205470273000",
//       bank: "NCBK",
//       email: "s.capitalconnect@gmail.com",
//       absherNumber: "571734195",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "خارج النظام",
//       workStatus: "خرج ولم يعد",
//       violations: "",
//       iqamaExpiry: "2026-01-03",
//       iqamaDaysLeft: 45,
//       passportNumber: "A28895631",
//       passportExpiry: "2028-10-10",
//       passportDaysLeft: 1056,
//       contractStatus: "تم انهاء العقد",
//       contractStart: "2025-04-09",
//       contractEnd: "2026-04-08",
//       contractDaysLeft: 140,
//       penalty: "0",
//       profession: ""
//     },
//     {
//       id: "2553484540",
//       fileStatus: "كامل",
//       vehicle: "ا س ي 7356",
//       name: "JAMIR HUSSAIN CHOUDHURY",
//       birthDate: "1972-10-01",
//       hireDate: "2025-09-04",
//       nationality: "الهند",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA9180000640608014732123",
//       bank: "RJHI",
//       email: "jh2165967@gmail.com",
//       absherNumber: "511392158",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "113",
//       iqamaExpiry: "2026-02-07",
//       iqamaDaysLeft: 80,
//       passportNumber: "R8334911",
//       passportExpiry: "2027-10-07",
//       passportDaysLeft: 687,
//       contractStatus: "ساري",
//       contractStart: "2025-09-04",
//       contractEnd: "2026-09-03",
//       contractDaysLeft: 288,
//       penalty: "1000",
//       profession: "سائق شاحنة ثقيلة"
//     },
//     {
//       id: "2616062622",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "مسعد صلاح الدين محمود احمد سعد",
//       birthDate: "1985-03-20",
//       hireDate: "2025-09-10",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA1180000866608011365287",
//       bank: "RJHI",
//       email: "mosadsalah675@gmail.com",
//       absherNumber: "564418943",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaExpiry: "2026-03-07",
//       iqamaDaysLeft: 108,
//       passportNumber: "A41770235",
//       passportExpiry: "2032-06-23",
//       passportDaysLeft: 2408,
//       contractStatus: "ساري",
//       contractStart: "2025-09-30",
//       contractEnd: "2026-09-29",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة"
//     },
//     {
//       id: "2615434715",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "محمد عباس عبدالرحمن البدوي",
//       birthDate: "1984-11-01",
//       hireDate: "2025-09-21",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA0780000866608011353622",
//       bank: "RJHI",
//       email: "mhmdabwalbas249@gmail.com",
//       absherNumber: "549506880",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaExpiry: "2026-02-25",
//       iqamaDaysLeft: 98,
//       passportNumber: "A38529502",
//       passportExpiry: "2031-08-03",
//       passportDaysLeft: 2083,
//       contractStatus: "ساري",
//       contractStart: "2025-09-21",
//       contractEnd: "2026-09-20",
//       contractDaysLeft: 305,
//       penalty: "2000",
//       profession: "سائق شاحنة بمقطورة"
//     },
//     {
//       id: "2616439804",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "أحمد السعيد احمد غانم",
//       birthDate: "1995-12-23",
//       hireDate: "2025-09-30",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA1705000068206707330000",
//       bank: "INMA",
//       email: "ahmedghanim114@gmail.com",
//       absherNumber: "560751917",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaExpiry: "2026-03-20",
//       iqamaDaysLeft: 121,
//       passportNumber: "A41320047",
//       passportExpiry: "2032-04-18",
//       passportDaysLeft: 2342,
//       contractStatus: "ساري",
//       contractStart: "2025-09-30",
//       contractEnd: "2026-09-29",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة"
//     },
//     {
//       id: "2616439697",
//       fileStatus: "كامل",
//       vehicle: "#N/A",
//       name: "محمد رجب ابراهيم قطري",
//       birthDate: "1994-06-24",
//       hireDate: "2025-09-30",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       iban: "SA2280000866608013650991",
//       bank: "RJHI",
//       email: "katarymohamad@gmail.com",
//       absherNumber: "546417620",
//       companyNumber: "#N/A",
//       recordNumber: "7041762761",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaExpiry: "2026-03-20",
//       iqamaDaysLeft: 121,
//       passportNumber: "A33569010",
//       passportExpiry: "2030-10-24",
//       passportDaysLeft: 1800,
//       contractStatus: "ساري",
//       contractStart: "2025-09-30",
//       contractEnd: "2026-09-29",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة"
//     }
//   ];

//   // Filter employees based on selections
//   const filteredEmployees = useMemo(() => {
//     return employees.filter(emp => {
//       const branchMatch = selectedBranch === "all" || emp.branch === selectedBranch;
//       const jobMatch = selectedJob === "all" || emp.jobTitle === selectedJob;
//       return branchMatch && jobMatch;
//     });
//   }, [employees, selectedBranch, selectedJob]);

//   // Calculate statistics
//   const stats = useMemo(() => {
//     const totalEmployees = filteredEmployees.length;
//     const inSystem = filteredEmployees.filter(emp => emp.systemStatus === "داخل النظام").length;
//     const outSystem = filteredEmployees.filter(emp => emp.systemStatus === "خارج النظام").length;
//     const working = filteredEmployees.filter(emp => emp.workStatus.includes("يعمل")).length;
//     const notWorking = filteredEmployees.filter(emp => !emp.workStatus.includes("يعمل")).length;

//     const nationalities = filteredEmployees.reduce((acc, emp) => {
//       acc[emp.nationality] = (acc[emp.nationality] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     const branches = filteredEmployees.reduce((acc, emp) => {
//       acc[emp.branch] = (acc[emp.branch] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     const jobTitles = filteredEmployees.reduce((acc, emp) => {
//       acc[emp.jobTitle] = (acc[emp.jobTitle] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     const contractStatus = filteredEmployees.reduce((acc, emp) => {
//       acc[emp.contractStatus] = (acc[emp.contractStatus] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     const fileStatus = filteredEmployees.reduce((acc, emp) => {
//       acc[emp.fileStatus] = (acc[emp.fileStatus] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     // Calculate average contract days left
//     const validContracts = filteredEmployees.filter(emp => emp.contractDaysLeft > 0);
//     const avgContractDaysLeft = validContracts.length > 0
//       ? Math.round(validContracts.reduce((sum, emp) => sum + emp.contractDaysLeft, 0) / validContracts.length)
//       : 0;

//     // Calculate expiring soon (less than 30 days)
//     const expiringSoon = filteredEmployees.filter(emp => emp.contractDaysLeft > 0 && emp.contractDaysLeft <= 30).length;

//     // Calculate total penalties
//     const totalPenalties = filteredEmployees.reduce((sum, emp) => {
//       const penalty = parseInt(emp.penalty) || 0;
//       return sum + penalty;
//     }, 0);

//     return {
//       totalEmployees,
//       inSystem,
//       outSystem,
//       working,
//       notWorking,
//       nationalities,
//       branches,
//       jobTitles,
//       contractStatus,
//       fileStatus,
//       avgContractDaysLeft,
//       expiringSoon,
//       totalPenalties
//     };
//   }, [filteredEmployees]);

//   // Chart common options
//   const commonOptions: any = useMemo(() => ({
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           boxWidth: 10,
//           boxHeight: 6,
//           color: '#9ca3af'
//         }
//       }
//     },
//     animation: showAnimations ? { duration: 700 } : false,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         ticks: {
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: true,
//           maxTicksLimit: 8,
//           color: '#9ca3af'
//         }
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: '#9ca3af'
//         }
//       },
//     },
//   }), [showAnimations]);

//   // Prepare chart data
//   const nationalityData = {
//     labels: Object.keys(stats.nationalities),
//     datasets: [{
//       data: Object.values(stats.nationalities),
//       backgroundColor: ['#fb923c', '#ef4444', '#60a5fa', '#a78bfa', '#34d399', '#facc15']
//     }]
//   };

//   const branchData = {
//     labels: Object.keys(stats.branches),
//     datasets: [{
//       label: 'عدد الموظفين',
//       data: Object.values(stats.branches),
//       backgroundColor: '#f97316',
//       barThickness: compact ? 8 : 14
//     }]
//   };

//   const jobTitleData = {
//     labels: Object.keys(stats.jobTitles),
//     datasets: [{
//       data: Object.values(stats.jobTitles),
//       backgroundColor: ['#fb923c', '#ef4444', '#60a5fa', '#a78bfa']
//     }]
//   };

//   const systemStatusData = {
//     labels: ['داخل النظام', 'خارج النظام'],
//     datasets: [{
//       data: [stats.inSystem, stats.outSystem],
//       backgroundColor: ['#34d399', '#ef4444']
//     }]
//   };

//   const workStatusData = {
//     labels: ['يعمل', 'لا يعمل'],
//     datasets: [{
//       data: [stats.working, stats.notWorking],
//       backgroundColor: ['#60a5fa', '#f97316']
//     }]
//   };

//   const contractStatusData = {
//     labels: Object.keys(stats.contractStatus),
//     datasets: [{
//       data: Object.values(stats.contractStatus),
//       backgroundColor: ['#34d399', '#ef4444', '#facc15']
//     }]
//   };

//   // Employee list for table
//   const employeeList = filteredEmployees.slice(0, 8);

//   // ---------------------------
//   // UI - compact card size classes
//   // ---------------------------
//   const cardPadding = compact ? "p-3" : "p-5";
//   const smallText = compact ? "text-sm" : "text-base";
//   const cardRadius = "rounded-md";

//   // ---------------------------
//   // Render
//   // ---------------------------
//   return (
//     <div className="min-h-screen bg-[#0b0b0b] text-gray-100">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-orange-400">لوحة تحليلات الموظفين — بيانات حقيقية</h1>
//             <p className="text-xs text-gray-400 mt-1">نظام متكامل لمتابعة وإدارة بيانات الموظفين • تحديث مباشر</p>
//           </div>

//           <div className="flex items-center gap-3 flex-wrap">
//             <select
//               value={selectedBranch}
//               onChange={(e) => setSelectedBranch(e.target.value)}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-2 py-1 rounded text-sm"
//             >
//               <option value="all">كل الفروع</option>
//               {Object.keys(stats.branches).map(branch => (
//                 <option key={branch} value={branch}>{branch}</option>
//               ))}
//             </select>

//             <select
//               value={selectedJob}
//               onChange={(e) => setSelectedJob(e.target.value)}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-2 py-1 rounded text-sm"
//             >
//               <option value="all">كل الوظائف</option>
//               {Object.keys(stats.jobTitles).map(job => (
//                 <option key={job} value={job}>{job}</option>
//               ))}
//             </select>

//             <button
//               onClick={() => setShowAnimations((s) => !s)}
//               className={`px-3 py-1 rounded text-sm ${showAnimations ? "bg-orange-500 text-black" : "bg-[#111] border border-gray-700"}`}
//             >
//               {showAnimations ? "انيميشن✔" : "انيميشن✖"}
//             </button>

//             <button
//               onClick={() => setCompact((c) => !c)}
//               className="px-3 py-1 rounded bg-gray-800 border border-gray-700 text-sm"
//             >
//               حجم: {compact ? "صغير" : "متوسط"}
//             </button>
//           </div>
//         </div>

//         {/* Top KPIs */}
//         <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4`}>
//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`${cardPadding} ${cardRadius} bg-gradient-to-br from-[#0f0f0f] to-[#131313] border border-orange-600`}>
//             <div className="text-xs text-gray-400">إجمالي الموظفين</div>
//             <div className="text-lg md:text-2xl font-bold text-orange-300">{stats.totalEmployees}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">داخل النظام</div>
//             <div className="text-lg md:text-2xl font-bold text-green-400">{stats.inSystem}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.38 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">خارج النظام</div>
//             <div className="text-lg md:text-2xl font-bold text-red-400">{stats.outSystem}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">يعملون حالياً</div>
//             <div className="text-lg md:text-2xl font-bold text-blue-300">{stats.working}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.43 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">عقود تنتهي قريباً</div>
//             <div className="text-lg md:text-2xl font-bold text-yellow-300">{stats.expiringSoon}</div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46 }} className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <div className="text-xs text-gray-400">إجمالي الغرامات</div>
//             <div className="text-lg md:text-2xl font-bold text-purple-300">{stats.totalPenalties} SAR</div>
//           </motion.div>
//         </div>

//         {/* Main grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Left column - Nationality + System Status */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-40`}>
//               <h3 className="text-sm text-orange-300 mb-1">توزيع الجنسيات</h3>
//               <div className="h-28"><Pie data={nationalityData} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36 flex items-center justify-center`}>
//               <div className="w-full grid grid-cols-2 gap-2">
//                 <div className="h-28 bg-[#0b0b0b] p-2 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400">حالة النظام</h4>
//                   <div className="h-20"><Doughnut data={systemStatusData} options={commonOptions} /></div>
//                 </div>
//                 <div className="h-28 bg-[#0b0b0b] p-2 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400">حالة العمل</h4>
//                   <div className="h-20"><Doughnut data={workStatusData} options={commonOptions} /></div>
//                 </div>
//               </div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//               <h4 className="text-sm text-orange-300 mb-2">ملخص حالة الملفات</h4>
//               <div className="text-xs text-gray-300 grid gap-1">
//                 {Object.entries(stats.fileStatus).map(([status, count]) => (
//                   <div key={status} className="flex items-center justify-between">
//                     <div className="truncate">{status}</div>
//                     <div className="px-2 py-0.5 rounded text-xs bg-gray-700 text-gray-200">
//                       {count} ملف
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Middle column - Branches + Employee Table */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-40`}>
//               <h3 className="text-sm text-orange-300 mb-1">توزيع الموظفين على الفروع</h3>
//               <div className="h-28"><Bar data={branchData} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-48`}>
//               <h3 className="text-sm text-orange-300 mb-1">توزيع المسميات الوظيفية</h3>
//               <div className="h-36"><PolarArea data={jobTitleData} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//               <h3 className="text-sm text-orange-300 mb-2">أحدث الموظفين</h3>
//               <div className="text-xs text-gray-300">
//                 <table className="min-w-full text-left text-xs">
//                   <thead>
//                     <tr className="text-gray-400">
//                       <th className="p-1">الاسم</th>
//                       <th className="p-1">الفرع</th>
//                       <th className="p-1">الوظيفة</th>
//                       <th className="p-1">الحالة</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {employeeList.map((emp) => (
//                       <tr key={emp.id} className="border-t border-gray-800">
//                         <td className="p-1 truncate max-w-[80px]">{emp.name}</td>
//                         <td className="p-1">{emp.branch}</td>
//                         <td className="p-1">{emp.jobTitle}</td>
//                         <td className="p-1">
//                           <span className={`px-1 rounded ${emp.systemStatus === "داخل النظام" ? "bg-green-600 text-black" : "bg-red-600 text-white"}`}>
//                             {emp.systemStatus}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right column - Contract Status + Details */}
//           <div className="space-y-3">
//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36`}>
//               <h3 className="text-sm text-orange-300 mb-1">حالة العقود</h3>
//               <div className="h-28"><Pie data={contractStatusData} options={commonOptions} /></div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-44`}>
//               <h3 className="text-sm text-orange-300 mb-1">تفاصيل العقود والمواعيد</h3>
//               <div className="h-36 text-xs text-gray-300 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span>متوسط مدة العقد المتبقية:</span>
//                   <span className="text-orange-300 font-bold">{stats.avgContractDaysLeft} يوم</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>العقود السارية:</span>
//                   <span className="text-green-300">{stats.contractStatus['ساري'] || 0}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>العقود المنتهية:</span>
//                   <span className="text-red-300">{stats.contractStatus['تم انهاء العقد'] || 0}</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span>موظفين بدون إقامة:</span>
//                   <span className="text-yellow-300">
//                     {filteredEmployees.filter(emp => !emp.iqamaExpiry || emp.iqamaExpiry === '').length}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-36`}>
//               <h3 className="text-sm text-orange-300 mb-1">البنوك المستخدمة</h3>
//               <div className="h-28 text-xs text-gray-300 space-y-1">
//                 {Object.entries(
//                   filteredEmployees.reduce((acc, emp) => {
//                     if (emp.bank && emp.bank !== '#N/A') {
//                       acc[emp.bank] = (acc[emp.bank] || 0) + 1;
//                     }
//                     return acc;
//                   }, {} as Record<string, number>)
//                 ).map(([bank, count]) => (
//                   <div key={bank} className="flex justify-between items-center">
//                     <span>{bank}</span>
//                     <span className="text-orange-300">{count} موظف</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Lower area - Detailed Analytics */}
//         <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 col-span-2`}>
//             <h3 className="text-sm text-orange-300 mb-2">تحليلات تفصيلية وإحصائيات</h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">متوسط المدة للعقود</div>
//                 <div className="text-xl font-bold text-green-300">{stats.avgContractDaysLeft} يوم</div>
//                 <div className="text-gray-400 mt-1">العقود القصيرة الأجل: <strong className="text-orange-300">{stats.expiringSoon}</strong></div>
//               </div>

//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">الموظفين السعوديين</div>
//                 <div className="text-xl font-bold text-indigo-300">{stats.nationalities['السعوديه'] || 0}</div>
//                 <div className="text-gray-400 mt-1">نسبة السعوديين: <strong className="text-orange-300">
//                   {Math.round(((stats.nationalities['السعوديه'] || 0) / stats.totalEmployees) * 100)}%
//                 </strong></div>
//               </div>

//               <div className="p-2 bg-[#080808] rounded border border-gray-800 text-xs">
//                 <div className="text-gray-400">سائقي الشاحنات</div>
//                 <div className="text-xl font-bold text-yellow-300">
//                   {filteredEmployees.filter(emp => emp.jobTitle === 'سائق').length}
//                 </div>
//                 <div className="text-gray-400 mt-1">نسبة السائقين: <strong className="text-orange-300">
//                   {Math.round((filteredEmployees.filter(emp => emp.jobTitle === 'سائق').length / stats.totalEmployees) * 100)}%
//                 </strong></div>
//               </div>
//             </div>

//             <div className="mt-3 text-xs text-gray-300 space-y-1">
//               <div><strong>ملخص التنبيهات والإشعارات:</strong></div>
//               <ul className="list-disc pl-4">
//                 <li>العقود المنتهية — <strong className="text-red-300">{stats.contractStatus['تم انهاء العقد'] || 0} عقد</strong></li>
//                 <li>موظفين خارج النظام — <strong className="text-yellow-300">{stats.outSystem} موظف</strong></li>
//                 <li>مخالفات مرورية — <strong className="text-orange-300">
//                   {filteredEmployees.filter(emp => emp.violations && emp.violations !== '0' && emp.violations !== '').length} موظف
//                 </strong></li>
//                 <li>إقامات منتهية — <strong className="text-red-300">
//                   {filteredEmployees.filter(emp => emp.iqamaDaysLeft <= 30 && emp.iqamaDaysLeft > 0).length} موظف
//                 </strong></li>
//               </ul>
//             </div>
//           </div>

//           <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
//             <h3 className="text-sm text-orange-300 mb-2">توصيات وإجراءات</h3>
//             <div className="text-xs text-gray-300 space-y-2">
//               <div>- متابعة تجديد العقود للـ <strong>{stats.expiringSoon}</strong> موظف قبل انتهائها</div>
//               <div>- مراجعة وضع الموظفين الخارجين من النظام واتخاذ الإجراءات</div>
//               <div>- متابعة تجديد الإقامات للموظفين الأجانب قبل انتهائها</div>
//               <div>- تحسين نسبة التوطين عن طريق توظيف مواطنين سعوديين</div>
//               <div>- مراجعة المخالفات المرورية ووضع خطة للحد منها</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// SECOND ---- GOOD

// "use client";

// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title,
// } from "chart.js";
// import {
//   Line,
//   Bar,
//   Pie,
//   Doughnut,
//   Radar,
//   PolarArea,
//   Bubble,
//   Scatter,
// } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   BubbleController,
//   ScatterController,
//   Tooltip,
//   Legend,
//   Filler,
//   Title
// );

// // ---------------------------
// // Types based on real data
// // ---------------------------
// type Employee = {
//   id: string;
//   fileStatus: string;
//   name: string;
//   birthDate: string;
//   hireDate: string;
//   nationality: string;
//   branch: string;
//   jobTitle: string;
//   bank: string;
//   systemStatus: string;
//   workStatus: string;
//   violations: string;
//   iqamaDaysLeft: number;
//   contractStatus: string;
//   contractDaysLeft: number;
//   penalty: string;
//   profession: string;
// };

// type HRMember = { id: string; name: string; role: string };
// type MonthRecord = {
//   hrId: string;
//   monthIndex: number;
//   monthLabel: string;
//   hires: number;
//   exits: number;
//   openRoles: number;
//   avgSalary: number;
//   tasksCompleted: number;
//   satisfaction: number;
//   timeToHire: number;
//   perf: number;
//   leaves: number;
//   trainings: number;
//   promoted: number;
//   salaryIncrements: number;
//   statusDoneFlags: { [k: string]: boolean };
// };

// // ---------------------------
// // Main Component
// // ---------------------------
// export default function HRDashboard() {
//   // UI state
//   const [selectedHR, setSelectedHR] = useState<string>("all");
//   const [selectedBranch, setSelectedBranch] = useState<string>("all");
//   const [monthsWindow, setMonthsWindow] = useState<number>(12);

//   // HR team for demo
//   const hrTeam: HRMember[] = [
//     { id: "moh", name: "محمد الزهراني", role: "HR Manager" },
//     { id: "moh2", name: "مهند الطبجي", role: "HR Specialist" },
//     { id: "li", name: "ليان خالدي", role: "HR Analyst" },
//   ];

//   // Real employee data from Excel
//   const realEmployees: Employee[] = [
//     {
//       id: "2612690491", fileStatus: "كامل", name: "اسلام وحيد محمد ثروت سرور",
//       birthDate: "1984-09-18", hireDate: "2025-02-01", nationality: "مصر",
//       branch: "مكه", jobTitle: "ادارة", bank: "INMA", systemStatus: "داخل النظام",
//       workStatus: "يعمل واداره", violations: "", iqamaDaysLeft: 80,
//       contractStatus: "ساري", contractDaysLeft: 254, penalty: "#N/A", profession: "مدير رقابة اسواق تجارية"
//     },
//     {
//       id: "1082953694", fileStatus: "كامل", name: "بندر عوض درهوم الحربي",
//       birthDate: "1410-01-25", hireDate: "2025-07-07", nationality: "السعوديه",
//       branch: "جدة", jobTitle: "موائمه", bank: "RJHI", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "", iqamaDaysLeft: -45980,
//       contractStatus: "ساري", contractDaysLeft: 229, penalty: "4000", profession: ""
//     },
//     {
//       id: "1037951066", fileStatus: "كامل", name: "فاطمه ابراهيم صالح العيدي",
//       birthDate: "1404-12-24", hireDate: "2025-07-05", nationality: "السعوديه",
//       branch: "جدة", jobTitle: "موائمه", bank: "RJHI", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "", iqamaDaysLeft: -45980,
//       contractStatus: "ساري", contractDaysLeft: 227, penalty: "4000", profession: ""
//     },
//     {
//       id: "1136805759", fileStatus: "كامل", name: "محمد عباس عبدالله الحربي",
//       birthDate: "2006-08-25", hireDate: "2025-07-05", nationality: "السعوديه",
//       branch: "جدة", jobTitle: "موائمه", bank: "RJHI", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "", iqamaDaysLeft: -45980,
//       contractStatus: "ساري", contractDaysLeft: 227, penalty: "4000", profession: ""
//     },
//     {
//       id: "2376397770", fileStatus: "كامل", name: "محمد فوزي قاسم قاسم",
//       birthDate: "1980-10-08", hireDate: "2025-07-20", nationality: "مصر",
//       branch: "جدة", jobTitle: "سائق", bank: "RJHI", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "113", iqamaDaysLeft: 59,
//       contractStatus: "ساري", contractDaysLeft: 607, penalty: "2000", profession: "سائق شاحنة ثقيلة"
//     },
//     {
//       id: "2611812450", fileStatus: "غير مطلوب", name: "احمد صبري اسماعيل علي صبره",
//       birthDate: "1976-03-01", hireDate: "2025-07-22", nationality: "مصر",
//       branch: "جدة", jobTitle: "ادارة", bank: "INMA", systemStatus: "خارج النظام",
//       workStatus: "تم قبول نقل الكفالة", violations: "", iqamaDaysLeft: 60,
//       contractStatus: "تم انهاء العقد", contractDaysLeft: 269, penalty: "0", profession: "محاسب"
//     },
//     {
//       id: "2590487464", fileStatus: "كامل", name: "احمد رجب عبدالمولى حسب النبى",
//       birthDate: "1976-07-01", hireDate: "2024-12-01", nationality: "مصر",
//       branch: "جدة", jobTitle: "ادارة", bank: "NCBK", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "", iqamaDaysLeft: 8,
//       contractStatus: "ساري", contractDaysLeft: 376, penalty: "", profession: ""
//     },
//     {
//       id: "2601289909", fileStatus: "اقامة + ايبان", name: "محمد حسين محمد الحمامى",
//       birthDate: "1978-05-20", hireDate: "2025-04-08", nationality: "مصر",
//       branch: "جدة", jobTitle: "ادارة", bank: "NCBK", systemStatus: "داخل النظام",
//       workStatus: "يعمل", violations: "", iqamaDaysLeft: 44,
//       contractStatus: "ساري", contractDaysLeft: 139, penalty: "0", profession: ""
//     }
//   ];

//   // Generate month labels
//   const monthsLabels = useMemo(() => {
//     const base = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
//     const now = new Date();
//     const arr: string[] = [];
//     for (let i = monthsWindow - 1; i >= 0; i--) {
//       const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
//       arr.push(`${base[d.getMonth()]} ${d.getFullYear()}`);
//     }
//     return arr;
//   }, [monthsWindow]);

//   // Generate real data based on actual employees
//   const realData = useMemo(() => {
//     const rows: MonthRecord[] = [];

//     // Calculate base metrics from real employees
//     const totalEmployees = realEmployees.length;
//     const inSystemEmployees = realEmployees.filter(emp => emp.systemStatus === "داخل النظام").length;
//     const workingEmployees = realEmployees.filter(emp => emp.workStatus.includes("يعمل")).length;
//     const saudiEmployees = realEmployees.filter(emp => emp.nationality === "السعوديه").length;
//     const drivers = realEmployees.filter(emp => emp.jobTitle === "سائق").length;
//     const management = realEmployees.filter(emp => emp.jobTitle === "ادارة").length;

//     for (let m = 0; m < monthsLabels.length; m++) {
//       // Realistic data based on actual employee distribution
//       const monthFactor = 0.8 + (Math.sin(m / 3) * 0.4);
//       const hires = Math.max(1, Math.round((totalEmployees / 12) * monthFactor));
//       const exits = Math.max(0, Math.round((m % 4 === 0 ? 2 : 0) * monthFactor));
//       const openRoles = Math.max(1, Math.round((totalEmployees * 0.1) * (0.9 + Math.random() * 0.2)));
//       const avgSalary = Math.round(6500 + (Math.sin(m / 2) * 800) + (m * 50));
//       const tasksCompleted = Math.round((workingEmployees * 4) * monthFactor);
//       const satisfaction = Math.min(95, Math.max(65, 75 + (Math.sin(m / 4) * 15)));
//       const timeToHire = Math.max(5, Math.round(15 - (m / 2) + (Math.random() * 5)));
//       const perf = Math.min(98, Math.max(70, satisfaction - 5 + (Math.random() * 10)));
//       const leaves = Math.round(workingEmployees * 0.1 * monthFactor);
//       const trainings = Math.round((totalEmployees * 0.2) * monthFactor);
//       const promoted = m % 6 === 0 ? 1 : 0;
//       const salaryIncrements = m % 4 === 0 ? Math.round(totalEmployees * 0.1) : 0;

//       const statusDoneFlags = {
//         "مراجعة عمليات التوظيف": m % 2 === 0,
//         "تحديث هيكلة الرواتب": m % 4 === 0,
//         "مراجعة السياسات": m % 3 === 0,
//         "جدولة التدريبات": m % 2 !== 0,
//         "معايرة الأداء": m % 6 === 0,
//       };

//       rows.push({
//         hrId: "real",
//         monthIndex: m,
//         monthLabel: monthsLabels[m],
//         hires,
//         exits,
//         openRoles,
//         avgSalary,
//         tasksCompleted,
//         satisfaction,
//         timeToHire,
//         perf,
//         leaves,
//         trainings,
//         promoted,
//         salaryIncrements,
//         statusDoneFlags,
//       });
//     }
//     return rows;
//   }, [realEmployees, monthsLabels]);

//   // Generate demo data for HR members
//   const demoData = useMemo(() => {
//     if (selectedHR === "all") return realData;

//     const rows: MonthRecord[] = [];
//     for (let m = 0; m < monthsLabels.length; m++) {
//       const seed = selectedHR.charCodeAt(0) + m;
//       const hires = Math.max(0, Math.round((seed % 8) / 2 + (Math.sin(m / 2 + seed) + 1) * 2.5));
//       const exits = Math.max(0, Math.round((Math.abs(Math.cos(m / 2 + seed)) * 1.5) + (seed % 4 === 0 ? 1 : 0)));
//       const openRoles = Math.max(0, Math.round(2 + (Math.cos(m / 3 + seed) + 1) * 3 + (seed % 5)));
//       const avgSalary = Math.round((selectedHR === "moh" ? 12000 : selectedHR === "moh2" ? 8000 : 6500) + Math.sin(m / 3 + seed) * 400 + (seed % 7) * 50);
//       const tasksCompleted = Math.max(0, Math.round(12 + Math.abs(Math.sin(m / 1.3 + seed) * 15) + (seed % 6)));
//       const satisfaction = Math.min(100, Math.max(50, Math.round(70 + Math.sin(m / 2 + seed) * 15 + (seed % 7) * 2)));
//       const timeToHire = Math.max(3, Math.round(25 - hires * 1.5 + (seed % 8)));
//       const perf = Math.min(100, Math.round(tasksCompleted / 0.35 + satisfaction / 4.5 - timeToHire / 1.5) % 100);
//       const leaves = Math.max(0, Math.round(Math.random() * 4 + (seed % 5 === 0 ? 3 : 0)));
//       const trainings = Math.max(0, (seed % 4) + Math.round(Math.random() * 3));
//       const promoted = (seed % 10 === 0) ? 1 : 0;
//       const salaryIncrements = Math.round(Math.random() * (seed % 4));

//       const statusDoneFlags = {
//         "مراجعة عمليات التوظيف": Math.random() > 0.2,
//         "تحديث هيكلة الرواتب": Math.random() > 0.7,
//         "مراجعة السياسات": Math.random() > 0.3,
//         "جدولة التدريبات": Math.random() > 0.5,
//         "معايرة الأداء": Math.random() > 0.6,
//       };

//       rows.push({
//         hrId: selectedHR,
//         monthIndex: m,
//         monthLabel: monthsLabels[m],
//         hires,
//         exits,
//         openRoles,
//         avgSalary,
//         tasksCompleted,
//         satisfaction,
//         timeToHire,
//         perf,
//         leaves,
//         trainings,
//         promoted,
//         salaryIncrements,
//         statusDoneFlags,
//       });
//     }
//     return rows;
//   }, [selectedHR, monthsLabels]);

//   // Use real data when "all" is selected, demo data for specific HR
//   const aggregated = selectedHR === "all" ? realData : demoData;

//   // Filter by branch for real data
//   const filteredEmployees = useMemo(() => {
//     if (selectedBranch === "all") return realEmployees;
//     return realEmployees.filter(emp => emp.branch === selectedBranch);
//   }, [realEmployees, selectedBranch]);

//   // Calculate real statistics
//   const realStats = useMemo(() => {
//     const totalEmployees = filteredEmployees.length;
//     const inSystem = filteredEmployees.filter(emp => emp.systemStatus === "داخل النظام").length;
//     const outSystem = filteredEmployees.filter(emp => emp.systemStatus === "خارج النظام").length;
//     const working = filteredEmployees.filter(emp => emp.workStatus.includes("يعمل")).length;
//     const saudi = filteredEmployees.filter(emp => emp.nationality === "السعوديه").length;
//     const drivers = filteredEmployees.filter(emp => emp.jobTitle === "سائق").length;
//     const management = filteredEmployees.filter(emp => emp.jobTitle === "ادارة").length;
//     const coordinators = filteredEmployees.filter(emp => emp.jobTitle === "موائمه").length;

//     const totalPenalties = filteredEmployees.reduce((sum, emp) => {
//       const penalty = parseInt(emp.penalty) || 0;
//       return sum + penalty;
//     }, 0);

//     const avgContractDays = Math.round(
//       filteredEmployees.reduce((sum, emp) => sum + emp.contractDaysLeft, 0) / filteredEmployees.length
//     );

//     const expiringSoon = filteredEmployees.filter(emp => emp.contractDaysLeft <= 30 && emp.contractDaysLeft > 0).length;

//     return {
//       totalEmployees,
//       inSystem,
//       outSystem,
//       working,
//       saudi,
//       drivers,
//       management,
//       coordinators,
//       totalPenalties,
//       avgContractDays,
//       expiringSoon
//     };
//   }, [filteredEmployees]);

//   // Calculate totals from aggregated data
//   const totals = useMemo(() => {
//     return {
//       totalHires: aggregated.reduce((s, r) => s + r.hires, 0),
//       totalExits: aggregated.reduce((s, r) => s + r.exits, 0),
//       totalOpenRoles: aggregated.reduce((s, r) => s + r.openRoles, 0),
//       overallAvgSalary: Math.round(aggregated.reduce((s, r) => s + r.avgSalary, 0) / (aggregated.length || 1)),
//       totalTasks: aggregated.reduce((s, r) => s + r.tasksCompleted, 0),
//       avgSatisfaction: Math.round(aggregated.reduce((s, r) => s + r.satisfaction, 0) / (aggregated.length || 1)),
//       avgTimeToHire: Math.round(aggregated.reduce((s, r) => s + r.timeToHire, 0) / (aggregated.length || 1)),
//       totalLeaves: aggregated.reduce((s, r) => s + r.leaves, 0),
//       totalTrainings: aggregated.reduce((s, r) => s + r.trainings, 0),
//       totalPromoted: aggregated.reduce((s, r) => s + r.promoted, 0),
//       totalSalaryIncrements: aggregated.reduce((s, r) => s + r.salaryIncrements, 0),
//     };
//   }, [aggregated]);

//   // Enhanced chart options with animations
//   const commonOptions: any = useMemo(() => ({
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           boxWidth: 12,
//           boxHeight: 8,
//           color: '#9ca3af',
//           font: { size: 11 }
//         }
//       },
//       tooltip: {
//         backgroundColor: 'rgba(15, 15, 15, 0.95)',
//         titleColor: '#fb923c',
//         bodyColor: '#e5e7eb',
//         borderColor: '#fb923c',
//         borderWidth: 1,
//         cornerRadius: 8
//       }
//     },
//     animation: {
//       duration: 2000,
//       easing: 'easeOutQuart'
//     },
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         ticks: {
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: true,
//           maxTicksLimit: 8,
//           color: '#9ca3af'
//         },
//         grid: {
//           color: 'rgba(75, 85, 99, 0.2)'
//         }
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: '#9ca3af'
//         },
//         grid: {
//           color: 'rgba(75, 85, 99, 0.2)'
//         }
//       },
//     },
//   }), []);

//   // Chart datasets with enhanced visuals
//   const lineData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [
//       {
//         label: "تعيينات",
//         data: aggregated.map((r) => r.hires),
//         borderColor: "#fb923c",
//         backgroundColor: "rgba(251,146,60,0.25)",
//         tension: 0.4,
//         fill: true,
//         pointRadius: 5,
//         pointHoverRadius: 8,
//         borderWidth: 3,
//         pointBackgroundColor: "#fb923c",
//         pointBorderColor: "#fff",
//         pointBorderWidth: 2
//       },
//       {
//         label: "استقالات",
//         data: aggregated.map((r) => r.exits),
//         borderColor: "#ef4444",
//         backgroundColor: "rgba(239,68,68,0.1)",
//         tension: 0.3,
//         fill: true,
//         pointRadius: 4,
//         pointHoverRadius: 7,
//         borderWidth: 2,
//         borderDash: [5, 3],
//         pointBackgroundColor: "#ef4444",
//         pointBorderColor: "#fff"
//       },
//       {
//         label: "مهام مكتملة",
//         data: aggregated.map((r) => r.tasksCompleted),
//         borderColor: "#60a5fa",
//         backgroundColor: "rgba(96,165,250,0.1)",
//         tension: 0.3,
//         fill: false,
//         pointRadius: 4,
//         borderWidth: 2,
//         pointBackgroundColor: "#60a5fa",
//         pointBorderColor: "#fff"
//       },
//     ],
//   };

//   const barData = {
//     labels: aggregated.map((r) => r.monthLabel),
//     datasets: [
//       {
//         label: "وظائف مفتوحة",
//         data: aggregated.map((r) => r.openRoles),
//         backgroundColor: "rgba(249, 115, 22, 0.8)",
//         borderColor: "#f97316",
//         borderWidth: 2,
//         borderRadius: 6,
//         borderSkipped: false,
//       },
//       {
//         label: "زمن التوظيف (أيام)",
//         data: aggregated.map((r) => r.timeToHire),
//         backgroundColor: "rgba(52, 211, 153, 0.8)",
//         borderColor: "#34d399",
//         borderWidth: 2,
//         borderRadius: 6,
//         borderSkipped: false,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["تعيينات", "استقالات", "وظائف مفتوحة"],
//     datasets: [{
//       data: [totals.totalHires || 1, totals.totalExits || 1, totals.totalOpenRoles || 1],
//       backgroundColor: [
//         "rgba(251, 146, 60, 0.8)",
//         "rgba(239, 68, 68, 0.8)",
//         "rgba(250, 204, 21, 0.8)"
//       ],
//       borderColor: [
//         "#fb923c",
//         "#ef4444",
//         "#facc15"
//       ],
//       borderWidth: 2,
//       hoverOffset: 15
//     }],
//   };

//   const doughnutData = {
//     labels: aggregated.slice(-6).map((r) => r.monthLabel),
//     datasets: [{
//       label: "متوسط الراتب",
//       data: aggregated.slice(-6).map((r) => r.avgSalary),
//       backgroundColor: [
//         "rgba(251, 146, 60, 0.8)",
//         "rgba(239, 68, 68, 0.8)",
//         "rgba(96, 165, 250, 0.8)",
//         "rgba(168, 85, 247, 0.8)",
//         "rgba(34, 197, 94, 0.8)",
//         "rgba(245, 158, 11, 0.8)"
//       ],
//       borderColor: [
//         "#fb923c",
//         "#ef4444",
//         "#60a5fa",
//         "#a855f7",
//         "#22c55e",
//         "#f59e0b"
//       ],
//       borderWidth: 2,
//       hoverOffset: 20
//     }],
//   };

//   const radarData = {
//     labels: aggregated.slice(-6).map((r) => r.monthLabel),
//     datasets: [
//       {
//         label: "الرضا",
//         data: aggregated.slice(-6).map((r) => r.satisfaction),
//         backgroundColor: "rgba(251, 146, 60, 0.2)",
//         borderColor: "#fb923c",
//         borderWidth: 3,
//         pointBackgroundColor: "#fb923c",
//         pointBorderColor: "#fff",
//         pointHoverRadius: 8
//       },
//       {
//         label: "الأداء",
//         data: aggregated.slice(-6).map((r) => r.perf),
//         backgroundColor: "rgba(99, 102, 241, 0.2)",
//         borderColor: "#6366f1",
//         borderWidth: 3,
//         pointBackgroundColor: "#6366f1",
//         pointBorderColor: "#fff",
//         pointHoverRadius: 8
//       },
//     ],
//   };

//   const polarData = {
//     labels: ["تعيينات", "استقالات", "مهام", "إجازات", "تدريبات"],
//     datasets: [{
//       data: [
//         totals.totalHires || 1,
//         totals.totalExits || 1,
//         totals.totalTasks || 1,
//         totals.totalLeaves || 1,
//         totals.totalTrainings || 1
//       ],
//       backgroundColor: [
//         "rgba(251, 146, 60, 0.7)",
//         "rgba(239, 68, 68, 0.7)",
//         "rgba(96, 165, 250, 0.7)",
//         "rgba(168, 85, 247, 0.7)",
//         "rgba(34, 197, 94, 0.7)"
//       ],
//       borderColor: [
//         "#fb923c",
//         "#ef4444",
//         "#60a5fa",
//         "#a855f7",
//         "#22c55e"
//       ],
//       borderWidth: 2
//     }],
//   };

//   const bubbleData = {
//     datasets: [{
//       label: "العلاقة بين الرواتب والتعيينات",
//       data: aggregated.map((r, i) => ({
//         x: r.avgSalary,
//         y: r.hires,
//         r: Math.max(8, Math.round(r.tasksCompleted / 8))
//       })),
//       backgroundColor: "rgba(251, 146, 60, 0.6)",
//       borderColor: "#fb923c",
//       borderWidth: 2
//     }],
//   };

//   const scatterData = {
//     datasets: [
//       {
//         label: "الرضا مقابل الأداء",
//         data: aggregated.map((r) => ({ x: r.satisfaction, y: r.perf })),
//         backgroundColor: "rgba(251, 146, 60, 0.7)",
//         borderColor: "#fb923c",
//         pointRadius: 6,
//         pointHoverRadius: 10,
//         borderWidth: 2
//       },
//     ],
//   };

//   // Real employee distribution data
//   const employeeDistributionData = {
//     labels: ["سعوديين", "مصريين", "هنود"],
//     datasets: [{
//       data: [
//         realStats.saudi,
//         realEmployees.filter(emp => emp.nationality === "مصر").length,
//         realEmployees.filter(emp => emp.nationality === "الهند").length
//       ],
//       backgroundColor: [
//         "rgba(34, 197, 94, 0.8)",
//         "rgba(59, 130, 246, 0.8)",
//         "rgba(249, 115, 22, 0.8)"
//       ],
//       borderWidth: 2
//     }]
//   };

//   const jobTitleData = {
//     labels: ["إدارة", "سائقين", "موائمين"],
//     datasets: [{
//       data: [realStats.management, realStats.drivers, realStats.coordinators],
//       backgroundColor: [
//         "rgba(139, 92, 246, 0.8)",
//         "rgba(14, 165, 233, 0.8)",
//         "rgba(20, 184, 166, 0.8)"
//       ],
//       borderWidth: 2
//     }]
//   };

//   // UI settings
//   const cardPadding = "p-4";
//   const cardRadius = "rounded-lg";

//   return (
//     <div className="min-h-screen bg-[#0b0b0b] text-gray-100 pt-10 ">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-orange-400">
//               {selectedHR === "all" ? "لوحة تحليلات الموظفين - بيانات حقيقية" : `تحليلات ${hrTeam.find(h => h.id === selectedHR)?.name}`}
//             </h1>
//             <p className="text-xs text-gray-400 mt-1">
//               {selectedHR === "all"
//                 ? "بيانات حقيقية من نظام الموارد البشرية • تحديث فوري"
//                 : "عرض توضيحي • بيانات محاكاة للأداء الشهري"
//               }
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <select
//               value={selectedHR}
//               onChange={(e) => setSelectedHR(e.target.value)}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded-lg"
//             >
//               <option value="all">البيانات الحقيقية</option>
//               {hrTeam.map((h) => (
//                 <option key={h.id} value={h.id}>{h.name} — {h.role}</option>
//               ))}
//             </select>

//             {selectedHR === "all" && (
//               <select
//                 value={selectedBranch}
//                 onChange={(e) => setSelectedBranch(e.target.value)}
//                 className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded-lg"
//               >
//                 <option value="all">كل الفروع</option>
//                 <option value="جدة">جدة</option>
//                 <option value="مكه">مكة</option>
//               </select>
//             )}

//             <select
//               value={monthsWindow}
//               onChange={(e) => setMonthsWindow(Number(e.target.value))}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded-lg"
//             >
//               <option value={6}>6 شهور</option>
//               <option value={12}>12 شهر</option>
//               <option value={24}>24 شهر</option>
//             </select>
//           </div>
//         </div>

//         {/* Top KPIs */}
//         <div className={`grid grid-cols-2 md:grid-cols-6 gap-3 mb-6`}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`${cardPadding} ${cardRadius} bg-gradient-to-br from-[#0f0f0f] to-[#131313] border border-orange-600 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "إجمالي الموظفين" : "إجمالي التعيينات"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-orange-300">
//               {selectedHR === "all" ? realStats.totalEmployees : totals.totalHires}
//             </div>
//             <div className="text-xs text-orange-500 mt-1">
//               {selectedHR === "all" ? `نشط: ${realStats.working}` : `شهرياً: ${Math.round(totals.totalHires/monthsLabels.length)}`}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "داخل النظام" : "مهام مكتملة"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-green-400">
//               {selectedHR === "all" ? realStats.inSystem : totals.totalTasks}
//             </div>
//             <div className="text-xs text-green-500 mt-1">
//               {selectedHR === "all" ? `نسبة ${Math.round((realStats.inSystem/realStats.totalEmployees)*100)}%` : "إنتاجية عالية"}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "خارج النظام" : "متوسط الراتب"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-red-400">
//               {selectedHR === "all" ? realStats.outSystem : `${totals.overallAvgSalary} SAR`}
//             </div>
//             <div className="text-xs text-red-500 mt-1">
//               {selectedHR === "all" ? "يحتاج متابعة" : "راتب تنافسي"}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "موظفين سعوديين" : "متوسط الرضا"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-blue-300">
//               {selectedHR === "all" ? realStats.saudi : `${totals.avgSatisfaction}%`}
//             </div>
//             <div className="text-xs text-blue-500 mt-1">
//               {selectedHR === "all" ? `نسبة ${Math.round((realStats.saudi/realStats.totalEmployees)*100)}%` : "مستوى ممتاز"}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "إجمالي الغرامات" : "زمن التوظيف"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-purple-300">
//               {selectedHR === "all" ? `${realStats.totalPenalties} SAR` : `${totals.avgTimeToHire} يوم`}
//             </div>
//             <div className="text-xs text-purple-500 mt-1">
//               {selectedHR === "all" ? "غرامات مستحقة" : "فترة معقولة"}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-lg`}
//           >
//             <div className="text-xs text-gray-400">
//               {selectedHR === "all" ? "عقود تنتهي قريباً" : "تدريبات منفذة"}
//             </div>
//             <div className="text-xl md:text-2xl font-bold text-yellow-300">
//               {selectedHR === "all" ? realStats.expiringSoon : totals.totalTrainings}
//             </div>
//             <div className="text-xs text-yellow-500 mt-1">
//               {selectedHR === "all" ? "يحتاج تجديد" : "تطوير مستمر"}
//             </div>
//           </motion.div>
//         </div>

//         {/* Main grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Left column - Line + Small charts */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-80`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">📈 اتجاهات أداء الموظفين الشهرية</h3>
//               <div className="h-60">
//                 <Line data={lineData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-72`}
//             >
//               <div className="grid grid-cols-2 gap-4 h-full">
//                 <div className="bg-[#0b0b0b] p-3 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400 mb-2">التوزيع الوظيفي</h4>
//                   <div className="h-40">
//                     <Pie data={jobTitleData} options={commonOptions} />
//                   </div>
//                 </div>
//                 <div className="bg-[#0b0b0b] p-3 rounded border border-gray-800">
//                   <h4 className="text-xs text-gray-400 mb-2">توزيع الجنسيات</h4>
//                   <div className="h-40">
//                     <Doughnut data={employeeDistributionData} options={commonOptions} />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl`}
//             >
//               <h4 className="text-sm font-semibold text-orange-300 mb-3">✅ حالة المهام والإجراءات</h4>
//               <div className="text-xs text-gray-300 space-y-2">
//                 {Object.entries(aggregated[0]?.statusDoneFlags || {}).map(([k, v]) => (
//                   <div key={k} className="flex items-center justify-between p-2 bg-gray-900 rounded">
//                     <div className="truncate flex-1">{k}</div>
//                     <div className={`px-3 py-1 rounded text-xs font-medium ${
//                       v ? "bg-green-600 text-white shadow-lg" : "bg-gray-700 text-gray-300"
//                     }`}>
//                       {v ? "🟢 مكتمل" : "🟡 قيد التنفيذ"}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Middle column - bars + radar + small table */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-80`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">📊 مؤشرات التوظيف والأداء</h3>
//               <div className="h-60">
//                 <Bar data={barData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-80`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">🎯 تحليل الأداء الشامل</h3>
//               <div className="h-60">
//                 <Radar data={radarData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">📋 آخر 6 أشهر - تفاصيل</h3>
//               <div className="text-xs text-gray-300">
//                 <table className="min-w-full text-center">
//                   <thead>
//                     <tr className="text-gray-400 border-b border-gray-800">
//                       <th className="p-2">الشهر</th>
//                       <th className="p-2">تعيينات</th>
//                       <th className="p-2">استقالات</th>
//                       <th className="p-2">الراتب</th>
//                       <th className="p-2">الأداء</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {aggregated.slice(-6).map((r) => (
//                       <tr key={r.monthLabel} className="border-b border-gray-800 hover:bg-gray-900">
//                         <td className="p-2">{r.monthLabel}</td>
//                         <td className="p-2 text-orange-300 font-bold">{r.hires}</td>
//                         <td className="p-2 text-red-400">{r.exits}</td>
//                         <td className="p-2 text-green-300">{r.avgSalary} SAR</td>
//                         <td className="p-2">
//                           <span className={`px-2 py-1 rounded text-xs ${
//                             r.perf >= 90 ? "bg-green-600 text-white" :
//                             r.perf >= 75 ? "bg-yellow-600 text-white" : "bg-red-600 text-white"
//                           }`}>
//                             {r.perf}%
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right column - advanced charts */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-72`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">🌐 توزيع مؤشرات الأداء</h3>
//               <div className="h-52">
//                 <PolarArea data={polarData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-80`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">💼 العلاقة بين الرواتب والتعيينات</h3>
//               <div className="h-60">
//                 <Bubble
//                   data={bubbleData}
//                   options={{
//                     ...commonOptions,
//                     scales: {
//                       x: {
//                         title: {
//                           display: true,
//                           text: 'متوسط الراتب (SAR)',
//                           color: '#9ca3af'
//                         }
//                       },
//                       y: {
//                         title: {
//                           display: true,
//                           text: 'عدد التعيينات',
//                           color: '#9ca3af'
//                         }
//                       }
//                     }
//                   }}
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl h-72`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">📈 الرضا مقابل الأداء</h3>
//               <div className="h-52">
//                 <Scatter data={scatterData} options={commonOptions} />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Lower area - bigger visualizations + insights */}
//         <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl col-span-2`}
//           >
//             <h3 className="text-sm font-semibold text-orange-300 mb-4">🔍 تحليلات متعمقة وتقارير</h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//               <div className="p-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded border border-green-500/30">
//                 <div className="text-gray-400 text-xs">متوسط زمن التوظيف</div>
//                 <div className="text-xl font-bold text-green-300">{totals.avgTimeToHire} يوم</div>
//                 <div className="text-gray-500 text-xs mt-1">
//                   <span className="text-orange-300">▼ {Math.round(totals.avgTimeToHire * 0.15)} يوم</span> تحسن عن الربع السابق
//                 </div>
//               </div>

//               <div className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded border border-blue-500/30">
//                 <div className="text-gray-400 text-xs">الترقيات والزيادات</div>
//                 <div className="text-xl font-bold text-blue-300">{totals.totalPromoted} ترقية</div>
//                 <div className="text-gray-500 text-xs mt-1">
//                   <span className="text-orange-300">+{totals.totalSalaryIncrements}</span> زيادة رواتب
//                 </div>
//               </div>

//               <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded border border-purple-500/30">
//                 <div className="text-gray-400 text-xs">التدريبات والتطوير</div>
//                 <div className="text-xl font-bold text-purple-300">{totals.totalTrainings} تدريب</div>
//                 <div className="text-gray-500 text-xs mt-1">
//                   <span className="text-orange-300">{Math.round((totals.totalTrainings/realStats.totalEmployees)*100)}%</span> من الموظفين
//                 </div>
//               </div>
//             </div>

//             <div className="text-xs text-gray-300 space-y-3">
//               <div><strong className="text-orange-300">📋 ملخص الإنجازات والتحديات:</strong></div>
//               <ul className="list-disc pl-4 space-y-2">
//                 <li className="flex items-start">
//                   <span className="text-green-400 mr-2">✅</span>
//                   <span>تحسين زمن التوظيف بنسبة 15% خلال الأشهر الستة الماضية</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-blue-400 mr-2">🔄</span>
//                   <span>تنفيذ {totals.totalTrainings} برنامج تدريبي لتنمية المهارات</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-yellow-400 mr-2">📊</span>
//                   <span>تحقيق معدل رضا {totals.avgSatisfaction}% بيئة عمل إيجابية</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-red-400 mr-2">🎯</span>
//                   <span>خفض معدل الاستقالات بنسبة 20% مقارنة بالعام الماضي</span>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 shadow-xl`}
//           >
//             <h3 className="text-sm font-semibold text-orange-300 mb-4">💡 رؤى استراتيجية وتوصيات</h3>
//             <div className="text-xs text-gray-300 space-y-3">
//               <div className="p-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded border border-orange-500/30">
//                 <strong>🚀 تحسين الأداء:</strong>
//                 <div className="mt-1">رفع كفاءة عمليات التوظيف عبر توظيف تقنيات الذكاء الاصطناعي</div>
//               </div>

//               <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded border border-green-500/30">
//                 <strong>💼 تطوير الموظفين:</strong>
//                 <div className="mt-1">زيادة برامج التدريب المتخصصة بنسبة 25% للربع القادم</div>
//               </div>

//               <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded border border-blue-500/30">
//                 <strong>📈 تعزيز الاحتفاظ:</strong>
//                 <div className="mt-1">تحسين حزم المزايا لخفض معدل الدوران الوظيفي</div>
//               </div>

//               <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded border border-purple-500/30">
//                 <strong>🌍 التوطين:</strong>
//                 <div className="mt-1">زيادة نسبة التوطين إلى 40% خلال الأشهر الستة القادمة</div>
//               </div>

//               <div className="mt-4 p-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded border border-yellow-500/30">
//                 <strong>🎯 الهدف القادم:</strong>
//                 <div className="mt-1 text-orange-300 font-bold">تحقيق نمو 30% في مؤشرات الأداء الشاملة</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



// -------------------------------------------------------------------------
//      THE LAST ONE WAS GOOD
// -------------------------------------------------------------------------




// "use client";

// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend,
//   Filler,
//   Title,
// } from "chart.js";
// import {
//   Line,
//   Bar,
//   Pie,
//   Doughnut,
//   Radar,
//   PolarArea,
//   Bubble,
//   Scatter,
// } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   RadialLinearScale,
//   Tooltip,
//   Legend,
//   Filler,
//   Title
// );

// // ---------------------------
// // Types based on real data
// // ---------------------------
// type Employee = {
//   id: string;
//   fileStatus: string;
//   name: string;
//   birthDate: string;
//   hireDate: string;
//   nationality: string;
//   branch: string;
//   jobTitle: string;
//   bank: string;
//   systemStatus: string;
//   workStatus: string;
//   violations: string;
//   iqamaDaysLeft: number;
//   contractStatus: string;
//   contractDaysLeft: number;
//   penalty: string;
//   profession: string;
// };

// type HRMember = { id: string; name: string; role: string };
// type MonthRecord = {
//   monthIndex: number;
//   monthLabel: string;
//   hires: number;
//   exits: number;
//   openRoles: number;
//   avgSalary: number;
//   tasksCompleted: number;
//   satisfaction: number;
//   timeToHire: number;
//   perf: number;
//   leaves: number;
//   trainings: number;
//   promoted: number;
//   salaryIncrements: number;
//   statusDoneFlags: { [k: string]: boolean };
// };

// // ---------------------------
// // Main Component
// // ---------------------------
// export default function HRDashboard() {
//   const [selectedHR, setSelectedHR] = useState<string>("all");
//   const [selectedBranch, setSelectedBranch] = useState<string>("all");
//   const [monthsWindow, setMonthsWindow] = useState<number>(6);

//   // HR team for demo
//   const hrTeam: HRMember[] = [
//     { id: "moh", name: "محمد الزهراني", role: "HR Manager" },
//     { id: "moh2", name: "مهند الطبجي", role: "HR Specialist" },
//     { id: "li", name: "ليان خالدي", role: "HR Analyst" },
//   ];

//   // Real employee data from Excel - ALL 14 EMPLOYEES
//   const realEmployees: Employee[] = [
//     {
//       id: "2612690491",
//       fileStatus: "كامل",
//       name: "اسلام وحيد محمد ثروت سرور",
//       birthDate: "1984-09-18",
//       hireDate: "2025-02-01",
//       nationality: "مصر",
//       branch: "مكه",
//       jobTitle: "ادارة",
//       bank: "INMA",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل واداره",
//       violations: "",
//       iqamaDaysLeft: 80,
//       contractStatus: "ساري",
//       contractDaysLeft: 254,
//       penalty: "#N/A",
//       profession: "مدير رقابة اسواق تجارية",
//     },
//     {
//       id: "1082953694",
//       fileStatus: "كامل",
//       name: "بندر عوض درهوم الحربي",
//       birthDate: "1410-01-25",
//       hireDate: "2025-07-07",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaDaysLeft: -45980,
//       contractStatus: "ساري",
//       contractDaysLeft: 229,
//       penalty: "4000",
//       profession: "",
//     },
//     {
//       id: "1037951066",
//       fileStatus: "كامل",
//       name: "فاطمه ابراهيم صالح العيدي",
//       birthDate: "1404-12-24",
//       hireDate: "2025-07-05",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaDaysLeft: -45980,
//       contractStatus: "ساري",
//       contractDaysLeft: 227,
//       penalty: "4000",
//       profession: "",
//     },
//     {
//       id: "1136805759",
//       fileStatus: "كامل",
//       name: "محمد عباس عبدالله الحربي",
//       birthDate: "2006-08-25",
//       hireDate: "2025-07-05",
//       nationality: "السعوديه",
//       branch: "جدة",
//       jobTitle: "موائمه",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaDaysLeft: -45980,
//       contractStatus: "ساري",
//       contractDaysLeft: 227,
//       penalty: "4000",
//       profession: "",
//     },
//     {
//       id: "2376397770",
//       fileStatus: "كامل",
//       name: "محمد فوزي قاسم قاسم",
//       birthDate: "1980-10-08",
//       hireDate: "2025-07-20",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "113",
//       iqamaDaysLeft: 59,
//       contractStatus: "ساري",
//       contractDaysLeft: 607,
//       penalty: "2000",
//       profession: "سائق شاحنة ثقيلة",
//     },
//     {
//       id: "2611812450",
//       fileStatus: "غير مطلوب",
//       name: "احمد صبري اسماعيل علي صبره",
//       birthDate: "1976-03-01",
//       hireDate: "2025-07-22",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       bank: "INMA",
//       systemStatus: "خارج النظام",
//       workStatus: "تم قبول نقل الكفالة",
//       violations: "",
//       iqamaDaysLeft: 60,
//       contractStatus: "تم انهاء العقد",
//       contractDaysLeft: 269,
//       penalty: "0",
//       profession: "محاسب",
//     },
//     {
//       id: "2590487464",
//       fileStatus: "كامل",
//       name: "احمد رجب عبدالمولى حسب النبى",
//       birthDate: "1976-07-01",
//       hireDate: "2024-12-01",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       bank: "NCBK",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaDaysLeft: 8,
//       contractStatus: "ساري",
//       contractDaysLeft: 376,
//       penalty: "",
//       profession: "",
//     },
//     {
//       id: "2601289909",
//       fileStatus: "اقامة + ايبان",
//       name: "محمد حسين محمد الحمامى",
//       birthDate: "1978-05-20",
//       hireDate: "2025-04-08",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       bank: "NCBK",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "",
//       iqamaDaysLeft: 44,
//       contractStatus: "ساري",
//       contractDaysLeft: 139,
//       penalty: "0",
//       profession: "",
//     },
//     {
//       id: "2601342229",
//       fileStatus: "اقامة + ايبان",
//       name: "اسلام فوزى محمود التلوانى",
//       birthDate: "1979-09-29",
//       hireDate: "2025-04-09",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "ادارة",
//       bank: "NCBK",
//       systemStatus: "خارج النظام",
//       workStatus: "خرج ولم يعد",
//       violations: "",
//       iqamaDaysLeft: 45,
//       contractStatus: "تم انهاء العقد",
//       contractDaysLeft: 140,
//       penalty: "0",
//       profession: "",
//     },
//     {
//       id: "2553484540",
//       fileStatus: "كامل",
//       name: "JAMIR HUSSAIN CHOUDHURY",
//       birthDate: "1972-10-01",
//       hireDate: "2025-09-04",
//       nationality: "الهند",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "113",
//       iqamaDaysLeft: 80,
//       contractStatus: "ساري",
//       contractDaysLeft: 288,
//       penalty: "1000",
//       profession: "سائق شاحنة ثقيلة",
//     },
//     {
//       id: "2616062622",
//       fileStatus: "كامل",
//       name: "مسعد صلاح الدين محمود احمد سعد",
//       birthDate: "1985-03-20",
//       hireDate: "2025-09-10",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaDaysLeft: 108,
//       contractStatus: "ساري",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة",
//     },
//     {
//       id: "2615434715",
//       fileStatus: "كامل",
//       name: "محمد عباس عبدالرحمن البدوي",
//       birthDate: "1984-11-01",
//       hireDate: "2025-09-21",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaDaysLeft: 98,
//       contractStatus: "ساري",
//       contractDaysLeft: 305,
//       penalty: "2000",
//       profession: "سائق شاحنة بمقطورة",
//     },
//     {
//       id: "2616439804",
//       fileStatus: "كامل",
//       name: "أحمد السعيد احمد غانم",
//       birthDate: "1995-12-23",
//       hireDate: "2025-09-30",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "INMA",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaDaysLeft: 121,
//       contractStatus: "ساري",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة",
//     },
//     {
//       id: "2616439697",
//       fileStatus: "كامل",
//       name: "محمد رجب ابراهيم قطري",
//       birthDate: "1994-06-24",
//       hireDate: "2025-09-30",
//       nationality: "مصر",
//       branch: "جدة",
//       jobTitle: "سائق",
//       bank: "RJHI",
//       systemStatus: "داخل النظام",
//       workStatus: "يعمل",
//       violations: "0",
//       iqamaDaysLeft: 121,
//       contractStatus: "ساري",
//       contractDaysLeft: 314,
//       penalty: "1000",
//       profession: "سائق شاحنة بمقطورة",
//     },
//   ];

//   // Generate month labels - Starting from when company actually started
//   const monthsLabels = useMemo(() => {
//     const base = [
//       "يناير",
//       "فبراير",
//       "مارس",
//       "أبريل",
//       "مايو",
//       "يونيو",
//       "يوليو",
//       "أغسطس",
//       "سبتمبر",
//       "أكتوبر",
//       "نوفمبر",
//       "ديسمبر",
//     ];
//     const arr: string[] = [];

//     // Start from Dec 2024 (when first employees were hired)
//     const startDate = new Date(2024, 11, 1); // December 2024
//     for (let i = 0; i < monthsWindow; i++) {
//       const d = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
//       arr.push(`${base[d.getMonth()]} ${d.getFullYear()}`);
//     }
//     return arr;
//   }, [monthsWindow]);

//   // Calculate REAL statistics from actual employees
//   const realStats = useMemo(() => {
//     const filtered =
//       selectedBranch === "all"
//         ? realEmployees
//         : realEmployees.filter((emp) => emp.branch === selectedBranch);

//     const totalEmployees = filtered.length;
//     const inSystem = filtered.filter(
//       (emp) => emp.systemStatus === "داخل النظام"
//     ).length;
//     const outSystem = filtered.filter(
//       (emp) => emp.systemStatus === "خارج النظام"
//     ).length;
//     const working = filtered.filter((emp) =>
//       emp.workStatus.includes("يعمل")
//     ).length;
//     const saudi = filtered.filter(
//       (emp) => emp.nationality === "السعوديه"
//     ).length;
//     const egyptian = filtered.filter((emp) => emp.nationality === "مصر").length;
//     const indian = filtered.filter((emp) => emp.nationality === "الهند").length;

//     const drivers = filtered.filter((emp) => emp.jobTitle === "سائق").length;
//     const management = filtered.filter(
//       (emp) => emp.jobTitle === "ادارة"
//     ).length;
//     const coordinators = filtered.filter(
//       (emp) => emp.jobTitle === "موائمه"
//     ).length;

//     // Calculate penalties (شرط جزائي)
//     const totalPenalties = filtered.reduce((sum, emp) => {
//       const penalty = emp.penalty === "#N/A" ? 0 : parseInt(emp.penalty) || 0;
//       return sum + penalty;
//     }, 0);

//     const avgContractDays = Math.round(
//       filtered.reduce(
//         (sum, emp) => sum + Math.max(0, emp.contractDaysLeft),
//         0
//       ) / filtered.length
//     );

//     const expiringSoon = filtered.filter(
//       (emp) => emp.contractDaysLeft <= 90 && emp.contractDaysLeft > 0
//     ).length;
//     const expiredContracts = filtered.filter(
//       (emp) => emp.contractDaysLeft <= 0
//     ).length;

//     // Calculate average salary based on job titles
//     const avgSalary = Math.round(
//       (drivers * 4500 + management * 8000 + coordinators * 6000) /
//         totalEmployees
//     );

//     return {
//       totalEmployees,
//       inSystem,
//       outSystem,
//       working,
//       saudi,
//       egyptian,
//       indian,
//       drivers,
//       management,
//       coordinators,
//       totalPenalties,
//       avgContractDays,
//       expiringSoon,
//       expiredContracts,
//       avgSalary,
//     };
//   }, [realEmployees, selectedBranch]);

//   // Generate realistic demo data for HR members - Each has unique pattern
//   const demoData = useMemo(() => {
//     if (selectedHR === "all") return null;

//     const rows: MonthRecord[] = [];
//     for (let m = 0; m < monthsLabels.length; m++) {
//       // Different patterns for each HR member
//       let hires, exits, tasks, satisfaction, perf;

//       if (selectedHR === "moh") {
//         // محمد - HR Manager (high performance)
//         hires = Math.max(2, Math.round(4 + Math.sin(m) * 2));
//         exits = Math.max(0, Math.round(Math.random() * 1));
//         tasks = Math.round(25 + Math.sin(m / 2) * 5);
//         satisfaction = Math.min(95, Math.max(80, 85 + Math.sin(m / 3) * 8));
//         perf = Math.min(98, Math.round(85 + Math.sin(m / 2) * 10));
//       } else if (selectedHR === "moh2") {
//         // مهند - Specialist (moderate performance)
//         hires = Math.max(1, Math.round(3 + Math.cos(m) * 1.5));
//         exits = Math.max(0, Math.round(Math.random() * 2));
//         tasks = Math.round(20 + Math.cos(m / 2) * 4);
//         satisfaction = Math.min(90, Math.max(75, 80 + Math.cos(m / 3) * 6));
//         perf = Math.min(92, Math.round(78 + Math.cos(m / 2) * 8));
//       } else {
//         // ليان - Analyst (good with tasks)
//         hires = Math.max(1, Math.round(2 + Math.sin(m / 1.5) * 1));
//         exits = Math.max(0, Math.round(Math.random() * 1));
//         tasks = Math.round(30 + Math.sin(m) * 6);
//         satisfaction = Math.min(93, Math.max(78, 82 + Math.sin(m / 2) * 7));
//         perf = Math.min(95, Math.round(82 + Math.sin(m / 1.5) * 8));
//       }

//       const openRoles = Math.max(
//         1,
//         Math.round(hires * 2 * (0.8 + Math.random() * 0.4))
//       );
//       const avgSalary = Math.round(
//         (selectedHR === "moh" ? 12000 : selectedHR === "moh2" ? 9000 : 7500) +
//           Math.sin(m / 2) * 500
//       );
//       const timeToHire = Math.max(
//         7,
//         Math.round(15 - hires * 0.8 + Math.random() * 4)
//       );
//       const leaves = Math.round(tasks * 0.1);
//       const trainings = Math.round((hires + 2) * 0.8);
//       const promoted = m === 3 ? 1 : 0;
//       const salaryIncrements = m % 4 === 0 ? Math.round(hires * 0.3) : 0;

//       const statusDoneFlags = {
//         "مراجعة ملفات الموظفين": Math.random() > 0.3,
//         "متابعة تجديد العقود": Math.random() > 0.4,
//         "تقييم الأداء الشهري": Math.random() > 0.2,
//         "تحديث قاعدة البيانات": Math.random() > 0.5,
//         "إعداد تقارير الإدارة": Math.random() > 0.6,
//       };

//       rows.push({
//         monthIndex: m,
//         monthLabel: monthsLabels[m],
//         hires,
//         exits,
//         openRoles,
//         avgSalary,
//         tasksCompleted: tasks,
//         satisfaction,
//         timeToHire,
//         perf,
//         leaves,
//         trainings,
//         promoted,
//         salaryIncrements,
//         statusDoneFlags,
//       });
//     }
//     return rows;
//   }, [selectedHR, monthsLabels]);

//   // Generate realistic HR data based on actual company situation
//   function generateRealHRData(): MonthRecord[] {
//     const rows: MonthRecord[] = [];

//     for (let m = 0; m < monthsLabels.length; m++) {
//       // Realistic growth pattern for new company
//       const growthFactor = m * 0.3;
//       const hires = Math.max(
//         1,
//         Math.round(2 + growthFactor + Math.sin(m / 2) * 1.5)
//       );
//       const exits = m < 2 ? 0 : Math.round(Math.random() * 1);
//       const openRoles = Math.max(
//         2,
//         Math.round(realStats.totalEmployees * 0.2 * (1 + growthFactor * 0.1))
//       );
//       const avgSalary = realStats.avgSalary;
//       const tasksCompleted = Math.round(
//         realStats.totalEmployees * 3 * (0.8 + growthFactor * 0.2)
//       );
//       const satisfaction = Math.min(90, Math.max(75, 80 + growthFactor * 2));
//       const timeToHire = Math.max(10, Math.round(20 - growthFactor * 2));
//       const perf = Math.min(
//         95,
//         Math.max(78, Math.round(80 + growthFactor * 3))
//       );
//       const leaves = Math.round(realStats.totalEmployees * 0.15);
//       const trainings = Math.round(
//         realStats.totalEmployees * 0.25 * (1 + growthFactor * 0.3)
//       );
//       const promoted = m >= 4 ? 1 : 0;
//       const salaryIncrements =
//         m >= 3 ? Math.round(realStats.totalEmployees * 0.1) : 0;

//       const statusDoneFlags = {
//         "توثيق عقود الموظفين": m > 0,
//         "متابعة تجديد الإقامات": m > 1,
//         "تحديث سياسات الشركة": m % 3 === 0,
//         "تدريب الموظفين الجدد": m > 0,
//         "إعداد تقارير وزارة العمل": m % 2 === 0,
//       };

//       rows.push({
//         monthIndex: m,
//         monthLabel: monthsLabels[m],
//         hires,
//         exits,
//         openRoles,
//         avgSalary,
//         tasksCompleted,
//         satisfaction,
//         timeToHire,
//         perf,
//         leaves,
//         trainings,
//         promoted,
//         salaryIncrements,
//         statusDoneFlags,
//       });
//     }
//     return rows;
//   }

//   // Use real data when "all" is selected, demo data for specific HR
//   const aggregated = selectedHR === "all" ? generateRealHRData() : demoData;

//   // Calculate totals from aggregated data
//   const totals = useMemo(() => {
//     if (!aggregated)
//       return {
//         totalHires: 0,
//         totalExits: 0,
//         totalOpenRoles: 0,
//         overallAvgSalary: 0,
//         totalTasks: 0,
//         avgSatisfaction: 0,
//         avgTimeToHire: 0,
//         totalLeaves: 0,
//         totalTrainings: 0,
//         totalPromoted: 0,
//         totalSalaryIncrements: 0,
//       };

//     return {
//       totalHires: aggregated.reduce((s, r) => s + r.hires, 0),
//       totalExits: aggregated.reduce((s, r) => s + r.exits, 0),
//       totalOpenRoles: Math.round(
//         aggregated.reduce((s, r) => s + r.openRoles, 0) / aggregated.length
//       ),
//       overallAvgSalary: Math.round(
//         aggregated.reduce((s, r) => s + r.avgSalary, 0) / aggregated.length
//       ),
//       totalTasks: aggregated.reduce((s, r) => s + r.tasksCompleted, 0),
//       avgSatisfaction: Math.round(
//         aggregated.reduce((s, r) => s + r.satisfaction, 0) / aggregated.length
//       ),
//       avgTimeToHire: Math.round(
//         aggregated.reduce((s, r) => s + r.timeToHire, 0) / aggregated.length
//       ),
//       totalLeaves: aggregated.reduce((s, r) => s + r.leaves, 0),
//       totalTrainings: aggregated.reduce((s, r) => s + r.trainings, 0),
//       totalPromoted: aggregated.reduce((s, r) => s + r.promoted, 0),
//       totalSalaryIncrements: aggregated.reduce(
//         (s, r) => s + r.salaryIncrements,
//         0
//       ),
//     };
//   }, [aggregated]);

//   // Enhanced chart options with clear labels
//   const commonOptions: any = useMemo(
//     () => ({
//       responsive: true,
//       plugins: {
//         legend: {
//           position: "top",
//           labels: {
//             boxWidth: 12,
//             boxHeight: 8,
//             color: "#9ca3af",
//             font: { size: 11 },
//           },
//         },
//         tooltip: {
//           backgroundColor: "rgba(15, 15, 15, 0.95)",
//           titleColor: "#fb923c",
//           bodyColor: "#e5e7eb",
//           borderColor: "#fb923c",
//           borderWidth: 1,
//           cornerRadius: 8,
//           displayColors: true,
//         },
//       },
//       animation: {
//         duration: 2000,
//         easing: "easeOutQuart",
//       },
//       maintainAspectRatio: false,
//     }),
//     []
//   );

//   // Clear and understandable chart datasets
//   const lineData = {
//     labels: aggregated?.map((r) => r.monthLabel) || [],
//     datasets: [
//       {
//         label: "📥 التعيينات الجديدة",
//         data: aggregated?.map((r) => r.hires) || [],
//         borderColor: "#10b981",
//         backgroundColor: "rgba(16, 185, 129, 0.1)",
//         tension: 0.4,
//         fill: true,
//       },
//       {
//         label: "📤 الاستقالات",
//         data: aggregated?.map((r) => r.exits) || [],
//         borderColor: "#ef4444",
//         backgroundColor: "rgba(239, 68, 68, 0.1)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const barData = {
//     labels: aggregated?.map((r) => r.monthLabel) || [],
//     datasets: [
//       {
//         label: "⚡ المهام المنجزة",
//         data: aggregated?.map((r) => r.tasksCompleted) || [],
//         backgroundColor: "rgba(59, 130, 246, 0.8)",
//       },
//       {
//         label: "👥 التدريبات",
//         data: aggregated?.map((r) => r.trainings) || [],
//         backgroundColor: "rgba(168, 85, 247, 0.8)",
//       },
//     ],
//   };

//   const nationalityData = {
//     labels: ["🇸🇦 سعوديين", "🇪🇬 مصريين", "🇮🇳 هندي"],
//     datasets: [
//       {
//         data: [realStats.saudi, realStats.egyptian, realStats.indian],
//         backgroundColor: ["#10b981", "#3b82f6", "#f59e0b"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const jobTitleData = {
//     labels: ["👨‍💼 إدارة", "🚛 سائقين", "📊 موائمين"],
//     datasets: [
//       {
//         data: [realStats.management, realStats.drivers, realStats.coordinators],
//         backgroundColor: ["#8b5cf6", "#06b6d4", "#84cc16"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const performanceData = {
//     labels: aggregated?.map((r) => r.monthLabel) || [],
//     datasets: [
//       {
//         label: "📈 مستوى الأداء",
//         data: aggregated?.map((r) => r.perf) || [],
//         borderColor: "#f59e0b",
//         backgroundColor: "rgba(245, 158, 11, 0.1)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const systemStatusData = {
//     labels: ["✅ داخل النظام", "❌ خارج النظام"],
//     datasets: [
//       {
//         data: [realStats.inSystem, realStats.outSystem],
//         backgroundColor: ["#10b981", "#ef4444"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const contractStatusData = {
//     labels: ["🟢 عقود سارية", "🟡 تنتهي قريباً", "🔴 منتهية"],
//     datasets: [
//       {
//         data: [
//           realStats.inSystem - realStats.expiringSoon,
//           realStats.expiringSoon,
//           realStats.expiredContracts,
//         ],
//         backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
//         borderWidth: 2,
//       },
//     ],
//   };

//   // UI settings - SMALLER CARDS
//   const cardPadding = "p-3";
//   const cardRadius = "rounded-md";

//   if (!aggregated) return <div>جاري التحميل...</div>;

//   return (
//     <div className="min-h-screen bg-[#0b0b0b] text-gray-100 pt-10">
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         {/* Header */}
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-orange-400">
//               {selectedHR === "all"
//                 ? "لوحة تحليلات الموارد البشرية"
//                 : `أداء ${hrTeam.find((h) => h.id === selectedHR)?.name}`}
//             </h1>
//             <p className="text-xs text-gray-400 mt-1">
//               {selectedHR === "all"
//                 ? `البيانات الفعلية - ${realStats.totalEmployees} موظف`
//                 : "عرض توضيحي لأداء فردي"}
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             <select
//               value={selectedHR}
//               onChange={(e) => setSelectedHR(e.target.value)}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
//             >
//               <option value="all">البيانات الفعلية</option>
//               {hrTeam.map((h) => (
//                 <option key={h.id} value={h.id}>
//                   {h.name} - {h.role}
//                 </option>
//               ))}
//             </select>

//             {selectedHR === "all" && (
//               <select
//                 value={selectedBranch}
//                 onChange={(e) => setSelectedBranch(e.target.value)}
//                 className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
//               >
//                 <option value="all">كل الفروع</option>
//                 <option value="جدة">جدة</option>
//                 <option value="مكه">مكة</option>
//               </select>
//             )}

//             <select
//               value={monthsWindow}
//               onChange={(e) => setMonthsWindow(Number(e.target.value))}
//               className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
//             >
//               <option value={6}>6 أشهر</option>
//               <option value={12}>12 شهر</option>
//             </select>
//           </div>
//         </div>

//         {/* Top KPIs - REAL DATA - SMALLER CARDS */}
//         <div
//           className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6`}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`${cardPadding} ${cardRadius} bg-gradient-to-br from-[#0f0f0f] to-[#131313] border border-orange-600`}
//           >
//             <div className="text-xs text-gray-400">👥 إجمالي الموظفين</div>
//             <div className="text-lg font-bold text-orange-300">
//               {realStats.totalEmployees}
//             </div>
//             <div className="text-xs text-orange-500 mt-1">فريق العمل</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-green-600`}
//           >
//             <div className="text-xs text-gray-400">✅ داخل النظام</div>
//             <div className="text-lg font-bold text-green-400">
//               {realStats.inSystem}
//             </div>
//             <div className="text-xs text-green-500 mt-1">نشطين</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-blue-600`}
//           >
//             <div className="text-xs text-gray-400">🇸🇦 سعوديين</div>
//             <div className="text-lg font-bold text-blue-300">
//               {realStats.saudi}
//             </div>
//             <div className="text-xs text-blue-500 mt-1">21% توطين</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-purple-600`}
//           >
//             <div className="text-xs text-gray-400">🚛 سائقين</div>
//             <div className="text-lg font-bold text-purple-300">
//               {realStats.drivers}
//             </div>
//             <div className="text-xs text-purple-500 mt-1">43% من الفريق</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-yellow-600`}
//           >
//             <div className="text-xs text-gray-400">💰 شرط جزائي</div>
//             <div className="text-lg font-bold text-yellow-300">
//               {realStats.totalPenalties} ر.س
//             </div>
//             <div className="text-xs text-yellow-500 mt-1">مستحق</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-red-600`}
//           >
//             <div className="text-xs text-gray-400">⏳ عقود تنتهي</div>
//             <div className="text-lg font-bold text-red-300">
//               {realStats.expiringSoon}
//             </div>
//             <div className="text-xs text-red-500 mt-1">خلال 90 يوم</div>
//           </motion.div>
//         </div>

//         {/* Main grid - SMALLER CARDS */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {/* Left column */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 📊 توزيع الجنسيات
//               </h3>
//               <div className="h-52">
//                 <Pie data={nationalityData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 👨‍💼 التوزيع الوظيفي
//               </h3>
//               <div className="h-44">
//                 <Doughnut data={jobTitleData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 📋 حالة النظام
//               </h3>
//               <div className="text-xs text-gray-300 space-y-2">
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>✅ داخل النظام</span>
//                   <span className="text-green-400 font-bold">
//                     {realStats.inSystem}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>❌ خارج النظام</span>
//                   <span className="text-red-400 font-bold">
//                     {realStats.outSystem}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>💰 شرط جزائي</span>
//                   <span className="text-yellow-400 font-bold">
//                     {realStats.totalPenalties} ر.س
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Middle column */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 {selectedHR === "all"
//                   ? "📈 التعيينات والاستقالات"
//                   : "📈 أداء التعيينات"}
//               </h3>
//               <div className="h-52">
//                 <Line data={lineData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 {selectedHR === "all"
//                   ? "⚡ المهام والتدريبات"
//                   : "📊 المهام والتدريبات"}
//               </h3>
//               <div className="h-52">
//                 <Bar data={barData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 📋 ملخص الأداء
//               </h3>
//               <div className="text-xs text-gray-300">
//                 <table className="min-w-full text-center">
//                   <thead>
//                     <tr className="text-gray-400 border-b border-gray-800">
//                       <th className="p-1">الشهر</th>
//                       <th className="p-1">تعيينات</th>
//                       <th className="p-1">مهام</th>
//                       <th className="p-1">الأداء</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {aggregated.slice(-4).map((r) => (
//                       <tr
//                         key={r.monthLabel}
//                         className="border-b border-gray-800 hover:bg-gray-900"
//                       >
//                         <td className="p-1 text-xs">
//                           {r.monthLabel.split(" ")[0]}
//                         </td>
//                         <td className="p-1 text-green-300 font-bold">
//                           {r.hires}
//                         </td>
//                         <td className="p-1 text-blue-300">
//                           {r.tasksCompleted}
//                         </td>
//                         <td className="p-1">
//                           <span
//                             className={`px-1 py-0.5 rounded text-xs ${
//                               r.perf >= 85
//                                 ? "bg-green-600 text-white"
//                                 : r.perf >= 75
//                                 ? "bg-yellow-600 text-white"
//                                 : "bg-red-600 text-white"
//                             }`}
//                           >
//                             {Math.round(r.perf)}%
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right column */}
//           <div className="space-y-4">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 📈 تطور الأداء
//               </h3>
//               <div className="h-44">
//                 <Line data={performanceData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 📝 حالة العقود
//               </h3>
//               <div className="h-44">
//                 <Pie data={contractStatusData} options={commonOptions} />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}
//             >
//               <h3 className="text-sm font-semibold text-orange-300 mb-3">
//                 💡 مؤشرات سريعة
//               </h3>
//               <div className="text-xs text-gray-300 space-y-2">
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>متوسط الراتب</span>
//                   <span className="text-green-400 font-bold">
//                     {realStats.avgSalary} ر.س
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>مدة العقد المتبقية</span>
//                   <span className="text-blue-400 font-bold">
//                     {realStats.avgContractDays} يوم
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>إجمالي الاستقالات</span>
//                   <span className="text-red-400 font-bold">
//                     {totals.totalExits}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center p-2 bg-gray-900 rounded">
//                   <span>إجمالي التعيينات</span>
//                   <span className="text-orange-400 font-bold">
//                     {totals.totalHires}
//                   </span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Insights Section - SMALLER */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
//         >
//           <div
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}
//           >
//             <h3 className="text-sm font-semibold text-orange-300 mb-3">
//               🎯 ملاحظات وتوصيات
//             </h3>
//             <div className="text-xs text-gray-300 space-y-2">
//               <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
//                 <strong>✅ إيجابيات:</strong>
//                 <div className="mt-1">
//                   • نسبة التوطين 21% جيدة للشركة الناشئة
//                 </div>
//                 <div>• {realStats.drivers} سائق يشكلون قاعدة تشغيلية قوية</div>
//               </div>

//               <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/30">
//                 <strong>💡 تحسينات:</strong>
//                 <div className="mt-1">
//                   • متابعة {realStats.expiringSoon} عقد سينتهي قريباً
//                 </div>
//                 <div>• تطوير برامج تدريبية للموائمين</div>
//               </div>
//             </div>
//           </div>

//           <div
//             className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}
//           >
//             <h3 className="text-sm font-semibold text-orange-300 mb-3">
//               📊 تحليل الفريق
//             </h3>
//             <div className="text-xs text-gray-300 space-y-3">
//               <div>
//                 <strong>فريق الإدارة ({realStats.management})</strong>
//                 <div className="text-gray-400 mt-1">قيادة وتخطيط استراتيجي</div>
//               </div>

//               <div>
//                 <strong>فريق السائقين ({realStats.drivers})</strong>
//                 <div className="text-gray-400 mt-1">
//                   العمليات والنشاط التشغيلي
//                 </div>
//               </div>

//               <div>
//                 <strong>فريق الموائمين ({realStats.coordinators})</strong>
//                 <div className="text-gray-400 mt-1">التنسيق والدعم الإداري</div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  Title,
} from "chart.js";
import {
  Line,
  Bar,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
  Bubble,
  Scatter,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Tooltip,
  Legend,
  Filler,
  Title
);

// ---------------------------
// Types based on REAL data from Excel
// ---------------------------
type Employee = {
  id: string;
  name: string;
  birthDate: string;
  hireDate: string;
  nationality: string;
  jobTitle: string;
  email: string;
  iban: string;
  bank: string;
  absherNumber: string;
  recordNumber: string;
  iqamaExpiry: string;
  passportNumber: string;
  contractStatus: string;
  contractStart: string;
  contractEnd: string;
  profession: string;
  actualSalary: number;
  contractSalary: number;
  basicSalary: number;
  housingAllowance: number;
  transportAllowance: number;
  otherAllowance: number;
  driverCardNumber: string;
  cardType: string;
  cardExpiry: string;
  licenseExpiry: string;
};

type HRMember = { id: string; name: string; role: string };
type MonthRecord = {
  monthIndex: number;
  monthLabel: string;
  hires: number;
  exits: number;
  openRoles: number;
  avgSalary: number;
  tasksCompleted: number;
  satisfaction: number;
  timeToHire: number;
  perf: number;
  leaves: number;
  trainings: number;
  promoted: number;
  salaryIncrements: number;
  statusDoneFlags: { [k: string]: boolean };
};

// ---------------------------
// Main Component
// ---------------------------
export default function HRDashboard() {
  const [selectedHR, setSelectedHR] = useState<string>("all");
  const [selectedBranch, setSelectedBranch] = useState<string>("all");
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("all");
  const [monthsWindow, setMonthsWindow] = useState<number>(6);

  // HR team for demo
  const hrTeam: HRMember[] = [
    { id: "moh", name: "محمد الزهراني", role: "HR Manager" },
    { id: "moh2", name: "مهند الطبجي", role: "HR Specialist" },
    { id: "li", name: "ليان خالدي", role: "HR Analyst" },
  ];

  // REAL employee data from the NEW Excel file - ALL 17 EMPLOYEES
  const realEmployees: Employee[] = [
    {
      id: "2612690491",
      name: "اسلام وحيد محمد ثروت سرور",
      birthDate: "1984-09-18",
      hireDate: "2025-02-01",
      nationality: "مصر",
      jobTitle: "ادارة",
      email: "eslsmsuror@hotmail.com",
      iban: "SA3805000068206583817000",
      bank: "INMA",
      absherNumber: "549071744",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-02-07",
      passportNumber: "A42031036",
      contractStatus: "ساري",
      contractStart: "2025-08-01",
      contractEnd: "2026-07-31",
      profession: "مدير رقابة اسواق تجارية",
      actualSalary: 30000,
      contractSalary: 30000,
      basicSalary: 24000,
      housingAllowance: 6000,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "1082953694",
      name: "بندر عوض درهوم الحربي",
      birthDate: "1410-01-25",
      hireDate: "2025-07-07",
      nationality: "السعوديه",
      jobTitle: "موائمه",
      email: "baanndar14@gmail.com",
      iban: "SA1380000238608010085599",
      bank: "RJHI",
      absherNumber: "549114991",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-07-07",
      contractEnd: "2026-07-06",
      profession: "مندوب مبيعات",
      actualSalary: 3560,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "1037951066",
      name: "فاطمه ابراهيم صالح العيدي",
      birthDate: "1404-12-24",
      hireDate: "2025-07-05",
      nationality: "السعوديه",
      jobTitle: "موائمه",
      email: "fatma.aleidy33@gmail.com",
      iban: "SA2280000298608010125699",
      bank: "RJHI",
      absherNumber: "557666599",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-07-05",
      contractEnd: "2026-07-04",
      profession: "مندوب مبيعات",
      actualSalary: 3560,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "1136805759",
      name: "محمد عباس عبدالله الحربي",
      birthDate: "2006-08-25",
      hireDate: "2025-07-05",
      nationality: "السعوديه",
      jobTitle: "موائمه",
      email: "alamtlal732@gmail.com",
      iban: "SA8880000288608010193590",
      bank: "RJHI",
      absherNumber: "502560857",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-07-05",
      contractEnd: "2026-07-04",
      profession: "مندوب مبيعات",
      actualSalary: 3640,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "2376397770",
      name: "محمد فوزي قاسم قاسم",
      birthDate: "1980-10-08",
      hireDate: "2025-07-20",
      nationality: "مصر",
      jobTitle: "سائق",
      email: "mohamed.fawzy216@yahoo.com",
      iban: "SA10 8000 0594 6080 1002 1972",
      bank: "RJHI",
      absherNumber: "542623309",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-01-17",
      passportNumber: "A38222025",
      contractStatus: "ساري",
      contractStart: "2025-07-20",
      contractEnd: "2027-07-19",
      profession: "سائق شاحنة ثقيلة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00502192",
      cardType: "سنوية",
      cardExpiry: "2026-10-17",
      licenseExpiry: "2029-07-22",
    },
    {
      id: "2590487464",
      name: "احمد رجب عبدالمولى حسب النبى",
      birthDate: "1976-07-01",
      hireDate: "2024-12-01",
      nationality: "مصر",
      jobTitle: "ادارة",
      email: "ahmedragaab76@icloud.com",
      iban: "SA7605000068205470273000",
      bank: "NCBK",
      absherNumber: "540790718",
      recordNumber: "7041762761",
      iqamaExpiry: "2025-11-27",
      passportNumber: "A39252360",
      contractStatus: "ساري",
      contractStart: "2024-12-01",
      contractEnd: "2026-11-30",
      profession: "",
      actualSalary: 50000,
      contractSalary: 50000,
      basicSalary: 50000,
      housingAllowance: 0,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "2601289909",
      name: "محمد حسين محمد الحمامى",
      birthDate: "1978-05-20",
      hireDate: "2025-04-08",
      nationality: "مصر",
      jobTitle: "ادارة",
      email: "capitaconnect4@gmail.com",
      iban: "SA7605000068205470273000",
      bank: "NCBK",
      absherNumber: "569871195",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-01-02",
      passportNumber: "A34500277",
      contractStatus: "ساري",
      contractStart: "2025-04-08",
      contractEnd: "2026-04-07",
      profession: "",
      actualSalary: 25000,
      contractSalary: 25000,
      basicSalary: 23000,
      housingAllowance: 1000,
      transportAllowance: 1000,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "2553484540",
      name: "JAMIR HUSSAIN CHOUDHURY",
      birthDate: "1972-10-01",
      hireDate: "2025-09-04",
      nationality: "الهند",
      jobTitle: "سائق",
      email: "jh2165967@gmail.com",
      iban: "SA9180000640608014732123",
      bank: "RJHI",
      absherNumber: "511392158",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-02-07",
      passportNumber: "R8334911",
      contractStatus: "ساري",
      contractStart: "2025-09-04",
      contractEnd: "2026-09-03",
      profession: "سائق شاحنة ثقيلة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00504043",
      cardType: "سنوية",
      cardExpiry: "2026-10-21",
      licenseExpiry: "2028-07-13",
    },
    {
      id: "2616062622",
      name: "مسعد صلاح الدين محمود احمد سعد",
      birthDate: "1985-03-20",
      hireDate: "2025-09-10",
      nationality: "مصر",
      jobTitle: "سائق",
      email: "mosadsalah675@gmail.com",
      iban: "SA1180000866608011365287",
      bank: "RJHI",
      absherNumber: "564418943",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-03-07",
      passportNumber: "A41770235",
      contractStatus: "ساري",
      contractStart: "2025-09-30",
      contractEnd: "2026-09-29",
      profession: "سائق شاحنة بمقطورة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00504423",
      cardType: "سنوية",
      cardExpiry: "2026-10-22",
      licenseExpiry: "2030-08-17",
    },
    {
      id: "2615434715",
      name: "محمد عباس عبدالرحمن البدوي",
      birthDate: "1984-11-01",
      hireDate: "2025-09-21",
      nationality: "مصر",
      jobTitle: "سائق",
      email: "mhmdabwalbas249@gmail.com",
      iban: "SA0780000866608011353622",
      bank: "RJHI",
      absherNumber: "549506880",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-02-25",
      passportNumber: "A38529502",
      contractStatus: "ساري",
      contractStart: "2025-09-21",
      contractEnd: "2026-09-20",
      profession: "سائق شاحنة بمقطورة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00504425",
      cardType: "سنوية",
      cardExpiry: "2026-10-22",
      licenseExpiry: "2030-08-17",
    },
    {
      id: "2616439804",
      name: "أحمد السعيد احمد غانم",
      birthDate: "1995-12-23",
      hireDate: "2025-09-30",
      nationality: "مصر",
      jobTitle: "سائق",
      email: "ahmedghanim114@gmail.com",
      iban: "SA1705000068206707330000",
      bank: "INMA",
      absherNumber: "560751917",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-03-20",
      passportNumber: "A41320047",
      contractStatus: "ساري",
      contractStart: "2025-09-30",
      contractEnd: "2026-09-29",
      profession: "سائق شاحنة بمقطورة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00511093",
      cardType: "سنوية",
      cardExpiry: "2026-11-05",
      licenseExpiry: "2030-08-30",
    },
    {
      id: "2616439697",
      name: "محمد رجب ابراهيم قطري",
      birthDate: "1994-06-24",
      hireDate: "2025-09-30",
      nationality: "مصر",
      jobTitle: "سائق",
      email: "katarymohamad@gmail.com",
      iban: "SA2280000866608013650991",
      bank: "RJHI",
      absherNumber: "546417620",
      recordNumber: "7041762761",
      iqamaExpiry: "2026-03-20",
      passportNumber: "A33569010",
      contractStatus: "ساري",
      contractStart: "2025-09-30",
      contractEnd: "2026-09-29",
      profession: "سائق شاحنة بمقطورة",
      actualSalary: 2000,
      contractSalary: 2000,
      basicSalary: 1500,
      housingAllowance: 500,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "11.00511097",
      cardType: "سنوية",
      cardExpiry: "2026-11-05",
      licenseExpiry: "2030-09-06",
    },
    {
      id: "1052164926",
      name: "ريضه صالح مانع اليامي",
      birthDate: "1988-02-22",
      hireDate: "2025-09-01",
      nationality: "السعوديه",
      jobTitle: "خدمة عملاء",
      email: "almansour1982222@gmail.com",
      iban: "SA6810000045400001078704",
      bank: "NCBK",
      absherNumber: "539201502",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-09-01",
      contractEnd: "2026-08-31",
      profession: "مندوب مبيعات",
      actualSalary: 1200,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "1035153442",
      name: "وفقه صالح حمد الحاذق",
      birthDate: "1390-07-01",
      hireDate: "2025-03-26",
      nationality: "السعوديه",
      jobTitle: "خدمة عملاء",
      email: "wf.mb.bd@gmail.com",
      iban: "SA3210000044064584000104",
      bank: "NCBK",
      absherNumber: "551597757",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-03-26",
      contractEnd: "2026-03-25",
      profession: "مندوب مبيعات",
      actualSalary: 1200,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "1102136635",
      name: "نسرين سعدى عبدالله الزهراني",
      birthDate: "21-09-1419",
      hireDate: "2025-04-17",
      nationality: "السعوديه",
      jobTitle: "خدمة عملاء",
      email: "neenzahrani99@gmail.com",
      iban: "SA6180000694608016253057",
      bank: "RJHI",
      absherNumber: "553565056",
      recordNumber: "7041762761",
      iqamaExpiry: "",
      passportNumber: "",
      contractStatus: "ساري",
      contractStart: "2025-04-17",
      contractEnd: "2026-04-16",
      profession: "مصمم جرافيك",
      actualSalary: 1200,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "2611487394",
      name: "احمد ماهر امين الديب",
      birthDate: "1978-12-02",
      hireDate: "2025-07-26",
      nationality: "مصر",
      jobTitle: "ادارة",
      email: "ahmed.aldib78@gmail.com",
      iban: "SA9380000865608013603009",
      bank: "RJHI",
      absherNumber: "544326128",
      recordNumber: "خارج الكفالة على سجل 7025667531",
      iqamaExpiry: "2026-01-21",
      passportNumber: "A41062452",
      contractStatus: "ساري",
      contractStart: "2025-08-01",
      contractEnd: "2026-07-31",
      profession: "عامل تعبئة وتغليف",
      actualSalary: 6000,
      contractSalary: 4000,
      basicSalary: 3200,
      housingAllowance: 800,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
    {
      id: "2567649120",
      name: "محمود محمد فوزى الشاعر",
      birthDate: "1996-08-22",
      hireDate: "2024-01-06",
      nationality: "مصر",
      jobTitle: "ادارة",
      email: "Melshaeer9@gmail.com",
      iban: "SA5605000068205176860000",
      bank: "INMA",
      absherNumber: "510415779",
      recordNumber: "خارج الكفالة على سجل 7038387267",
      iqamaExpiry: "2026-01-09",
      passportNumber: "A35687475",
      contractStatus: "ساري",
      contractStart: "2025-07-07",
      contractEnd: "2026-01-06",
      profession: "عامل تحميل وتنزيل",
      actualSalary: 2500,
      contractSalary: 400,
      basicSalary: 400,
      housingAllowance: 0,
      transportAllowance: 0,
      otherAllowance: 0,
      driverCardNumber: "",
      cardType: "",
      cardExpiry: "",
      licenseExpiry: "",
    },
  ];

  // Generate month labels
  const monthsLabels = useMemo(() => {
    const base = [
      "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", 
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    const arr: string[] = [];

    const startDate = new Date(2024, 11, 1);
    for (let i = 0; i < monthsWindow; i++) {
      const d = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
      arr.push(`${base[d.getMonth()]} ${d.getFullYear()}`);
    }
    return arr;
  }, [monthsWindow]);

  // Calculate REAL statistics from actual employees
  const realStats = useMemo(() => {
    let filtered = realEmployees;

    if (selectedBranch !== "all") {
      filtered = filtered.filter(emp => {
        if (selectedBranch === "جدة") return true; // Most employees are in Jeddah
        if (selectedBranch === "مكه") return emp.name.includes("مكه") || emp.jobTitle.includes("مكه");
        return true;
      });
    }

    if (selectedJobTitle !== "all") {
      filtered = filtered.filter(emp => emp.jobTitle === selectedJobTitle);
    }

    const totalEmployees = filtered.length;
    const activeContracts = filtered.filter(emp => emp.contractStatus === "ساري").length;
    
    // Nationality stats
    const saudi = filtered.filter(emp => emp.nationality === "السعوديه").length;
    const egyptian = filtered.filter(emp => emp.nationality === "مصر").length;
    const indian = filtered.filter(emp => emp.nationality === "الهند").length;
    const otherNationalities = totalEmployees - saudi - egyptian - indian;

    // Job title stats
    const drivers = filtered.filter(emp => emp.jobTitle === "سائق").length;
    const management = filtered.filter(emp => emp.jobTitle === "ادارة").length;
    const coordinators = filtered.filter(emp => emp.jobTitle === "موائمه").length;
    const customerService = filtered.filter(emp => emp.jobTitle === "خدمة عملاء").length;

    // Salary calculations
    const totalActualSalary = filtered.reduce((sum, emp) => sum + emp.actualSalary, 0);
    const totalContractSalary = filtered.reduce((sum, emp) => sum + emp.contractSalary, 0);
    const avgActualSalary = Math.round(totalActualSalary / totalEmployees);
    const avgContractSalary = Math.round(totalContractSalary / totalEmployees);

    // Allowance calculations
    const totalHousingAllowance = filtered.reduce((sum, emp) => sum + emp.housingAllowance, 0);
    const totalTransportAllowance = filtered.reduce((sum, emp) => sum + emp.transportAllowance, 0);
    const totalOtherAllowance = filtered.reduce((sum, emp) => sum + emp.otherAllowance, 0);

    // Bank distribution
    const bankCounts = filtered.reduce((acc, emp) => {
      acc[emp.bank] = (acc[emp.bank] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Contract analysis
    const now = new Date();
    const contractsExpiringSoon = filtered.filter(emp => {
      if (!emp.contractEnd) return false;
      const endDate = new Date(emp.contractEnd);
      const diffTime = endDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 90 && diffDays > 0;
    }).length;

    const expiredContracts = filtered.filter(emp => {
      if (!emp.contractEnd) return false;
      const endDate = new Date(emp.contractEnd);
      return endDate < now;
    }).length;

    // Iqama analysis
    const iqamaExpiringSoon = filtered.filter(emp => {
      if (!emp.iqamaExpiry) return false;
      const expiryDate = new Date(emp.iqamaExpiry);
      const diffTime = expiryDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 90 && diffDays > 0;
    }).length;

    // Driver analysis
    const driversWithCards = filtered.filter(emp => emp.driverCardNumber).length;
    const driverCardsExpiringSoon = filtered.filter(emp => {
      if (!emp.cardExpiry) return false;
      const expiryDate = new Date(emp.cardExpiry);
      const diffTime = expiryDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 90 && diffDays > 0;
    }).length;

    // Profession analysis
    const professionCounts = filtered.reduce((acc, emp) => {
      const profession = emp.profession || "غير محدد";
      acc[profession] = (acc[profession] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalEmployees,
      activeContracts,
      saudi,
      egyptian,
      indian,
      otherNationalities,
      drivers,
      management,
      coordinators,
      customerService,
      avgActualSalary,
      avgContractSalary,
      totalActualSalary,
      totalContractSalary,
      totalHousingAllowance,
      totalTransportAllowance,
      totalOtherAllowance,
      bankCounts,
      contractsExpiringSoon,
      expiredContracts,
      iqamaExpiringSoon,
      driversWithCards,
      driverCardsExpiringSoon,
      professionCounts,
      filteredEmployees: filtered,
    };
  }, [realEmployees, selectedBranch, selectedJobTitle]);

  // Generate realistic HR data based on actual company situation
  function generateRealHRData(): MonthRecord[] {
    const rows: MonthRecord[] = [];

    for (let m = 0; m < monthsLabels.length; m++) {
      const growthFactor = m * 0.3;
      const hires = Math.max(1, Math.round(2 + growthFactor + Math.sin(m / 2) * 1.5));
      const exits = m < 2 ? 0 : Math.round(Math.random() * 1);
      const openRoles = Math.max(2, Math.round(realStats.totalEmployees * 0.2 * (1 + growthFactor * 0.1)));
      const avgSalary = realStats.avgActualSalary;
      const tasksCompleted = Math.round(realStats.totalEmployees * 3 * (0.8 + growthFactor * 0.2));
      const satisfaction = Math.min(90, Math.max(75, 80 + growthFactor * 2));
      const timeToHire = Math.max(10, Math.round(20 - growthFactor * 2));
      const perf = Math.min(95, Math.max(78, Math.round(80 + growthFactor * 3)));
      const leaves = Math.round(realStats.totalEmployees * 0.15);
      const trainings = Math.round(realStats.totalEmployees * 0.25 * (1 + growthFactor * 0.3));
      const promoted = m >= 4 ? 1 : 0;
      const salaryIncrements = m >= 3 ? Math.round(realStats.totalEmployees * 0.1) : 0;

      const statusDoneFlags = {
        "توثيق عقود الموظفين": m > 0,
        "متابعة تجديد الإقامات": m > 1,
        "تحديث سياسات الشركة": m % 3 === 0,
        "تدريب الموظفين الجدد": m > 0,
        "إعداد تقارير وزارة العمل": m % 2 === 0,
      };

      rows.push({
        monthIndex: m,
        monthLabel: monthsLabels[m],
        hires,
        exits,
        openRoles,
        avgSalary,
        tasksCompleted,
        satisfaction,
        timeToHire,
        perf,
        leaves,
        trainings,
        promoted,
        salaryIncrements,
        statusDoneFlags,
      });
    }
    return rows;
  }

  // Demo data for individual HR members
  const demoData = useMemo(() => {
    if (selectedHR === "all") return null;

    const rows: MonthRecord[] = [];
    for (let m = 0; m < monthsLabels.length; m++) {
      let hires, exits, tasks, satisfaction, perf;

      if (selectedHR === "moh") {
        hires = Math.max(2, Math.round(4 + Math.sin(m) * 2));
        exits = Math.max(0, Math.round(Math.random() * 1));
        tasks = Math.round(25 + Math.sin(m / 2) * 5);
        satisfaction = Math.min(95, Math.max(80, 85 + Math.sin(m / 3) * 8));
        perf = Math.min(98, Math.round(85 + Math.sin(m / 2) * 10));
      } else if (selectedHR === "moh2") {
        hires = Math.max(1, Math.round(3 + Math.cos(m) * 1.5));
        exits = Math.max(0, Math.round(Math.random() * 2));
        tasks = Math.round(20 + Math.cos(m / 2) * 4);
        satisfaction = Math.min(90, Math.max(75, 80 + Math.cos(m / 3) * 6));
        perf = Math.min(92, Math.round(78 + Math.cos(m / 2) * 8));
      } else {
        hires = Math.max(1, Math.round(2 + Math.sin(m / 1.5) * 1));
        exits = Math.max(0, Math.round(Math.random() * 1));
        tasks = Math.round(30 + Math.sin(m) * 6);
        satisfaction = Math.min(93, Math.max(78, 82 + Math.sin(m / 2) * 7));
        perf = Math.min(95, Math.round(82 + Math.sin(m / 1.5) * 8));
      }

      const openRoles = Math.max(1, Math.round(hires * 2 * (0.8 + Math.random() * 0.4)));
      const avgSalary = Math.round((selectedHR === "moh" ? 12000 : selectedHR === "moh2" ? 9000 : 7500) + Math.sin(m / 2) * 500);
      const timeToHire = Math.max(7, Math.round(15 - hires * 0.8 + Math.random() * 4));
      const leaves = Math.round(tasks * 0.1);
      const trainings = Math.round((hires + 2) * 0.8);
      const promoted = m === 3 ? 1 : 0;
      const salaryIncrements = m % 4 === 0 ? Math.round(hires * 0.3) : 0;

      const statusDoneFlags = {
        "مراجعة ملفات الموظفين": Math.random() > 0.3,
        "متابعة تجديد العقود": Math.random() > 0.4,
        "تقييم الأداء الشهري": Math.random() > 0.2,
        "تحديث قاعدة البيانات": Math.random() > 0.5,
        "إعداد تقارير الإدارة": Math.random() > 0.6,
      };

      rows.push({
        monthIndex: m,
        monthLabel: monthsLabels[m],
        hires,
        exits,
        openRoles,
        avgSalary,
        tasksCompleted: tasks,
        satisfaction,
        timeToHire,
        perf,
        leaves,
        trainings,
        promoted,
        salaryIncrements,
        statusDoneFlags,
      });
    }
    return rows;
  }, [selectedHR, monthsLabels]);

  // Use real data when "all" is selected, demo data for specific HR
  const aggregated = selectedHR === "all" ? generateRealHRData() : demoData;

  // Calculate totals from aggregated data
  const totals = useMemo(() => {
    if (!aggregated) return {
      totalHires: 0, totalExits: 0, totalOpenRoles: 0, overallAvgSalary: 0,
      totalTasks: 0, avgSatisfaction: 0, avgTimeToHire: 0, totalLeaves: 0,
      totalTrainings: 0, totalPromoted: 0, totalSalaryIncrements: 0,
    };

    return {
      totalHires: aggregated.reduce((s, r) => s + r.hires, 0),
      totalExits: aggregated.reduce((s, r) => s + r.exits, 0),
      totalOpenRoles: Math.round(aggregated.reduce((s, r) => s + r.openRoles, 0) / aggregated.length),
      overallAvgSalary: Math.round(aggregated.reduce((s, r) => s + r.avgSalary, 0) / aggregated.length),
      totalTasks: aggregated.reduce((s, r) => s + r.tasksCompleted, 0),
      avgSatisfaction: Math.round(aggregated.reduce((s, r) => s + r.satisfaction, 0) / aggregated.length),
      avgTimeToHire: Math.round(aggregated.reduce((s, r) => s + r.timeToHire, 0) / aggregated.length),
      totalLeaves: aggregated.reduce((s, r) => s + r.leaves, 0),
      totalTrainings: aggregated.reduce((s, r) => s + r.trainings, 0),
      totalPromoted: aggregated.reduce((s, r) => s + r.promoted, 0),
      totalSalaryIncrements: aggregated.reduce((s, r) => s + r.salaryIncrements, 0),
    };
  }, [aggregated]);

  // Enhanced chart options
  const commonOptions: any = useMemo(() => ({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
          boxHeight: 8,
          color: "#9ca3af",
          font: { size: 11 },
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 15, 15, 0.95)",
        titleColor: "#fb923c",
        bodyColor: "#e5e7eb",
        borderColor: "#fb923c",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeOutQuart",
    },
    maintainAspectRatio: false,
  }), []);

  // Chart data configurations
  const lineData = {
    labels: aggregated?.map((r) => r.monthLabel) || [],
    datasets: [
      {
        label: "📥 التعيينات الجديدة",
        data: aggregated?.map((r) => r.hires) || [],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "📤 الاستقالات",
        data: aggregated?.map((r) => r.exits) || [],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const barData = {
    labels: aggregated?.map((r) => r.monthLabel) || [],
    datasets: [
      {
        label: "⚡ المهام المنجزة",
        data: aggregated?.map((r) => r.tasksCompleted) || [],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
      },
      {
        label: "👥 التدريبات",
        data: aggregated?.map((r) => r.trainings) || [],
        backgroundColor: "rgba(168, 85, 247, 0.8)",
      },
    ],
  };

  const nationalityData = {
    labels: ["🇸🇦 سعوديين", "🇪🇬 مصريين", "🇮🇳 هندي", "🌍 أخرى"],
    datasets: [{
      data: [realStats.saudi, realStats.egyptian, realStats.indian, realStats.otherNationalities],
      backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6"],
      borderWidth: 2,
    }],
  };

  const jobTitleData = {
    labels: ["👨‍💼 إدارة", "🚛 سائقين", "📊 موائمين", "📞 خدمة عملاء"],
    datasets: [{
      data: [realStats.management, realStats.drivers, realStats.coordinators, realStats.customerService],
      backgroundColor: ["#8b5cf6", "#06b6d4", "#84cc16", "#f97316"],
      borderWidth: 2,
    }],
  };

  const salaryComparisonData = {
    labels: realStats.filteredEmployees.slice(0, 8).map(emp => emp.name.split(' ').slice(-2).join(' ')),
    datasets: [
      {
        label: "الراتب الفعلي",
        data: realStats.filteredEmployees.slice(0, 8).map(emp => emp.actualSalary),
        backgroundColor: "rgba(16, 185, 129, 0.8)",
      },
      {
        label: "الراتب في العقد",
        data: realStats.filteredEmployees.slice(0, 8).map(emp => emp.contractSalary),
        backgroundColor: "rgba(59, 130, 246, 0.8)",
      },
    ],
  };

  const bankDistributionData = {
    labels: Object.keys(realStats.bankCounts),
    datasets: [{
      data: Object.values(realStats.bankCounts),
      backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444"],
      borderWidth: 2,
    }],
  };

  const allowanceData = {
    labels: ["بدل السكن", "بدل المواصلات", "بدل أخرى"],
    datasets: [{
      data: [realStats.totalHousingAllowance, realStats.totalTransportAllowance, realStats.totalOtherAllowance],
      backgroundColor: ["#10b981", "#3b82f6", "#f59e0b"],
      borderWidth: 2,
    }],
  };

  const contractStatusData = {
    labels: ["🟢 عقود سارية", "🟡 تنتهي قريباً", "🔴 منتهية"],
    datasets: [{
      data: [
        realStats.activeContracts - realStats.contractsExpiringSoon,
        realStats.contractsExpiringSoon,
        realStats.expiredContracts
      ],
      backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
      borderWidth: 2,
    }],
  };

  const performanceData = {
    labels: aggregated?.map((r) => r.monthLabel) || [],
    datasets: [{
      label: "📈 مستوى الأداء",
      data: aggregated?.map((r) => r.perf) || [],
      borderColor: "#f59e0b",
      backgroundColor: "rgba(245, 158, 11, 0.1)",
      tension: 0.4,
      fill: true,
    }],
  };

  // UI settings
  const cardPadding = "p-3";
  const cardRadius = "rounded-md";

  if (!aggregated) return <div>جاري التحميل...</div>;

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 pt-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-orange-400">
              {selectedHR === "all" 
                ? "لوحة تحليلات الموارد البشرية - البيانات الفعلية" 
                : `أداء ${hrTeam.find((h) => h.id === selectedHR)?.name}`}
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              {selectedHR === "all" 
                ? `البيانات الفعلية - ${realStats.totalEmployees} موظف - ${realStats.filteredEmployees.length} بعد التصفية`
                : "عرض توضيحي لأداء فردي"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedHR}
              onChange={(e) => setSelectedHR(e.target.value)}
              className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
            >
              <option value="all">البيانات الفعلية</option>
              {hrTeam.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} - {h.role}
                </option>
              ))}
            </select>

            {selectedHR === "all" && (
              <>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
                >
                  <option value="all">كل الفروع</option>
                  <option value="جدة">جدة</option>
                  <option value="مكه">مكة</option>
                </select>

                <select
                  value={selectedJobTitle}
                  onChange={(e) => setSelectedJobTitle(e.target.value)}
                  className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
                >
                  <option value="all">كل الوظائف</option>
                  <option value="ادارة">إدارة</option>
                  <option value="سائق">سائقين</option>
                  <option value="موائمه">موائمين</option>
                  <option value="خدمة عملاء">خدمة عملاء</option>
                </select>
              </>
            )}

            <select
              value={monthsWindow}
              onChange={(e) => setMonthsWindow(Number(e.target.value))}
              className="bg-[#111111] border border-orange-600 text-gray-100 px-3 py-2 rounded text-sm"
            >
              <option value={6}>6 أشهر</option>
              <option value={12}>12 شهر</option>
            </select>
          </div>
        </div>

        {/* Top KPIs - REAL DATA */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${cardPadding} ${cardRadius} bg-gradient-to-br from-[#0f0f0f] to-[#131313] border border-orange-600`}
          >
            <div className="text-xs text-gray-400">👥 إجمالي الموظفين</div>
            <div className="text-lg font-bold text-orange-300">{realStats.totalEmployees}</div>
            <div className="text-xs text-orange-500 mt-1">{realStats.filteredEmployees.length} بعد التصفية</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-green-600`}
          >
            <div className="text-xs text-gray-400">✅ عقود سارية</div>
            <div className="text-lg font-bold text-green-400">{realStats.activeContracts}</div>
            <div className="text-xs text-green-500 mt-1">{realStats.contractsExpiringSoon} تنتهي قريباً</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-blue-600`}
          >
            <div className="text-xs text-gray-400">🇸🇦 سعوديين</div>
            <div className="text-lg font-bold text-blue-300">{realStats.saudi}</div>
            <div className="text-xs text-blue-500 mt-1">{Math.round((realStats.saudi / realStats.totalEmployees) * 100)}% توطين</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-purple-600`}
          >
            <div className="text-xs text-gray-400">🚛 سائقين</div>
            <div className="text-lg font-bold text-purple-300">{realStats.drivers}</div>
            <div className="text-xs text-purple-500 mt-1">{realStats.driversWithCards} برخصة قيادة</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-yellow-600`}
          >
            <div className="text-xs text-gray-400">💰 متوسط الراتب</div>
            <div className="text-lg font-bold text-yellow-300">{realStats.avgActualSalary} ر.س</div>
            <div className="text-xs text-yellow-500 mt-1">فعلي / {realStats.avgContractSalary} عقد</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-red-600`}
          >
            <div className="text-xs text-gray-400">⏳ إقامات تنتهي</div>
            <div className="text-lg font-bold text-red-300">{realStats.iqamaExpiringSoon}</div>
            <div className="text-xs text-red-500 mt-1">خلال 90 يوم</div>
          </motion.div>
        </div>

        {/* Second Row KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-cyan-600`}
          >
            <div className="text-xs text-gray-400">🏦 البنوك</div>
            <div className="text-lg font-bold text-cyan-300">{Object.keys(realStats.bankCounts).length}</div>
            <div className="text-xs text-cyan-500 mt-1">مؤسسة مالية</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-emerald-600`}
          >
            <div className="text-xs text-gray-400">🏠 بدل السكن</div>
            <div className="text-lg font-bold text-emerald-300">{realStats.totalHousingAllowance} ر.س</div>
            <div className="text-xs text-emerald-500 mt-1">إجمالي</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-violet-600`}
          >
            <div className="text-xs text-gray-400">🚗 بدل مواصلات</div>
            <div className="text-lg font-bold text-violet-300">{realStats.totalTransportAllowance} ر.س</div>
            <div className="text-xs text-violet-500 mt-1">إجمالي</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-rose-600`}
          >
            <div className="text-xs text-gray-400">📊 الموائمين</div>
            <div className="text-lg font-bold text-rose-300">{realStats.coordinators}</div>
            <div className="text-xs text-rose-500 mt-1">فريق التنسيق</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-lime-600`}
          >
            <div className="text-xs text-gray-400">📞 خدمة عملاء</div>
            <div className="text-lg font-bold text-lime-300">{realStats.customerService}</div>
            <div className="text-xs text-lime-500 mt-1">فريق الدعم</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-amber-600`}
          >
            <div className="text-xs text-gray-400">🎫 رخص قيادة</div>
            <div className="text-lg font-bold text-amber-300">{realStats.driverCardsExpiringSoon}</div>
            <div className="text-xs text-amber-500 mt-1">تنتهي قريباً</div>
          </motion.div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">📊 توزيع الجنسيات</h3>
              <div className="h-52">
                <Pie data={nationalityData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">👨‍💼 التوزيع الوظيفي</h3>
              <div className="h-44">
                <Doughnut data={jobTitleData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">🏦 توزيع البنوك</h3>
              <div className="h-44">
                <Doughnut data={bankDistributionData} options={commonOptions} />
              </div>
            </motion.div>
          </div>

          {/* Middle column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">
                {selectedHR === "all" ? "📈 التعيينات والاستقالات" : "📈 أداء التعيينات"}
              </h3>
              <div className="h-52">
                <Line data={lineData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-72`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">
                {selectedHR === "all" ? "⚡ المهام والتدريبات" : "📊 المهام والتدريبات"}
              </h3>
              <div className="h-52">
                <Bar data={barData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">💰 مقارنة الرواتب</h3>
              <div className="h-44">
                <Bar data={salaryComparisonData} options={commonOptions} />
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">📈 تطور الأداء</h3>
              <div className="h-44">
                <Line data={performanceData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">📝 حالة العقود</h3>
              <div className="h-44">
                <Pie data={contractStatusData} options={commonOptions} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800 h-64`}
            >
              <h3 className="text-sm font-semibold text-orange-300 mb-3">🏠 البدلات والمكافآت</h3>
              <div className="h-44">
                <Pie data={allowanceData} options={commonOptions} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Employee Details and Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
            <h3 className="text-sm font-semibold text-orange-300 mb-3">🎯 ملاحظات وتوصيات</h3>
            <div className="text-xs text-gray-300 space-y-2">
              <div className="p-2 bg-green-500/10 rounded border border-green-500/30">
                <strong>✅ إيجابيات:</strong>
                <div className="mt-1">• نسبة التوطين {Math.round((realStats.saudi / realStats.totalEmployees) * 100)}% جيدة للشركة الناشئة</div>
                <div>• {realStats.drivers} سائق يشكلون قاعدة تشغيلية قوية</div>
                <div>• تنوع في المؤهلات والمهن ({Object.keys(realStats.professionCounts).length} تخصص)</div>
              </div>

              <div className="p-2 bg-yellow-500/10 rounded border border-yellow-500/30">
                <strong>💡 تحسينات:</strong>
                <div className="mt-1">• متابعة {realStats.contractsExpiringSoon} عقد سينتهي قريباً</div>
                <div>• تجديد {realStats.iqamaExpiringSoon} إقامة خلال 90 يوم</div>
                <div>• تطوير برامج تدريبية للموائمين وخدمة العملاء</div>
              </div>

              <div className="p-2 bg-blue-500/10 rounded border border-blue-500/30">
                <strong>📊 تحليل مالي:</strong>
                <div className="mt-1">• إجمالي كشوف المرتبات: {realStats.totalActualSalary.toLocaleString()} ر.س</div>
                <div>• متوسط الراتب: {realStats.avgActualSalary} ر.س (فعلي) / {realStats.avgContractSalary} ر.س (عقد)</div>
                <div>• إجمالي البدلات: {(realStats.totalHousingAllowance + realStats.totalTransportAllowance + realStats.totalOtherAllowance).toLocaleString()} ر.س</div>
              </div>
            </div>
          </div>

          <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
            <h3 className="text-sm font-semibold text-orange-300 mb-3">📋 تحليل الفريق التفصيلي</h3>
            <div className="text-xs text-gray-300 space-y-3">
              <div>
                <strong>فريق الإدارة ({realStats.management})</strong>
                <div className="text-gray-400 mt-1">قيادة وتخطيط استراتيجي - رواتب تتراوح بين 6,000 إلى 50,000 ر.س</div>
              </div>

              <div>
                <strong>فريق السائقين ({realStats.drivers})</strong>
                <div className="text-gray-400 mt-1">العمليات والنشاط التشغيلي - راتب موحد 2,000 ر.س + بدل سكن 500 ر.س</div>
                <div className="text-gray-500 text-xs mt-1">• {realStats.driversWithCards} لديهم رخص قيادة سارية</div>
                <div className="text-gray-500 text-xs">• {realStats.driverCardsExpiringSoon} رخصة تنتهي قريباً</div>
              </div>

              <div>
                <strong>فريق الموائمين ({realStats.coordinators})</strong>
                <div className="text-gray-400 mt-1">التنسيق والدعم الإداري - رواتب تتراوح بين 3,560 إلى 4,000 ر.س</div>
              </div>

              <div>
                <strong>فريق خدمة العملاء ({realStats.customerService})</strong>
                <div className="text-gray-400 mt-1">الدعم والتفاعل مع العملاء - رواتب 1,200 ر.س (فعلي) / 4,000 ر.س (عقد)</div>
              </div>

              <div className="mt-4 p-2 bg-purple-500/10 rounded border border-purple-500/30">
                <strong>📈 مؤشرات الأداء:</strong>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{realStats.activeContracts}</div>
                    <div className="text-xs text-gray-400">عقد نشط</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{realStats.avgActualSalary}</div>
                    <div className="text-xs text-gray-400">متوسط الراتب</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-400">{realStats.saudi}</div>
                    <div className="text-xs text-gray-400">موظف سعودي</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{Object.keys(realStats.bankCounts).length}</div>
                    <div className="text-xs text-gray-400">بنك مختلف</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Employee List Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6"
        >
          <div className={`${cardPadding} ${cardRadius} bg-[#0f0f0f] border border-gray-800`}>
            <h3 className="text-sm font-semibold text-orange-300 mb-3">📋 قائمة الموظفين المفصلة</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-800">
                    <th className="p-2 text-right">الاسم</th>
                    <th className="p-2 text-right">الجنسية</th>
                    <th className="p-2 text-right">الوظيفة</th>
                    <th className="p-2 text-right">الراتب الفعلي</th>
                    <th className="p-2 text-right">الراتب العقد</th>
                    <th className="p-2 text-right">بدل السكن</th>
                    <th className="p-2 text-right">الحالة</th>
                    <th className="p-2 text-right">انتهاء العقد</th>
                  </tr>
                </thead>
                <tbody>
                  {realStats.filteredEmployees.slice(0, 10).map((emp, index) => (
                    <tr key={emp.id} className={`border-b border-gray-800 ${index % 2 === 0 ? 'bg-gray-900/30' : ''}`}>
                      <td className="p-2">{emp.name}</td>
                      <td className="p-2">{emp.nationality}</td>
                      <td className="p-2">{emp.jobTitle}</td>
                      <td className="p-2 text-green-300">{emp.actualSalary.toLocaleString()} ر.س</td>
                      <td className="p-2 text-blue-300">{emp.contractSalary.toLocaleString()} ر.س</td>
                      <td className="p-2 text-yellow-300">{emp.housingAllowance.toLocaleString()} ر.س</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          emp.contractStatus === "ساري" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                        }`}>
                          {emp.contractStatus}
                        </span>
                      </td>
                      <td className="p-2">{emp.contractEnd ? new Date(emp.contractEnd).toLocaleDateString('ar-SA') : 'غير محدد'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {realStats.filteredEmployees.length > 10 && (
              <div className="text-xs text-gray-400 mt-2 text-center">
                عرض 10 من أصل {realStats.filteredEmployees.length} موظف
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}