import { minioClient } from '@/lib/minio'
import { ImageData } from '@/lib/db/product'

export const getImageUrl = async (image: ImageData) => {
  image.minioUrl = await minioClient.getFileUrl(image.url)
  return image
}
