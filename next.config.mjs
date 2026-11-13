import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "Link", value: '</llms.txt>; rel="describedby"; type="text/markdown"' }] }];
  },
};

export default withMDX(nextConfig);
