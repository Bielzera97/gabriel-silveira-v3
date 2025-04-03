import "./globals.css";
import Topbar from "./components/Topbar";

export const metadata = {
  title: "Gabriel Silveira v3"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
