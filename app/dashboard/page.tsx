"use client";

import Link from "next/link";
import apiClient from "@/service/api_service";
import { useEffect } from "react";

const stats = [
  {
    label: "Total Pengeluaran Bulan Ini",
    value: "Rp 2.450.000",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "from-emerald-500 to-cyan-500",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
  },
  {
    label: "Langganan Aktif",
    value: "12",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    label: "Pembayaran Mendatang",
    value: "5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
  },
  {
    label: "Kategori",
    value: "8",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    ),
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
  },
];

const categories = [
  {
    name: "Software",
    count: 5,
    total: "Rp 1.200.000",
    color: "bg-emerald-500",
  },
  { name: "Subscription", count: 4, total: "Rp 850.000", color: "bg-blue-500" },
  { name: "Cloud", count: 2, total: "Rp 400.000", color: "bg-cyan-500" },
  { name: "Lainnya", count: 1, total: "Rp 0", color: "bg-slate-400" },
];

const upcomingPayments = [
  {
    name: "Netflix",
    amount: "Rp 54.000",
    dueDate: "10 Feb 2026",
    category: "Subscription",
  },
  {
    name: "GitHub Pro",
    amount: "Rp 84.000",
    dueDate: "12 Feb 2026",
    category: "Software",
  },
  {
    name: "AWS",
    amount: "Rp 320.000",
    dueDate: "15 Feb 2026",
    category: "Cloud",
  },
  {
    name: "Spotify",
    amount: "Rp 54.000",
    dueDate: "18 Feb 2026",
    category: "Subscription",
  },
  {
    name: "Figma",
    amount: "Rp 145.000",
    dueDate: "20 Feb 2026",
    category: "Software",
  },
];

export default function DashboardPage() {
  const getHealtApi = async () => {
    try {
      const response = await apiClient.get("/api/health");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHealtApi();
  }, []);
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Overview manajemen pembayaran dan pengingat Anda
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm transition-all hover:shadow-md sm:p-6"
          >
            <div
              className={`mb-4 inline-flex rounded-xl p-2.5 ${stat.bgColor} text-slate-700 dark:text-slate-300`}
            >
              {stat.icon}
            </div>
            <p className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Upcoming Payments */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm sm:p-6 overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Pembayaran Mendatang
            </h2>
            <Link
              href="/dashboard/payments"
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Lihat Semua
            </Link>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {upcomingPayments.map((payment, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-800 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-slate-500 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-900 dark:text-white">
                      {payment.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                      {payment.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end sm:text-right gap-2 shrink-0">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    {payment.amount}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 sm:text-sm">
                    {payment.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Per Kategori
            </h2>
            <Link
              href="/dashboard/categories"
              className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Kelola
            </Link>
          </div>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-sm min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`h-2 w-2 rounded-full ${category.color}`}
                    />
                    <span className="truncate font-medium text-slate-900 dark:text-white">
                      {category.name}
                    </span>
                    <span className="shrink-0 text-slate-500 dark:text-slate-400">
                      ({category.count})
                    </span>
                  </div>
                  <span className="shrink-0 font-medium text-slate-900 dark:text-white">
                    {category.total}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div
                    className={`h-full ${category.color} rounded-full transition-all`}
                    style={{
                      width: `${Math.min((category.count / 12) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm sm:p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white sm:mb-4">
          Aksi Cepat
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/dashboard/subscriptions?action=add"
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:border-emerald-500/50 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10 transition-all sm:px-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <span className="font-medium text-slate-900 dark:text-white">
              Tambah Langganan Baru
            </span>
          </Link>
          <Link
            href="/dashboard/reminders?action=add"
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:border-amber-500/50 hover:bg-amber-500/5 dark:hover:bg-amber-500/10 transition-all sm:px-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <span className="font-medium text-slate-900 dark:text-white">
              Atur Pengingat
            </span>
          </Link>
          <Link
            href="/dashboard/categories?action=add"
            className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 hover:border-violet-500/50 hover:bg-violet-500/5 dark:hover:bg-violet-500/10 transition-all sm:px-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-violet-600 dark:text-violet-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </div>
            <span className="font-medium text-slate-900 dark:text-white">
              Tambah Kategori
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
