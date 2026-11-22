import Link from 'next/link';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import LogoPlaceholder from './LogoPlaceholder';
import { site } from '@/lib/site';
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-top">
    <div className="footer-brand"><LogoPlaceholder/><p>Reliable sourcing. Smarter supply. Stronger partnerships.</p><p className="footer-note">Connecting organisations with dependable supply solutions across multiple sectors.</p></div>
    <div className="footer-column"><h4>Explore</h4>{site.nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div className="footer-column"><h4>Supply categories</h4><Link href="/products">Medical supplies</Link><Link href="/products">Hotel & hospitality</Link><Link href="/products">Foodstuff</Link><Link href="/products">Office stationery</Link><Link href="/products">Building materials</Link></div>
    <div className="footer-column footer-contact"><h4>Get in touch</h4><a href="mailto:info@megaorthoservices.ng"><Mail size={15}/> info@megaorthoservices.ng</a><a href="tel:+234"><Phone size={15}/> Contact our team</a><span><MapPin size={15}/> Nigeria</span><Link className="footer-quote" href="/request-a-quote">Start an enquiry <ArrowUpRight size={15}/></Link></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Mega Ortho Services Nigeria Limited. All rights reserved.</span><span>{site.domain}</span></div></footer>;
}
