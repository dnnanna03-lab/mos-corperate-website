'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="top-strip"><div className="container top-strip-inner"><span>Procurement & supply solutions for businesses and institutions</span><a href="mailto:info@megaorthoservices.ng">info@megaorthoservices.ng <ArrowUpRight size={13} /></a></div></div>
      <div className="container header-main">
        <Link href="/" aria-label="MOS homepage" className="brand-link" onClick={() => setOpen(false)}><LogoPlaceholder /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{site.nav.map(item => <Link key={item.href} href={item.href} className={item.href === '/' ? 'nav-active' : ''}>{item.label}</Link>)}</nav>
        <Link href="/request-a-quote" className="header-cta">Request a Quote <ArrowUpRight size={16} /></Link>
        <button className="mobile-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="mobile-nav"><nav aria-label="Mobile navigation">{site.nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link className="mobile-quote" href="/request-a-quote" onClick={() => setOpen(false)}>Request a Quote <ArrowUpRight size={16}/></Link></nav></div>}
    </header>
  );
}
