'use client';

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type MatomoConfig = {
  host: string;
  siteId: string;
  trackerUrl: string;
  scriptUrl: string;
};

declare global {
  interface Window {
    _paq?: unknown[][];
  }
}

function normalizeMatomoHost(value: string) {
  return value.replace(/^https?:\/\//i, "").replace(/\/+$/, "");
}

function getMatomoConfig(): MatomoConfig | null {
  const rawHost = process.env.NEXT_PUBLIC_MATOMO_HOST?.trim();
  const rawSiteId = process.env.NEXT_PUBLIC_MATOMO_SITE_ID?.trim();

  if (!rawHost || !rawSiteId) {
    return null;
  }

  const host = normalizeMatomoHost(rawHost);

  return {
    host,
    siteId: rawSiteId,
    trackerUrl: `https://${host}/`,
    scriptUrl: `https://cdn.matomo.cloud/${host}/matomo.js`,
  };
}

export default function MatomoAnalytics() {
  const config = getMatomoConfig();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedInitialPageView = useRef(false);

  useEffect(() => {
    if (!config) {
      return;
    }

    const queryString = searchParams.toString();
    const currentPath = queryString ? `${pathname}?${queryString}` : pathname;
    const currentUrl = `${window.location.origin}${currentPath}`;

    window._paq = window._paq || [];

    if (trackedInitialPageView.current) {
      window._paq.push(["setCustomUrl", currentUrl]);
      window._paq.push(["setDocumentTitle", document.title]);
      window._paq.push(["trackPageView"]);
      return;
    }

    trackedInitialPageView.current = true;
  }, [config, pathname, searchParams]);

  if (!config) {
    return null;
  }

  return (
    <>
      <Script
        id="matomo-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window._paq = window._paq || [];
            _paq.push(['setTrackerUrl', '${config.trackerUrl}matomo.php']);
            _paq.push(['setSiteId', '${config.siteId}']);
            _paq.push(['enableLinkTracking']);
            _paq.push(['trackPageView']);
          `,
        }}
      />
      <Script id="matomo-script" strategy="afterInteractive" src={config.scriptUrl} />
    </>
  );
}