export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }){
            // console.log('jwt callback', { user, token });
            if(user){
                token.id = user.id
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }){
            // console.log('session callback', { session, token });

            if(token){
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        authorized({ auth, request }){
            const user = auth?.user
            const isOnAdminPanel = request?.nextUrl?.pathname.startsWith("/admin")
            const isOnBlogPage = request?.nextUrl?.pathname.startsWith("/blog")
            const isOnLoginPage = request?.nextUrl?.pathname.startsWith("/login")

            //only admin to access admin page
            if(isOnAdminPanel && !user.isAdmin){
                return false
            }

            //only authenitcated users to reach blog page
            if(isOnBlogPage && !user){
                return false
            }

            //only unauthenticated users to reach login page
            if(isOnLoginPage && user){
                return Response.redirect(new URL("/", request.nextUrl))
            }
            return true
        }
    }
}