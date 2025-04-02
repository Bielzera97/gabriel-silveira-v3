import "./globals.css";

export const metadata = {
  title: "Gabriel Silveira v3"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
