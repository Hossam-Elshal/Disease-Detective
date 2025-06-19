import { Link } from 'react-router-dom';
import leftImg from '../../../assets/images/leftImg.svg';
import rightImg from '../../../assets/images/rightImg.svg';
import aiMoldel from '../../../assets/images/test.jpg';



export default function Services() {
  return (
    <section id="services" className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          We provide innovative services to support your health and detect
          diseases early using the latest AI technologies.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
          <div className="bg-[#F7FAFC] rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
            <img
              src={aiMoldel}
              alt="Service 1"
              className="w-full h-[230px] object-cover"
            />
            <div className="p-4 text-center">
                <strong>Diabetes Test by AI: </strong> 
              <p className="text-gray-700 text-sm mb-4">
                Check your risk of diabetes instantly using AI-powered predictions based on your health data.

              </p>
              <Link to='/diabetes' style={{backgroundColor:'#0367A1'}} className=" text-white text-sm font-medium py-2 px-4 rounded-md">
                Test Now
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7FAFC] rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
            <img
              src={leftImg}
              alt="Service 1"
              className="w-full h-[230px] object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-700 text-sm mb-4">
                A guided survey that helps users identify their potential health
                conditions through symptom-based questions and AI-driven insights.
              </p>
              <Link to=''className="bg-gray-300 text-gray-900 text-sm font-medium py-2 px-4 rounded-md">
                Disease Detection
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7FAFC] rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
            <img
              src={rightImg}
              alt="Service 2"
              className="w-full h-[230px] object-cover"
            />
            <div className="p-4 text-left">
              <p className="text-gray-700 text-sm mb-4">
                Select a specific condition and upload related medical records for AI-driven analysis and accurate initial assessment and diagnosis.
              </p>
              <div className="text-center">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 text-sm font-medium py-2 px-4 rounded-md">
                  Diagnosis Options
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
