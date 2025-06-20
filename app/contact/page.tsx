import { PageTitle } from "@/components/page-title"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PageTitle title="Get In Touch" />
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
