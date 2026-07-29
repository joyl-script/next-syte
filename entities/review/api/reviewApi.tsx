import { Review } from "../model/types";
import { apiClient } from "@/shared/api/baseClient";

export const reviewApi = {
  getReviews: () => apiClient.get<Review[]>('/reviews')
}