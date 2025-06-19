import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import logoImg from "../../../assets/images/logo.png";

export default function Diabetes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/diabetes/predict/", {
        method: "POST",
        headers: {
          key: "token",
          token: localStorage.getItem("token"), // ✅ dynamic token
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pregnancies: Number(data.pregnancies),
          glucose: Number(data.glucose),
          blood_pressure: Number(data.blood_pressure),
          insulin: Number(data.insulin),
          bmi: Number(data.bmi),
          diabetes_pedigree_function: Number(data.diabetes_pedigree_function),
          age: Number(data.age),
          skin_thickness: Number(data.skin_thickness),
        }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Request failed");
      }

      const { prediction, probability, risk_level } = await response.json();

toast.success(
  <div>
    <p>🩺 <strong>Prediction Result:</strong></p>
    <p>• Condition: {prediction === 1 ? "Diabetic" : "Not Diabetic"}</p>
    <p>• Risk Level: {risk_level}</p>
    <p>• Probability: {(probability * 100).toFixed(2)}%</p>
  </div>,
  {
    autoClose: false,
    closeOnClick: false,
    draggable: false,
    pauseOnHover: true,
  }
);
    } catch (error) {
      console.error("❌ Prediction Error:", error.message);
      toast.error(error.message || "Failed to get prediction");
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 shadow-lg">
            {/* Logo */}
            <div className="text-center">
              <img className="mx-auto mb-4" src={logoImg} alt="logo-image" />
            </div>

            {/* Heading */}
            <div className="text-left mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Diabetes Prediction
              </h2>
              <p className="text-gray-500">
                Enter your health info to predict diabetes risk
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Pregnancies */}
              <div>
                <label htmlFor="pregnancies" className="block text-sm font-medium text-gray-700">Pregnancies</label>
                <input
                  type="number"
                  id="pregnancies"
                  {...register("pregnancies", {
                    required: "Pregnancies is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 20, message: "Maximum is 20" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.pregnancies && <p className="text-red-500 text-sm mt-1">{errors.pregnancies.message}</p>}
              </div>

              {/* Glucose */}
              <div>
                <label htmlFor="glucose" className="block text-sm font-medium text-gray-700">Glucose</label>
                <input
                  type="number"
                  step="any"
                  id="glucose"
                  {...register("glucose", {
                    required: "Glucose is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 300, message: "Maximum is 300" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.glucose && <p className="text-red-500 text-sm mt-1">{errors.glucose.message}</p>}
              </div>

              {/* Blood Pressure */}
              <div>
                <label htmlFor="blood_pressure" className="block text-sm font-medium text-gray-700">Blood Pressure</label>
                <input
                  type="number"
                  id="blood_pressure"
                  {...register("blood_pressure", {
                    required: "Blood Pressure is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 200, message: "Maximum is 200" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.blood_pressure && <p className="text-red-500 text-sm mt-1">{errors.blood_pressure.message}</p>}
              </div>

              {/* Insulin */}
              <div>
                <label htmlFor="insulin" className="block text-sm font-medium text-gray-700">Insulin</label>
                <input
                  type="number"
                  step="any"
                  id="insulin"
                  {...register("insulin", {
                    required: "Insulin is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 1000, message: "Maximum is 1000" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.insulin && <p className="text-red-500 text-sm mt-1">{errors.insulin.message}</p>}
              </div>

              {/* BMI */}
              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700">BMI</label>
                <input
                  type="number"
                  step="any"
                  id="bmi"
                  {...register("bmi", {
                    required: "BMI is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 70, message: "Maximum is 70" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.bmi && <p className="text-red-500 text-sm mt-1">{errors.bmi.message}</p>}
              </div>

              {/* Diabetes Pedigree Function */}
              <div>
                <label htmlFor="diabetes_pedigree_function" className="block text-sm font-medium text-gray-700">Diabetes Pedigree Function</label>
                <input
                  type="number"
                  step="any"
                  id="diabetes_pedigree_function"
                  {...register("diabetes_pedigree_function", {
                    required: "DPF is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 2, message: "Maximum is 2" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.diabetes_pedigree_function && <p className="text-red-500 text-sm mt-1">{errors.diabetes_pedigree_function.message}</p>}
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  id="age"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 120, message: "Maximum is 120" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
              </div>

              {/* Skin Thickness */}
              <div>
                <label htmlFor="skin_thickness" className="block text-sm font-medium text-gray-700">Skin Thickness</label>
                <input
                  type="number"
                  id="skin_thickness"
                  {...register("skin_thickness", {
                    required: "Skin Thickness is required",
                    min: { value: 0, message: "Minimum is 0" },
                    max: { value: 100, message: "Maximum is 100" },
                    valueAsNumber: true,
                  })}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                />
                {errors.skin_thickness && <p className="text-red-500 text-sm mt-1">{errors.skin_thickness.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-4 w-full text-white hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  style={{ backgroundColor: "#0367A1" }}
                >
                  Predict
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
