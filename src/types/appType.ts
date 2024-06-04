import { CommentsType } from '../mocks/offers';

type AppType = {
  //offers: OffersArrayType;
  comments: CommentsType;
  locations: string[];
};

export default AppType;


export type Comment = {
  id:number;
  user: {
    id:number;
    isPro:boolean;
    name:string;
    avatarUrl:string;};
  rating:number;
  comment:string;
  date:string;
};
export type Comments = Comment[];
