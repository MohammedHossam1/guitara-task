'use client';

import ImageFallBack from '@/components/shared/image-fall-back';
import SectionHeader from '@/components/shared/section-header';
import { BrowseRangeData } from '@/data';
import { motion } from 'framer-motion';
import React from 'react';

const BrowseRange = () => {
  return (
    <div className="custom-container">
      <SectionHeader
        title="Browse Our Range"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:mt-16 lg:px-10">
        {BrowseRangeData.map((item, ind) => (
          <motion.div
            key={ind}
            className="cursor-pointer group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: ind * 0.2, 
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="lg:rounded-xl overflow-hidden">
              <ImageFallBack
                src={item.imageSrc}
                alt={item.title}
                width={2200}
                height={2200}
                className="object-cover w-full lg:rounded-xl group-hover:scale-105 transition-all duration-300 h-[15rem] lg:h-[30rem] 2xl:h-[34rem]"
              />
            </div>
            <h3 className="text-base lg:text-2xl font-semibold mt-4 text-text-color text-center">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRange;
