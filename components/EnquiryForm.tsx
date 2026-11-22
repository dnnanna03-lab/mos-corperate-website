'use client';
import { useState } from 'react';
export default function EnquiryForm({quote=false}:{quote?:boolean}){
 const [submitted,setSubmitted]=useState(false);
 return <form className="enquiry-form" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>
 {submitted?<div className="form-success"><strong>Thank you for your enquiry.</strong><p>Your details have been captured in this demo form. Connect a form service or email backend before publishing to receive submissions.</p><button type="button" onClick={()=>setSubmitted(false)}>Send another enquiry</button></div>:<>
 <div className="form-row"><label>Full name<input required name="name" placeholder="Your full name"/></label><label>Organisation<input name="organisation" placeholder="Company or organisation"/></label></div>
 <div className="form-row"><label>Email address<input required type="email" name="email" placeholder="name@example.com"/></label><label>Phone number<input name="phone" placeholder="Phone / WhatsApp"/></label></div>
 {quote&&<label>Supply category<select name="category" defaultValue=""><option value="" disabled>Select a category</option><option>Medical supplies</option><option>Hotel & hospitality</option><option>Foodstuff & provisions</option><option>Office stationery</option><option>Building materials</option><option>General procurement</option><option>Other / special sourcing</option></select></label>}
 <label>{quote?'Tell us what you need':'Message'}<textarea required name="message" rows={5} placeholder={quote?'Describe the products, quantities, delivery location and timeline if known.':'How can MOS help you?'} /></label><button className="button button-gold" type="submit">{quote?'Submit quote request':'Send message'}</button></>}
 </form>
}
