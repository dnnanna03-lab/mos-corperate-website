import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export const metadata: Metadata = { title: 'Mega Ortho Services Nigeria Limited | Procurement & Supply Solutions', description: 'Dependable procurement and supply solutions across medical, hotel and hospitality, foodstuff, office stationery, building materials and general sourcing.', metadataBase: new URL('https://megaorthoservices.ng'), openGraph: { title: 'Mega Ortho Services Nigeria Limited', description: 'Reliable sourcing. Smarter supply. Stronger partnerships.', url: 'https://megaorthoservices.ng', siteName: 'Mega Ortho Services Nigeria Limited', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>; }
