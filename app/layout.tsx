import type { PropsWithChildren } from "react";

import Link from "next/link";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <ul>
          <li>
            <Link href="/signup">Signup test</Link>
          </li>
          <li>
            <Link href="/login">Login test</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
