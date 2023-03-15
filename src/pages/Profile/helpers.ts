const validFileTypes = [
  'image/jpeg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/svg+xml',
];

const isFileValid = (fileType: string) => validFileTypes.includes(fileType);

export { isFileValid };
