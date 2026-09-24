import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useMatches,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import logoSrc from "@/assets/logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow text-foreground/50">404</div>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-foreground/65">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 border border-foreground px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
        >
          Return Home <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-foreground">Something went wrong</h1>
        <p className="mt-3 text-sm text-foreground/65">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border border-foreground/30 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] hover:border-foreground transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Amna Imran | Executive Coaching for Women Leaders" },
      {
        name: "description",
        content:
          "Evidence-based executive coaching and organizational consulting for high-potential women navigating advancement in complex environments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Amna Imran" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=Oooh+Baby&display=swap",
      },
      { rel: "icon", type: "image/png", href: logoSrc },
      { rel: "apple-touch-icon", href: logoSrc },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const matches = useMatches();
  // Hide chrome on private payment page
  const hideChrome = matches.some((m) => m.routeId === "/private-payment");
  // The homepage renders its own footer options while the client compares them.
  const hideFooter = hideChrome || matches.some((m) => m.routeId === "/");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        {!hideChrome && <SiteHeader />}
        <main className="flex-1">
          <Outlet />
        </main>
        {!hideFooter && <SiteFooter />}
      </div>
    </QueryClientProvider>
  );
}
