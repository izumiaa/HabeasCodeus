import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimiter } from '@/lib/rate-limiter';
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = { 
  matcher: [
    "/user/:path*",
    '/api/message/:path*',
  ]
};


//idk why but when i add in this code it, the withauth middleware doesnt work????
// export async function middleware(req: NextRequest) {
//   const ip = req.ip ?? '127.0.0.1'

//   try {
//     const { success } = await rateLimiter.limit(ip)

//     if (!success) return new NextResponse('You are writing messages too fast.')
//     return NextResponse.next()
//   } catch (error) {
//     return new NextResponse(
//       'Sorry, something went wrong processing your message. Please try again later.'
//     )
//   }
// }

