import Link from 'next/link';
import { ArrowUpRight, Activity, BedDouble, Wheat, BriefcaseBusiness, HardHat, Boxes } from 'lucide-react';
const iconMap = { medical: Activity, hospitality: BedDouble, food: Wheat, office: BriefcaseBusiness, building: HardHat, procurement: Boxes } as const;
export default function CategoryCard({ category, index }: { category: { name: string; description: string; icon: keyof typeof iconMap; count: string }; index: number }) {
  const Icon = iconMap[category.icon];
  return <Link href="/products" className="category-card"><div className="category-card-top"><div className="category-icon"><Icon size={22}/></div><span className="category-index">0{index + 1}</span></div><h3>{category.name}</h3><p>{category.description}</p><div className="category-card-bottom"><span>{category.count}</span><span className="category-arrow"><ArrowUpRight size={17}/></span></div></Link>;
}
