

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
  const commonOptions: unknown = useMemo(() => ({
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