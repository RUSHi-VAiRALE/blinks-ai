'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCategoryView from '../../../components/services/ServiceCategoryView';
import { getAllServiceCategories } from '../../../data/servicesData';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ServiceCategoryPage = () => {
  const params = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.category) {
      // Convert URL slug to title format for comparison
      const categorySlug = params.category;
      const allCategories = getAllServiceCategories();
      console.log(categorySlug)
      
      // Find the matching category
      const matchedCategory = allCategories.find(category => 
        category.title.toLowerCase().replace(/\s+/g, '-') === categorySlug
      );
      setServiceData(matchedCategory || null);
      setLoading(false);
    }
  }, [params.category]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service category you're looking for doesn't exist.</p>
          <Link 
            href="/services" 
            className="inline-block py-3 px-8 bg-white text-black font-medium rounded-lg"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="bg-zinc-900/50 py-4 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">→</span>
            <span className="text-white">{serviceData.title}</span>
          </div>
        </div>
      </div>

      {/* Service Category Component */}
      <ServiceCategoryView serviceData={serviceData} />
      
      {/* Related Services Section */}
      <section className="py-16 md:py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-2xl md:text-3xl font-bold mb-10 text-center bg-gradient-to-r from-white via-white to-zinc-900 text-transparent bg-clip-text"
            >
              Explore Other Services
            </motion.h2>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getAllServiceCategories()
                .filter(category => category.title !== serviceData.title)
                .slice(0, 3)
                .map((category, index) => (
                  <Link 
                    key={index}
                    href={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-zinc-900/70 border border-zinc-800/50 rounded-lg p-5 hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-white text-2xl mt-1">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-zinc-900 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                          {category.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                          {category.description.length > 100 
                            ? `${category.description.substring(0, 100)}...` 
                            : category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="text-center mt-10"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>View All Services</span>
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServiceCategoryPage;
