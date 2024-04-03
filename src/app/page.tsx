import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import InfiniteMovingCardsDemo from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Whychooseus from "@/components/Whychooseus";

export default function Home(){
  return(
    <main className="flex min-h-screen flex-col bg-black">
              <Herosection/>
              <FeaturedCourses/>
              <Whychooseus/>
              <InfiniteMovingCardsDemo/>
              <UpcomingWebinars/>
              <Instructors/>
              <Footer/>
    </main>
  );
}