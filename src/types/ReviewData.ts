type ReviewItemData = {
  text: string;
  userId: string;
  userName: string;
  date: Date;
  review?: ReviewListData;
};

type ReviewListData = {
  [key: string]: ReviewItemData;
};

interface ReviewData extends ReviewItemData {
  sequenceNumber: number;
}

interface ReplyData extends ReviewData {
  path: string;
}

export type { ReplyData, ReviewData, ReviewItemData, ReviewListData };
