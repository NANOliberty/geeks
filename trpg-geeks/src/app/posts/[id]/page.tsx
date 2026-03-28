"use client";

import { use } from "react";
import Link from "next/link";
import { mockPosts } from "@/lib/mock-data";
import {
  GAME_SYSTEM_LABELS,
  PLAY_MODE_LABELS,
  EXPERIENCE_LEVEL_LABELS,
} from "@/lib/types";

export default function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const post = mockPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400">게시글을 찾을 수 없습니다.</p>
        <Link href="/" className="mt-4 inline-block text-sm text-gray-600 underline">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  const createdDate = new Date(post.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/" className="mb-6 inline-block text-sm text-gray-400 hover:text-gray-600">
        &larr; 목록으로
      </Link>

      <div className="mb-4 flex items-center gap-2">
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
          {GAME_SYSTEM_LABELS[post.gameSystem]}
        </span>
        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
          {PLAY_MODE_LABELS[post.playMode]}
        </span>
        {post.isRecruiting ? (
          <span className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
            모집중
          </span>
        ) : (
          <span className="rounded bg-gray-50 px-2 py-0.5 text-xs text-gray-400">
            모집완료
          </span>
        )}
      </div>

      <h1 className="mb-2 text-2xl font-bold">{post.title}</h1>
      <p className="mb-6 text-sm text-gray-400">
        {post.authorName} &middot; {createdDate}
      </p>

      <div className="mb-6 grid grid-cols-2 gap-3 rounded-lg border border-gray-200 p-4 text-sm">
        <div>
          <span className="text-gray-400">경험 수준</span>
          <p className="font-medium">{EXPERIENCE_LEVEL_LABELS[post.experienceLevel]}</p>
        </div>
        <div>
          <span className="text-gray-400">모집 인원</span>
          <p className="font-medium">
            {post.currentPlayers} / {post.maxPlayers}명
          </p>
        </div>
        <div>
          <span className="text-gray-400">일정</span>
          <p className="font-medium">{post.schedule}</p>
        </div>
        {post.region && (
          <div>
            <span className="text-gray-400">지역</span>
            <p className="font-medium">{post.region}</p>
          </div>
        )}
      </div>

      <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
        {post.description}
      </div>
    </div>
  );
}
