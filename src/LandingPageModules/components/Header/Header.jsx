// import HeaderImg from '../../../assets/images/HeaderImg.png'
import { Link } from 'react-router-dom'
import HeaderImg from '../../../assets/images/HeaderImg.svg'



export default function Header() {
  return (
    <>
      {/* Header Section */}
      <section id='header' className="bg-white pt-28 pb-10 px-4 md:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Understand Your Health and <br /> Make Confident Decisions
            </h1>
            <p className="text-gray-700 mb-6">
              Discover accurate health insights with our AI-powered application.
              Upload your health data or medical reports to receive an initial
              assessment that helps you monitor your condition or consult a
              specialist when needed. Simplicity and data security all in one place.
            </p>
            {/* <Link to='https://www.facebook.com/profile.php?id=61572294456946' style={{backgroundColor:'#0367A1'}} className="text-white font-medium py-2 px-6 rounded-md">
              Get Started
            </Link> */}
          </div>

          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={HeaderImg}
              alt="Doctors"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section style={{backgroundColor:"#C0E3FF"}} className=" py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">235</h2>
            <p className="text-gray-700">Happy Users</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900">1097</h2>
            <p className="text-gray-700">Health Assessments Performed</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900">14</h2>
            <p className="text-gray-700">Countries Using Disease Detective</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900">100+</h2>
            <p className="text-gray-700">Data Privacy Guaranteed</p>
          </div>
        </div>
      </section>
    </>
  )
}
