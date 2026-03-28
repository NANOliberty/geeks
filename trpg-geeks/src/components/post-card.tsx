import Link from "next/link";
import {
  Post,
  GAME_SYSTEM_LABELS,
  PLAY_MODE_LABELS,
  EXPERIENCE_LEVEL_LABELS,
} from "@/lib/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="block rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-2">
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

      <h3 className="mb-2 text-base font-semibold text-gray-900">
        {post.title}
      </h3>

      <p className="mb-3 line-clamp-2 text-sm text-gray-500">
        {post.description}
      </p>

      <div className="flex items-center gap-4 text-xs text-gray-400">
        <span>{EXPERIENCE_LEVEL_LABELS[post.experienceLevel]}</span>
        <span>
          {post.currentPlayers}/{post.maxPlayers}명
        </span>
        <span>{post.schedule}</span>
        <span className="ml-auto">{post.authorName}</span>
      </div>
    </Link>
  );
}
