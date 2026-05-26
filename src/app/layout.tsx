import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Player: Shoppable Video for eCommerce | Tolstoy",
  description: "The #1 shoppable video solution for eCommerce. Add video feeds to PDPs, auto-tag products with AI, and syndicate to Walmart and Shop App for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Font Awesome – needed for the nav icon fa-icon elements in the Webflow HTML */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
