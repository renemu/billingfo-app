import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">
        {/* Logo */}
        <Link
          href="/"
          className="mb-12 flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-400 to-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-cyan-400">
            Billingfo
          </span>
        </Link>

        {/* 404 */}
        <p className="mb-2 text-8xl font-bold text-slate-200 dark:text-slate-800 sm:text-9xl">
          404
        </p>
        <h1 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mb-10 max-w-md text-slate-600 dark:text-slate-400">
          Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-linear-to-r from-emerald-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all hover:from-emerald-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-emerald-500/25 dark:text-slate-900"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Buka Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
