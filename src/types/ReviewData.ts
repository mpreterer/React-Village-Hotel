type ReviewItemData = {
  text: string;
  userId: string;
};

type ReviewListData = {
  [key: string]: ReviewItemData;
};

interface ReviewData extends ReviewItemData {
  sequenceNumber: number;
}

export type { ReviewData, ReviewItemData, ReviewListData };
