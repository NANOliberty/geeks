"use client";

import { useState, useCallback } from "react";
import { Post, GameSystem, PlayMode, ExperienceLevel } from "@/lib/types";
import { mockPosts } from "@/lib/mock-data";

export interface PostFilters {
  gameSystem?: GameSystem;
  playMode?: PlayMode;
  experienceLevel?: ExperienceLevel;
  recruitingOnly: boolean;
}

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [filters, setFilters] = useState<PostFilters>({ recruitingOnly: false });

  const filteredPosts = posts.filter((post) => {
    if (filters.recruitingOnly && !post.isRecruiting) return false;
    if (filters.gameSystem && post.gameSystem !== filters.gameSystem) return false;
    if (filters.playMode && post.playMode !== filters.playMode) return false;
    if (filters.experienceLevel && post.experienceLevel !== filters.experienceLevel)
      return false;
    return true;
  });

  const getPost = useCallback(
    (id: string) => posts.find((p) => p.id === id),
    [posts]
  );

  const createPost = useCallback(
    (data: Omit<Post, "id" | "createdAt" | "currentPlayers" | "isRecruiting">) => {
      const newPost: Post = {
        ...data,
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        currentPlayers: 0,
        isRecruiting: true,
      };
      setPosts((prev) => [newPost, ...prev]);
      return newPost;
    },
    []
  );

  return { posts: filteredPosts, filters, setFilters, getPost, createPost };
}
