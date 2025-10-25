import { TestimonialsSection } from "../testimonials-with-marquee"
import ClientImg1 from "../../assets/ClientReviewImgs/clientImg1.png"
import ClientImg2  from "../../assets/ClientReviewImgs/clientImg2.png"
import ClientImg3  from "../../assets/ClientReviewImgs/clientImg3.png"

const testimonials = [
  {
    author: {
      name: "MNAS School Society",
      avatar: ClientImg1
    },
    text: "Reduced manual member management tasks by 70%.Integrated PDF generation and automated reports for easy record.",
   
  },
  {
    author: {
      name: "Aslam Agency",
      avatar: ClientImg2
    },
    text: "We built a complete eCommerce platform enabling Aslam Agency to sell products online with real-time order tracking, payment integration, and admin management dashboard."
  },
  {
    author: {
      name: "ABC Hotel",
      avatar: ClientImg3
    },
    text: "We designed a professional and eye-catching promotional poster for ABC Hotel to enhance its brand presence and attract new customers both online and offline.",
  }
]

function TestimonialsSectionDemo() {
  return (
    <div className="bg-black">
        <TestimonialsSection
          title="Client Achievements"
          description="Building trust with every collaboration"
          testimonials={testimonials}
        />
    </div>
  )
}
export default TestimonialsSectionDemo;