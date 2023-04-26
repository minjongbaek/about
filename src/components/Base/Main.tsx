import { Noto_Sans_KR } from "next/font/google";
import type { ReactNode } from "react";

const notoSansKR = Noto_Sans_KR({
  preload: true,
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`w-full min-h-screen ${notoSansKR.className}`}>
      {children}
    </main>
  );
};

export default Main;
