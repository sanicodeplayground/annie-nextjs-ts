export default async function sitemap() {
  let routes = ["", "/about", "/contact", "/projects"].map((route) => ({
    url: `https://anniebookerillustration.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
