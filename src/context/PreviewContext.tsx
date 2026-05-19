import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import menuData from '../data/menu.json';
import pricingData from '../data/pricing.json';
import galleryData from '../data/gallery.json';
import servicesData from '../data/services.json';
import siteData from '../data/site.json';
import homeData from '../data/home.json';
import aboutData from '../data/about.json';

type MenuData = typeof menuData;
type PricingData = typeof pricingData;
type GalleryData = typeof galleryData;
type ServicesData = typeof servicesData;
type SiteData = typeof siteData;
type HomeData = typeof homeData;
type AboutData = typeof aboutData;

interface PreviewState {
  menu: MenuData;
  pricing: PricingData;
  gallery: GalleryData;
  services: ServicesData;
  site: SiteData;
  home: HomeData;
  about: AboutData;
}

type IncomingMessage =
  | { type: 'cms-preview'; section: keyof PreviewState; data: unknown }
  | { type: 'cms-navigate'; path: string };

const PreviewContext = createContext<PreviewState>({
  menu: menuData,
  pricing: pricingData,
  gallery: galleryData,
  services: servicesData,
  site: siteData,
  home: homeData,
  about: aboutData,
});

function NavigationListener() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const msg = event.data as IncomingMessage;
      if (msg?.type === 'cms-navigate' && msg.path) {
        navigate(msg.path);
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [navigate]);

  return null;
}

export function PreviewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PreviewState>({
    menu: menuData,
    pricing: pricingData,
    gallery: galleryData,
    services: servicesData,
    site: siteData,
    home: homeData,
    about: aboutData,
  });

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const msg = event.data as IncomingMessage;
      if (msg?.type !== 'cms-preview' || !msg.section || !msg.data) return;
      setState((prev) => ({ ...prev, [msg.section]: msg.data }));
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <PreviewContext.Provider value={state}>
      <NavigationListener />
      {children}
    </PreviewContext.Provider>
  );
}

export function usePreview() {
  return useContext(PreviewContext);
}
