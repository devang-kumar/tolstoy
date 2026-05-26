import fs from 'fs';
import path from 'path';
import React from 'react';

export default function Home() {
  const htmlPath = path.join(process.cwd(), 'src', 'app', 'raw.html');
  const rawHtml = fs.readFileSync(htmlPath, 'utf8');

  return (
    <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
  );
}
