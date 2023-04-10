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

    response.set({
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="buffer-image-example.png"',
    });

    response.send(file);
  }

  @Get('stream')
  stream(@Res() response: Response) {
    const file = this.downloadService.fileStream('icon.png');

    response.set({
      'Content-Type': 'image/png',
      'Content-Disposition': 'attachment; filename="stream-image-example.png"',
    });

    file.pipe(response);
  }

  @Get('streamable')
  streamable(@Res({ passthrough: true }) response: Response) {
    const file = this.downloadService.fileStream('example.json');
    // or
    // const file = this.downloadService.fileBuffer('package.json');

    response.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="streamable-example.json"',
    });

    return new StreamableFile(file); // 👈 supports Buffer and Stream
  }
}
