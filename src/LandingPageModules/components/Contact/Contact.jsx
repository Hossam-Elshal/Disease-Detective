import { useForm } from "react-hook-form";
import contact from "../../../assets/images/contact.png"; 

export default function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white py-12 px-4 md:px-20">
      <h2 className="text-2xl font-bold text-center mb-8">Contact us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 h-full self-stretch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "Email is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: "Phone number is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="border border-gray-300 rounded-md p-3 w-full"
            />
          </div>

          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="border border-gray-300 rounded-md p-3 w-full h-64 resize-none"
          />

          <button
            type="submit"
            style={{backgroundColor:'#0367A1'}} 
            className=" text-white py-3 px-6 rounded-md hover:bg-blue-800 w-full"
          >
            Send Message
          </button>
        </form>

        {/* Image */}
<div className="flex justify-center items-center h-full self-stretch">
  <img
    src={contact}
    alt="Contact"
    className="rounded-xl max-w-96 h-full object-contain"
  />
</div>
      </div>
    </div>
  );
}
