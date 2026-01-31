import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { solutions } from "@/data/solutions";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const routes = ["/", "/solutions", "/platform", "/pricing", "/about", "/resources", "/contact", "/privacy"];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const solutionRoutes = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date()
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticRoutes, ...solutionRoutes, ...postRoutes];
}
