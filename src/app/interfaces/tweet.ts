import { User } from './user';

export interface Tweet {
  id: string;
  tweetName:string;
  postDate: Date;
  likes: number;
  user: User;
  replies: Tweet[];
  tweetTags: string;
}