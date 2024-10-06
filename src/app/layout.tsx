import "@/styles/globals.css";
import "@/styles/fonts.css";
import Navbar from "@/app/_components/navbar";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata = {
  title: {
    default: "Foxeian",
    template: "%s - Foxeian",
  },
  description: "Foxeian - Immanuel Ehsan's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black font-['HelveticaNeue']">
      <body>
        <TRPCReactProvider>
          <Navbar />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
