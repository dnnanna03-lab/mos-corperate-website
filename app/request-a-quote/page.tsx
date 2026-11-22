import InteriorPage from '@/components/InteriorPage';
import EnquiryForm from '@/components/EnquiryForm';
export default function Quote(){return <InteriorPage eyebrow="REQUEST A QUOTE" title="Let us know what you need." description="Share your supply requirement, including category, quantities and delivery details if available."><div className="form-wrap"><EnquiryForm quote/></div></InteriorPage>}
