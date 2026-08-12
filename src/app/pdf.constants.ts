export const PORTAFOLIO_GOOGLE_DRIVE_FILE_ID = '12HmtDTdQUtum53I0EqfjQejTQoQfWWhU';

export const PORTAFOLIO_GOOGLE_DRIVE_VIEW_URL =
  `https://drive.google.com/file/d/${PORTAFOLIO_GOOGLE_DRIVE_FILE_ID}/view?usp=sharing`;

export const PORTAFOLIO_GOOGLE_DRIVE_DOWNLOAD_URL =
  `https://drive.google.com/uc?export=download&confirm=t&id=${PORTAFOLIO_GOOGLE_DRIVE_FILE_ID}`;

export const PORTAFOLIO_GOOGLE_DRIVE_VIEWER_URL =
  `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    `https://drive.google.com/uc?export=download&confirm=t&id=${PORTAFOLIO_GOOGLE_DRIVE_FILE_ID}`
  )}`;
