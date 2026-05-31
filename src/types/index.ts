export interface Topic {
  id: string;
  title: string;
  description: string;
  image_url: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Subtopic {
  id: string;
  topic_id: string;
  title: string;
  description: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  subtopic_id: string;
  content: string;
  video_url?: string;
  pdf_url?: string;
  created_at: string;
  updated_at: string;
}

export interface FeaturedTopic {
  id: string;
  title: string;
  description: string;
  image_url: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface VideoItem {
  url: string;
  title: string;
  thumbnail?: string;
}

export interface PdfItem {
  url: string;
  title: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question: string;
  options: string[];
  correct_option: number;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  subtopic_id: string;
  created_at: string;
}

export interface User {
  id: string;
  email?: string;
  user_metadata?: {
    role?: string;
    full_name?: string;
  };
}

export interface Bookmark {
  id: string;
  user_id: string;
  title: string;
  url: string;
  created_at: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

export interface AboutContent {
  missionText: string;
  whoWeAreText1: string;
  whoWeAreText2: string;
  teamMembers: TeamMember[];
}
