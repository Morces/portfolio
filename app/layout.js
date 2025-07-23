import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Moses Karani",
  description: "My portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        {children}
      </body>
    </html>
  );
}
