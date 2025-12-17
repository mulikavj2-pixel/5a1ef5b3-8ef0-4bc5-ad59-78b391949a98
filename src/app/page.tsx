"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Globe, Users, Award, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="smallSizeLargeTitles"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Wanderlust"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="WANDERLUST"
          description="Discover extraordinary destinations and create unforgettable travel experiences with our expertly curated journeys"
          buttons={[
            {
              text: "Explore Destinations",
              href: "destinations"
            },
            {
              text: "Start Planning",
              href: "contact"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983910330-8ze24jhg.jpg",
              imageAlt: "Tropical beach sunset destination"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983911901-kk62jcoq.jpg",
              imageAlt: "Mountain landscape scenic hiking"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983913459-d9y07rgf.jpg",
              imageAlt: "European historic city architecture"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="destinations" data-section="destinations">
        <ProductCardSix
          title="Featured Destinations"
          description="Handpicked locations from around the world offering unique experiences and unforgettable memories"
          tag="Popular"
          products={[
            {
              id: "1",
              name: "Bali Paradise",
              price: "From $1,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983914773-iim0v8p5.jpg",
              imageAlt: "Bali tropical island beach"
            },
            {
              id: "2",
              name: "Paris Romance",
              price: "From $1,899",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983916298-yztmqxol.jpg",
              imageAlt: "Paris Eiffel Tower city"
            },
            {
              id: "3",
              name: "Tokyo Adventure",
              price: "From $1,599",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983917647-9t0t9srq.jpg",
              imageAlt: "Tokyo modern city lights"
            },
            {
              id: "4",
              name: "New Zealand Explorer",
              price: "From $2,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983918787-ksn0qs2x.jpg",
              imageAlt: "New Zealand mountains landscape"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Your trusted partner in travel since 2010, we've connected thousands of travelers with their dream destinations"
          metrics={[
            {
              icon: Globe,
              label: "Destinations",
              value: "150+"
            },
            {
              icon: Users,
              label: "Happy Travelers",
              value: "25,000+"
            },
            {
              icon: Award,
              label: "Awards Won",
              value: "35"
            },
            {
              icon: TrendingUp,
              label: "Customer Satisfaction",
              value: "98%"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Meet Our Expert Team"
          description="Passionate travel professionals dedicated to crafting your perfect journey"
          tag="Team"
          team={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983920314-kyfxfxmb.jpg",
              imageAlt: "Sarah Mitchell travel director"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Destination Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983921401-zrjgtumr.jpg",
              imageAlt: "James Chen destination expert"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Travel Coordinator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983922880-fezgfxnc.jpg",
              imageAlt: "Emma Rodriguez travel coordinator"
            },
            {
              id: "4",
              name: "Michael Foster",
              role: "Adventure Guide",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983924217-nsnj8obz.jpg",
              imageAlt: "Michael Foster adventure guide"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Travelers Say"
          description="Real experiences from travelers who discovered the world with us"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Jessica Williams",
              role: "Adventurer",
              company: "New York, USA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983925688-cqnyrnke.jpg",
              imageAlt: "Jessica Williams happy traveler"
            },
            {
              id: "2",
              name: "David Kumar",
              role: "Nature Enthusiast",
              company: "London, UK",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983927131-685g81j4.jpg",
              imageAlt: "David Kumar satisfied tourist"
            },
            {
              id: "3",
              name: "Emma & John Hayes",
              role: "Honeymooners",
              company: "Toronto, Canada",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983928309-qr8xd398.jpg",
              imageAlt: "Happy couple travelers"
            },
            {
              id: "4",
              name: "Rachel Martinez",
              role: "Solo Explorer",
              company: "Barcelona, Spain",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983929834-h86r4l7a.jpg",
              imageAlt: "Rachel Martinez explorer"
            },
            {
              id: "5",
              name: "Thomas Anderson",
              role: "Family Traveler",
              company: "Sydney, Australia",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983931274-b8iqt39h.jpg",
              imageAlt: "Thomas Anderson traveler"
            },
            {
              id: "6",
              name: "Lisa Chen",
              role: "International Tourist",
              company: "Singapore",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765983932568-85cyf7bk.jpg",
              imageAlt: "Lisa Chen happy tourist"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our travel services and booking process"
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I book my trip?",
              content: "We recommend booking 2-3 months in advance to secure the best rates and availability. However, we can accommodate last-minute bookings depending on destination and season. Contact us for availability."
            },
            {
              id: "2",
              title: "What is included in your travel packages?",
              content: "Our packages typically include accommodations, selected meals, guided tours, and transportation. Specific inclusions vary by package. We provide detailed itineraries outlining what is covered before you book."
            },
            {
              id: "3",
              title: "Do you offer travel insurance?",
              content: "Yes, we offer comprehensive travel insurance options including trip cancellation, medical coverage, and baggage protection. Insurance can be added during the booking process."
            },
            {
              id: "4",
              title: "What is your cancellation policy?",
              content: "Cancellation terms vary by package and booking conditions. Generally, cancellations made 60+ days before travel receive full refunds, while closer cancellations incur penalties. Full details are provided at booking."
            },
            {
              id: "5",
              title: "Can you customize a package for my group?",
              content: "Absolutely! We specialize in custom group tours. Contact our team with your preferences, dates, and group size, and we'll create a personalized itinerary tailored to your needs."
            },
            {
              id: "6",
              title: "Do you handle visa requirements?",
              content: "We provide guidance on visa requirements for your destination. We can advise on application procedures but recommend checking official embassy websites for current requirements."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to start your adventure?"
          inputPlaceholder="Enter your email to get started"
          buttonText="Get Inspired"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Wanderlust"
          title="Discover the world with confidence and expert guidance"
          columns={[
            {
              title: "Destinations",
              items: [
                { label: "Asia", href: "#" },
                { label: "Europe", href: "#" },
                { label: "Americas", href: "#" },
                { label: "Africa", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#" },
                { label: "Our Team", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Booking Help", href: "#" },
                { label: "Travel Tips", href: "#" }
              ]
            }
          ]}
          contactItems={[
            {
              icon: Phone,
              text: "+1 (555) 123-4567"
            },
            {
              icon: Mail,
              text: "hello@wanderlust.travel"
            },
            {
              icon: MapPin,
              text: "123 Travel Street, Adventure City, AC 12345"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}