import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/data/blog";
import {
  LuCalendar,
  LuClock,
  LuArrowLeft,
  LuArrowRight,
  LuCircleCheck,
} from "react-icons/lu";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      {/* 1. Article Intro Banner */}
      <PageBanner
        title={post.title}
        subtitle={post.excerpt}
      />

      <PageTransition>
        {/* 2. Article Reader Body */}
        <article className="py-20 lg:py-28 bg-[#FAFAF8] border-b border-[#D9DDE5]/60">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Article Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#D9DDE5] mb-12">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D9DDE5] bg-[#D9DDE5]">
                <Image
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-[#101A35] block leading-tight">
                  {post.author.name}
                </span>
                <span className="text-xs text-[#727989]">
                  {post.author.role}
                </span>
              </div>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center gap-4 text-xs text-[#727989]">
              <span className="flex items-center gap-1.5">
                <LuCalendar className="w-3.5 h-3.5 text-[#2448A5]" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <LuClock className="w-3.5 h-3.5 text-[#2448A5]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          {/* Hero Featured Article Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-[#D9DDE5] shadow-lg mb-12 bg-[#101A35]">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-center"
            />
          </div>

          {/* Article Text Content */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#D9DDE5] shadow-sm text-left">
            <div className="space-y-6 text-base sm:text-lg text-[#171B24]/90 leading-relaxed font-normal">
              {post.content.map((paragraph, idx) => {
                // If line looks like a header
                if (paragraph.startsWith("Key Architectural") || paragraph.startsWith("To achieve") || paragraph.startsWith("Our Core") || paragraph.startsWith("When Should") || paragraph.startsWith("Real-World") || paragraph.startsWith("The Blue Pearl")) {
                  return (
                    <h3
                      key={idx}
                      className="text-2xl font-bold text-[#101A35] tracking-tight pt-4 pb-1"
                    >
                      {paragraph}
                    </h3>
                  );
                }

                // If line looks like a list item
                if (paragraph.startsWith("1.") || paragraph.startsWith("2.") || paragraph.startsWith("3.") || paragraph.startsWith("•")) {
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAF8] border border-[#D9DDE5]/80 my-2"
                    >
                      <LuCircleCheck className="w-5 h-5 text-[#2448A5] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-[#101A35] font-medium leading-relaxed">
                        {paragraph.replace(/^(\d+\.|•)\s*/, "")}
                      </p>
                    </div>
                  );
                }

                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Editorial Quote Box */}
            <div className="my-10 p-6 rounded-2xl bg-[#2448A5]/5 border-l-4 border-[#2448A5]">
              <p className="text-base sm:text-lg font-semibold text-[#101A35] italic">
                &ldquo;Engineering excellence is never an accident. It is always the result of high intention, sincere effort, intelligent direction, and skillful execution.&rdquo;
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2448A5] mt-2 block">
                — Blue Pearl Nexa Engineering Manifesto
              </span>
            </div>

            {/* Back Button */}
            <div className="pt-8 mt-10 border-t border-[#D9DDE5] flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101A35] hover:text-[#2448A5] transition-colors"
              >
                <LuArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2448A5] hover:bg-[#1b3884] text-[#FAFAF8] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors"
              >
                <span>Discuss Your Project</span>
                <LuArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* 3. Related Articles */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h3 className="text-2xl font-bold text-[#101A35] mb-8">
            Related Insights & Analyses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="p-6 rounded-3xl bg-white border border-[#D9DDE5] hover:border-[#2448A5]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2448A5] bg-[#2448A5]/8 px-2.5 py-1 rounded-full border border-[#2448A5]/20 mb-3 inline-block">
                    {related.category}
                  </span>
                  <h4 className="text-xl font-bold text-[#101A35] mb-2 leading-snug hover:text-[#2448A5] transition-colors">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#727989] leading-relaxed mb-4 line-clamp-2">
                    {related.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D9DDE5]/60 flex items-center justify-between">
                  <span className="text-xs text-[#727989]">{related.date}</span>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2448A5] uppercase tracking-wider"
                  >
                    <span>Read</span>
                    <LuArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      </PageTransition>
    </>
  );
}

