import { Rating, type Grade } from 'ts-fsrs'

export function isExactSpelling(rating: Grade): boolean {
  return rating === Rating.Good || rating === Rating.Easy
}
