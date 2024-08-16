"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function PromisesBanner() {

  return (
    <div className="relative w-full ">
      <img
        src="/assets/promises.png" 
        alt="Promises banner"
        // className="absolute inset-0 w-full object-cover"
      />
    </div>
  );
}
