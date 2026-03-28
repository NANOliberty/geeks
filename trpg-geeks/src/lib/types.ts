export type GameSystem = "coc7" | "dnd5e" | "insane" | "other";
export type PlayMode = "online" | "offline" | "both";
export type ExperienceLevel = "newbie" | "intermediate" | "veteran" | "any";

export interface Post {
  id: string;
  title: string;
  gameSystem: GameSystem;
  playMode: PlayMode;
  experienceLevel: ExperienceLevel;
  maxPlayers: number;
  currentPlayers: number;
  description: string;
  schedule: string;
  region?: string;
  authorName: string;
  createdAt: string;
  isRecruiting: boolean;
}

export const GAME_SYSTEM_LABELS: Record<GameSystem, string> = {
  coc7: "CoC 7판",
  dnd5e: "D&D 5e",
  insane: "인세인",
  other: "기타",
};

export const PLAY_MODE_LABELS: Record<PlayMode, string> = {
  online: "온라인",
  offline: "오프라인",
  both: "온/오프 모두",
};

export const EXPERIENCE_LEVEL_LABELS: Record<ExperienceLevel, string> = {
  newbie: "입문자 환영",
  intermediate: "중급",
  veteran: "숙련자",
  any: "무관",
};
