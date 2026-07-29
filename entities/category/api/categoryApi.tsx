import { Category } from "../model/types"
import { apiClient } from "@/shared/api/baseClient"

export const categoryApi = {
  getCategories: async () => {
    const { data } = await apiClient.get<Category[]>('/products/categories')
    return data
  }
}