import { minioClient } from '@/lib/minio'
import { Image } from '@prisma/client'

export const getImageUrl = async (image: Image) => {
  image.url = await minioClient.getFileUrl(image.url)
  return image
}
