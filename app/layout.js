import './globals.css';
import Navbar from './Navbar'; // Adjust the path if you put it in a components folder

export const metadata = {
  title: 'Portfolio | Systems Architect',
  description: 'Full-Stack Systems Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}