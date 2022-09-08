function useTMDBImagePath(imagePath: string, fileSize: string, svg = false): string | null {
  if (!imagePath) {
    return null;
  }
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const imagePathArr = imagePath.split('.');
  const imageFormat = svg ? 'svg' : imagePathArr[1];
  return `${baseUrl}${fileSize}${imagePathArr[0]}.${imageFormat}`;
}

export default useTMDBImagePath;
