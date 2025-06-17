import BreastCanser from "../../../assets/images/BreastCanser.svg";
import MennaFathy from "../../../assets/images/MennaFathy.svg";

import DiabetesImg from "../../../assets/images/diabetes.svg";
import skinDiseases from "../../../assets/images/skin-diseases.svg";
import eyeImg from "../../../assets/images/eye-diseases.svg";
import heartImg from "../../../assets/images/heart-diseases.jpg";
import { Link } from "react-router-dom";



const blogs = [
  {
    title: "Diabetes",
    description:
      "Diabetes is a chronic medical condition that occurs when the body is unable to regulate blood sugar levels effectively.",
    image: DiabetesImg,
    link: "#",
  },

  {
    title: "Skin diseases",
    description:
      "Skin diseases refer to a wide range of conditions that affect the skin, the body's largest organ.",
    image: skinDiseases,
    link: "#",
  },
  {
    title: "Eye diseases",
    description:
      "Eye diseases refer to a wide range of conditions that affect the health and function of the eyes.",
    image: eyeImg,
    link: "#",
  },
    {
    title: "Heart Disease",
    description:
      "Heart diseases refer to a range of conditions that affect the heart.",
    image: heartImg,
    link: "#",
  },

];

export default function BlogsSection() {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Blogs & News</h2>
        <p className="text-center text-gray-600 mb-12">
          Varied articles to enrich your health knowledge and help you <br />
          better understand different medical conditions
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Main Blog */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={BreastCanser}
              alt="Breast Cancer"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <img
                  src={MennaFathy}
                  alt="Author"
                  className="w-6 h-6 rounded-full mr-2"
                />
                By Menna Fathy
              </div>
              <h3 className="text-xl font-semibold mb-2">Breast cancer</h3>
              <p className="text-gray-700 text-sm">
                Breast cancer is a type of cancer that forms in the cells of the
                breast. It is one of the most common cancers affecting women
                worldwide, though it can also occur in men. Early detection
                plays a crucial role in improving survival rates. Regular
                self-examinations, mammograms, and awareness of symptoms such as
                lumps, changes in breast shape, or unusual discharge can help
                identify the disease at an early stage
                <a href="#" className="text-blue-600 font-semibold ml-1">
                  Read More
                </a>
              </p>
            </div>
          </div>

          {/* Side Blogs */}
          <div className="space-y-6">
            {blogs.map((blog, index) => (
              <div key={index} className="flex bg-white rounded-lg shadow-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-28 h-28 object-cover rounded-l-lg"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{blog.title}</h4>
                  <p className="text-sm text-gray-600">
                    {blog.description}
                    <a href={blog.link} className="text-blue-600 ml-1">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link to='' style={{backgroundColor:'#0367A1'}} className=" text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            See More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
