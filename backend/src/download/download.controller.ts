import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { DownloadService } from './download.service';
import { Response } from 'express';

/**
 * @see https://notiz.dev/blog/type-safe-file-downloads
 */
@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get('buffer')
  buffer(@Res() response: Response) {
    const file = this.downloadService.fileBuffer('icon.png');

    response.contentType('image/png');
    response.attachment('buffer-image-example.png'); // this set the Content-Disposition header

    response.send(file);
  }

  @Get('stream')
  stream(@Res() response: Response) {
    const file = this.downloadService.fileStream('icon.png');

    response.contentType('image/png');
    response.attachment('stream-image-example.png'); // this set the Content-Disposition header

    file.pipe(response);
  }

  @Get('streamable')
  streamable(@Res({ passthrough: true }) response: Response) {
    const file = this.downloadService.fileStream('package.json');
    // or
    // const file = this.downloadService.fileBuffer('package.json');

    response.contentType('application/json');
    response.attachment('streamable-example.json'); // this set the Content-Disposition header

    return new StreamableFile(file); // 👈 supports Buffer and Stream
  }
}
