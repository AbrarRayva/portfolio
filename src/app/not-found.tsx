"use client";

import Link from 'next/link'
import { useState, useRef } from 'react';
import Button from "@/components/ui/Button";

export default function NotFound() {
  const originalText = "pageNotFound()";
  const [text, setText] = useState(originalText);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[]\\;',./";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText(() =>
        originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };



  return (
    <div className='w-screen h-screen bg-blue-brand-1 flex items-center justify-center'>
        <div className='flex flex-col gap-6 text-center items-center'>
            <h1 
              onMouseEnter={handleMouseEnter}
              className="font-mono leading-tight tracking-normal text-2xl sm:text-4xl md:text-6xl cursor-pointer select-none"
            >
                {text}
            </h1>
            <Link href="/">
                <Button className="uppercase" variant='white'>Go Back</Button>
            </Link>
        </div>
    </div>
  )
}