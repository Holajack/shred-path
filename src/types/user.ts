export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'pro';
export type SkateStyle = 'street' | 'park' | 'vert' | 'freestyle' | 'downhill' | 'cruising';

export interface User {
  id: string;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
  avatar_url?: string;
  bio?: string;
  experience_level?: ExperienceLevel;
  favorite_spots?: string;
  preferred_style?: SkateStyle;
  social_links?: string;
}