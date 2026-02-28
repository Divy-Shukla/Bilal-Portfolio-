import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const mediaDir = path.join(process.cwd(), 'public', 'media');

async function processImages() {
    const files = fs.readdirSync(mediaDir);
    const jpegs = files.filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));

    for (const file of jpegs) {
        const inputPath = path.join(mediaDir, file);
        const outputPath = path.join(mediaDir, file.replace(/\.jpeg$/i, '.webp').replace(/\.jpg$/i, '.webp'));

        try {
            await sharp(inputPath)
                .webp({ quality: 80, effort: 6 })
                .resize({ width: 1200, withoutEnlargement: true }) // Max width to ensure < 200KB
                .toFile(outputPath);
            console.log(`Optimized: ${file} -> ${path.basename(outputPath)}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

processImages();
