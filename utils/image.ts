import { minioClient } from '@/lib/minio'
import { ImageData } from '@/lib/db/product'

export const getImageUrl = async (image: ImageData) => {
  image.url = await minioClient.getFileUrl(image.filePath)
  return image
}
