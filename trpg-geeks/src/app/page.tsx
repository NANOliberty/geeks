"use client";

import { usePosts } from "@/hooks/use-posts";
import { PostCard } from "@/components/post-card";
import { PostFiltersBar } from "@/components/post-filters";

export default function HomePage() {
  const { posts, filters, setFilters } = usePosts();

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">파티 구인 게시판</h1>
        <span className="text-sm text-gray-400">{posts.length}개의 모집글</span>
      </div>

      <div className="mb-6">
        <PostFiltersBar filters={filters} onChange={setFilters} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.length === 0 ? (
          <p className="col-span-full py-12 text-center text-gray-400">
            조건에 맞는 모집글이 없습니다.
          </p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
