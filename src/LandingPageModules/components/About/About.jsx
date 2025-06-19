import { Link } from 'react-router-dom';
import AboutImg from '../../../assets/images/About.svg'

export default function About() {
  return (
    <>
      <section id="about" style={{backgroundColor: "#F0F9FF"}} className=" py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={AboutImg }
              alt="About Us"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About us</h2>
            <p className="text-gray-700 mb-4">
              At Disease Detective, we believe that good health starts with
              awareness. Our AI-powered application provides accurate initial
              health assessments, covering a wide range of conditions, including
              common and critical diseases. Our goal is to empower users to make
              informed health decisions quickly and easily. With Disease
              Detective, you can upload your health data or medical reports to
              gain comprehensive insights into your health condition, with the
              option to consult specialized doctors when needed. By focusing on
              user-friendly design and data security, we deliver a unique
              experience that helps you stay in control of your health with
              peace of mind.
            </p>
            <Link to='https://www.facebook.com/profile.php?id=61572294456946' style={{backgroundColor:'#0367A1'}} className=" text-white font-medium py-2 px-6 rounded-md">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
