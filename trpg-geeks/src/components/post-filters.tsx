"use client";

import {
  GameSystem,
  PlayMode,
  ExperienceLevel,
  GAME_SYSTEM_LABELS,
  PLAY_MODE_LABELS,
  EXPERIENCE_LEVEL_LABELS,
} from "@/lib/types";
import { PostFilters } from "@/hooks/use-posts";

export function PostFiltersBar({
  filters,
  onChange,
}: {
  filters: PostFilters;
  onChange: (filters: PostFilters) => void;
}) {
  const selectClass =
    "rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-gray-500 focus:outline-none";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        className={selectClass}
        value={filters.gameSystem ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            gameSystem: (e.target.value || undefined) as GameSystem | undefined,
          })
        }
      >
        <option value="">시스템 전체</option>
        {Object.entries(GAME_SYSTEM_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.playMode ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            playMode: (e.target.value || undefined) as PlayMode | undefined,
          })
        }
      >
        <option value="">플레이 방식 전체</option>
        {Object.entries(PLAY_MODE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <select
        className={selectClass}
        value={filters.experienceLevel ?? ""}
        onChange={(e) =>
          onChange({
            ...filters,
            experienceLevel: (e.target.value || undefined) as
              | ExperienceLevel
              | undefined,
          })
        }
      >
        <option value="">경험 수준 전체</option>
        {Object.entries(EXPERIENCE_LEVEL_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <label className="flex items-center gap-1.5 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={filters.recruitingOnly}
          onChange={(e) =>
            onChange({ ...filters, recruitingOnly: e.target.checked })
          }
          className="rounded"
        />
        모집중만
      </label>
    </div>
  );
}
