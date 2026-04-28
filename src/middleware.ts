import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  // On Vercel this is handled by vercel.json — Vercel's catch-all route rule
  // forces status 404 before the function response reaches the client, overriding
  // this redirect. See https://github.com/withastro/astro/issues/14423
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return context.redirect(pathname.replace(/^\/admin/, "/keystatic"), 302);
  }
  return next();
});
