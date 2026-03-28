"use client";

import { useRouter } from "next/navigation";
import { PostForm } from "@/components/post-form";

export default function NewPostPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-xl font-bold">모집글 작성</h1>
      <PostForm
        onSubmit={(data) => {
          // TODO: Supabase 연동 시 실제 저장으로 교체
          console.log("새 게시글:", data);
          router.push("/");
        }}
      />
    </div>
  );
}
