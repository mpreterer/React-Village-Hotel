type ReviewItemData = {
  text: string;
  userId: string;
  userName: string;
  date: Date;
};

type ReviewListData = {
  [key: string]: ReviewItemData;
};

interface ReviewData extends ReviewItemData {
  sequenceNumber: number;
}

export type { ReviewData, ReviewItemData, ReviewListData };
