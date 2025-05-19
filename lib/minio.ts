import * as Minio from 'minio'
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'

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

  async uploadFile(bucket: string, object: string, file: string) {
    const fileStream = createReadStream(file)
    const fileSize = (await stat(file)).size
    await this.client.putObject(bucket, object, fileStream, fileSize, function (err: object, info: object) {
      if (err) {
        return console.error(err)
      }
      console.log('File uploaded successfully', info)
    })
  }
}

export const minioClient = new MinioClient()
