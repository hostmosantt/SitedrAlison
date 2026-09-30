import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public', 'carousel');

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(directoryPath, file);
      const outputFilePath = path.join(directoryPath, file.replace(/\.jpe?g$/, '.webp'));

      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outputFilePath);
        console.log(`Converted ${file} to .webp`);
        fs.unlinkSync(filePath); // Delete original jpg
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
});
