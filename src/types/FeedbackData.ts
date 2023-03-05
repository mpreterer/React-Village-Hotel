type FeedbackItemData = {
  text: string;
  userId: string;
  userName: string;
  date: Date;
  feedback?: FeedbackListData;
};

type FeedbackListData = {
  [key: string]: FeedbackItemData;
};

interface FeedbackData extends FeedbackItemData {
  roomNumber: string;
  sequenceNumber: number;
}

interface ReplyData extends FeedbackData {
  path: string;
}

export type { FeedbackData, FeedbackItemData, FeedbackListData, ReplyData };
