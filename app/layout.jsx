import './globals.css';

export const metadata = {
  title: 'Danzzo.xyz | Tech & Fashion',
  description: 'The Future of Retail Ecosystem',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
