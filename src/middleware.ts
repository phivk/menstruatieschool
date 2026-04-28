import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return context.redirect(pathname.replace(/^\/admin/, "/keystatic"), 302);
  }
  return next();
});
