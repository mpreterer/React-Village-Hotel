type FeedbackItemData = {
  text: string;
  userId: string;
  userName: string;
  date: Date;
  feedback?: FeedbackListData;
  profilePicture?: string;
  likes?: { [key: string]: { userId: string } };
};

type FeedbackListData = {
  [key: string]: FeedbackItemData;
};

interface FeedbackData extends FeedbackItemData {
  roomNumber: string;
  path: string;
}

export type { FeedbackData, FeedbackItemData, FeedbackListData };
