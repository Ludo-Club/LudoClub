import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=8608",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;