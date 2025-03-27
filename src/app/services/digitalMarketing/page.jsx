'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// This is a redirect page that will send users to the first subcategory
export default function DigitalMarketingPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the first subcategory (SEO)
    router.push('/services/digital-marketing/seo');
  }, [router]);
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
    </div>
  );
}
