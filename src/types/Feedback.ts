type FeedbackValue = {
  date: Date;
  profilePicture: string;
  userId: string;
  userName: string;
  text: string;
  feedback?: Feedback;
};

type Feedback = {
  [key: string]: FeedbackValue;
};

export type { Feedback, FeedbackValue };
