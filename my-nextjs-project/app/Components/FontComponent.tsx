/*import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});*/

import { Playfair_Display } from '@next/font/google';

// Konfigurer fonten
const playfair = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const FontComponent = ({ children }: { children: React.ReactNode }) => {
  return <div className={playfair.className}>{children}</div>;
};

export default FontComponent;