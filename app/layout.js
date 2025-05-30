import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

 const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: "400",

 })

export const metadata = {
  title: "Cult of Cats",
  description: "You’ve entered the sacred sanctuary of the Cult of Cats — where whiskers rule, naps are sacred, and every meow is a blessing. Bow to the feline overlords, bask in their fluffy wisdom, and let the purring guide your soul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={rubik.className}
      >
        <Provider>
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
