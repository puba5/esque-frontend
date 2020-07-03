// Interface 관련이므로 I Post라고 한다.

import { PostContent } from "../types/Post";

export interface IPost {
  id: string;
  createAt: string;
  creator: string;
  profileImageUrl: string;
  content: PostContent;
  likeCount: number;
}
