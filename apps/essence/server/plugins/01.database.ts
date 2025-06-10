import process from 'node:process'
import { useCreateDatabase } from '../services/db/database'

/**
 * DB init
 */
export default defineNitroPlugin(async () => {
  // Only connect to database if URL is provided
  if (process.env.NUXT_DATABASE_URL) {
    useCreateDatabase(process.env.NUXT_DATABASE_URL)
  }
})
