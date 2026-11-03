"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import { blogPosts, blogCategories } from "@/data/blog";
import {
  LuCalendar,
  LuClock,
  LuArrowRight,
  LuFilter,
} from "react-icons/lu";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* 1. Introductory Page Banner */}
      <PageBanner
        title="Blog"
        subtitle="Insights and ideas from the world of technology."
      />

      <PageTransition>
        {/* 2. Featured Article Showcase */}
        <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-[#D9DDE5]/60">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FAFAF8] border border-[#D9DDE5] p-4 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            {/* Featured Image */}
            <div className="lg:col-span-6 relative h-48 sm:h-80 lg:h-full min-h-[200px] sm:min-h-[280px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#101A35]">
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Featured Content */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#727989] mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#2448A5]/10 text-[#2448A5] text-[11px] font-bold uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <LuCalendar className="w-3.5 h-3.5 text-[#2448A5]" />
                    <span>{featuredPost.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LuClock className="w-3.5 h-3.5 text-[#2448A5]" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101A35] tracking-tight leading-tight mb-4">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-[#2448A5] transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm sm:text-base text-[#727989] leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Author & Action */}
              <div className="pt-6 border-t border-[#D9DDE5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D9DDE5] bg-[#D9DDE5]">
                    <Image
                      src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#101A35] block leading-tight">
                      {featuredPost.author.name}
                    </span>
                    <span className="text-[10px] text-[#727989]">
                      {featuredPost.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2448A5] hover:text-[#1b3884] transition-colors"
                >
                  <span>Read Article</span>
                  <LuArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3. Articles Grid with Category Filters */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] tracking-tight mb-2">
                All Engineering & Design Articles
              </h3>
              <p className="text-sm sm:text-base text-[#727989]">
                In-depth tutorials, strategic benchmarks, and technical insights
                from our development team.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white border border-[#D9DDE5]">
                <LuFilter className="w-4 h-4 text-[#727989] ml-2 hidden sm:block" />
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap cursor-pointer ${activeCategory === cat
                        ? "bg-[#2448A5] text-[#FAFAF8] shadow-sm"
                        : "text-[#727989] hover:text-[#101A35] hover:bg-[#FAFAF8]"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-[#D9DDE5] hover:border-[#2448A5]/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-52 w-full bg-[#101A35] overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <div className="flex items-center gap-2.5 text-xs text-[#727989] mb-3">
                      <span className="font-bold text-[11px] uppercase tracking-wider text-[#2448A5]">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <LuCalendar className="w-3 h-3 text-[#2448A5]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <LuClock className="w-3 h-3 text-[#2448A5]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#101A35] tracking-tight leading-snug mb-3 group-hover:text-[#2448A5] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-[#727989] leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-[#D9DDE5]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#D9DDE5] bg-[#D9DDE5]">
                        <Image
                          src={post.author.avatarUrl}
                          alt={post.author.name}
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-semibold text-[#101A35]">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#2448A5] group-hover:text-[#1b3884] transition-colors"
                    >
                      <span>Read More</span>
                      <LuArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Newsletter / Contact Hook */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101A35] mb-3">
            Want Technical Insights Delivered Directly?
          </h3>
          <p className="text-sm text-[#727989] mb-8">
            We write bi-weekly analyses dissecting Next.js architecture, Core Web Vitals,
            and high-conversion UI patterns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-4 py-3 rounded-full bg-[#FAFAF8] border border-[#D9DDE5] text-sm text-[#171B24] focus:outline-none focus:ring-2 focus:ring-[#2448A5]"
            />
            <button
              type="button"
              className="w-full sm:w-auto shrink-0 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
      </PageTransition>
    </>
  );
}

