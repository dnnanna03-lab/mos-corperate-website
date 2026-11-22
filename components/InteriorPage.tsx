import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function InteriorPage({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children?:React.ReactNode}){return <section className="interior-page"><div className="container"><div className="interior-hero"><div className="eyebrow"><span className="eyebrow-dot"/>{eyebrow}</div><h1>{title}</h1><p>{description}</p><Link className="button button-gold" href="/request-a-quote">Discuss your requirements <ArrowRight size={16}/></Link></div>{children}</div></section>}
