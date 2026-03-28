"use client";

import { useState } from "react";
import {
  GameSystem,
  PlayMode,
  ExperienceLevel,
  GAME_SYSTEM_LABELS,
  PLAY_MODE_LABELS,
  EXPERIENCE_LEVEL_LABELS,
} from "@/lib/types";

interface PostFormData {
  title: string;
  gameSystem: GameSystem;
  playMode: PlayMode;
  experienceLevel: ExperienceLevel;
  maxPlayers: number;
  schedule: string;
  region: string;
  description: string;
  authorName: string;
}

export function PostForm({
  onSubmit,
}: {
  onSubmit: (data: PostFormData) => void;
}) {
  const [form, setForm] = useState<PostFormData>({
    title: "",
    gameSystem: "coc7",
    playMode: "online",
    experienceLevel: "any",
    maxPlayers: 4,
    schedule: "",
    region: "",
    description: "",
    authorName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  const update = <K extends keyof PostFormData>(key: K, value: PostFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-500 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass}>제목</label>
        <input
          type="text"
          required
          className={inputClass}
          placeholder="세션 제목을 입력하세요"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
        />
      </div>

      <div>
        <label className={labelClass}>작성자 이름</label>
        <input
          type="text"
          required
          className={inputClass}
          placeholder="닉네임"
          value={form.authorName}
          onChange={(e) => update("authorName", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>게임 시스템</label>
          <select
            className={inputClass}
            value={form.gameSystem}
            onChange={(e) => update("gameSystem", e.target.value as GameSystem)}
          >
            {Object.entries(GAME_SYSTEM_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>플레이 방식</label>
          <select
            className={inputClass}
            value={form.playMode}
            onChange={(e) => update("playMode", e.target.value as PlayMode)}
          >
            {Object.entries(PLAY_MODE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>경험 수준</label>
          <select
            className={inputClass}
            value={form.experienceLevel}
            onChange={(e) =>
              update("experienceLevel", e.target.value as ExperienceLevel)
            }
          >
            {Object.entries(EXPERIENCE_LEVEL_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>최대 인원</label>
          <input
            type="number"
            required
            min={2}
            max={10}
            className={inputClass}
            value={form.maxPlayers}
            onChange={(e) => update("maxPlayers", Number(e.target.value))}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>일정</label>
        <input
          type="text"
          required
          className={inputClass}
          placeholder="예: 매주 토요일 오후 2시"
          value={form.schedule}
          onChange={(e) => update("schedule", e.target.value)}
        />
      </div>

      {(form.playMode === "offline" || form.playMode === "both") && (
        <div>
          <label className={labelClass}>지역</label>
          <input
            type="text"
            className={inputClass}
            placeholder="예: 서울 홍대입구"
            value={form.region}
            onChange={(e) => update("region", e.target.value)}
          />
        </div>
      )}

      <div>
        <label className={labelClass}>상세 설명</label>
        <textarea
          required
          rows={5}
          className={inputClass}
          placeholder="세션에 대한 상세한 설명을 작성해주세요"
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-800"
      >
        모집글 올리기
      </button>
    </form>
  );
}
