import * as Minio from 'minio'
import { FileWithPath } from 'react-dropzone'

export class MinioClient {
  private client: Minio.Client

  constructor() {
    this.client = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT_URL || 'minio-cons.indykuma.site',
      port: 443,
      useSSL: true,
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    })
  }

  async getFileUrl(object: string, bucket: string = 'construction') {
    return await this.client.presignedGetObject(bucket, object)
  }

  async uploadFile(bucket: string, object: string, file: FileWithPath) {
    const fileSize = file.size
    const fileStream = Buffer.from(await file.arrayBuffer())
    await this.client.putObject(bucket, object, fileStream, fileSize, function (err: object, info: object) {
      if (err) {
        return console.error(err)
      }
      console.log('File uploaded successfully', info)
    })
  }
}

export const minioClient = new MinioClient()
