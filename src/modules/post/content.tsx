"use client";

import Post from "@/components/post";
import useQueryPost from "@/hooks/use-query-post";
import { useParams, useRouter } from "next/navigation";

const mockPost: Post = {
  id: "1",
  title: "Post 1",
  content: "Content 1",
  createdAt: 0,
};

const Content = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQueryPost();

  return (
    <div>
      <button
        onClick={() => router.back()}
        className="text-sm text-white font-bold"
      >
        {"← Back"}
      </button>
      {isLoading && <div className="py-6">Loading Post...</div>}
      {error && <div className="py-6">{error.message}</div>}
      {!isLoading && data && <Post post={data} />}
    </div>
  );
};

export default Content;
