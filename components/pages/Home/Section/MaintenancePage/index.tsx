"use client";

import CinematicLoader from "@/components/ui/CinematicLoader";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <main className="min-h-svh bg-zinc-950 px-6 text-zinc-100 sm:px-14 px-14 lg:px-12">
      <section className="mx-auto flex min-h-svh w-full max-w-3xl flex-col justify-center py-16">

        <Image
          className="mb-8 h-28 w-full md:hidden rounded-xl object-cover"
          src="/assets/img/maintenance/star.webp"
          alt=""
          width={900}
          height={112}
          priority
        />
        <Image
          className="mb-8 h-28 hidden md:block w-full rounded-xl object-cover"
          src="/assets/img/maintenance/star2.webp"
          alt=""
          width={900}
          height={112}
          priority
        />

        <h1 className="font-coolvetica text-4xl tracking-tight text-zinc-100 sm:text-5xl">
          Be right back
        </h1>

        <p className="mt-2 max-w-lg font-poppins text-sm leading-7 text-zinc-500 sm:text-[15px]">
          I’ll be back soon.
          This page is being updated.
        </p>

        <div className="mt-10">
          <CinematicLoader />
        </div>

        <div className="mt-5 flex items-center justify-between font-poppins text-xs text-zinc-500">
          <span>Maintenance mode</span>
          <span>01 - 09 - 2026</span>
        </div>

      </section>
    </main>
  );
}