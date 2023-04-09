import { Injectable } from '@nestjs/common';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';

/**
 * This service would probably download files from a file storage like S3, minio etc.
 *
 * @see https://notiz.dev/blog/type-safe-file-downloads
 */
@Injectable()
export class DownloadService {
  constructor() {
    // create connection to your file storage
  }

  fileBuffer(filename: string) {
    return readFileSync(join(process.cwd(), filename));
  }

  fileStream(filename: string) {
    return createReadStream(join(process.cwd(), filename));
  }
}
