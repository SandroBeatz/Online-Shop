import {getHomepageCategories} from "~~/server/data/categories-new";

export default defineEventHandler(() => {
  return getHomepageCategories()
})
