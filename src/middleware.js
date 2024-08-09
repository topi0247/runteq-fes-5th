import { NextResponse } from "next/server";

export function middleware(req) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', req.url);
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}