import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Contribute = () => {
  return (
    <div className="mt-10 p-1">
      <h1 className="text-4xl font-semibold text-center text-sky-400">
        Contribute
      </h1>
      <div className="mx-9 mt-5 border border-black-800 rounded-md flex">
        <div className="w-1/5 h-70 flex justify-center items-center">
          <input
            className="form-control
						block
						px-3
						py-1.5
						text-base
						font-normal
						text-gray-700
						bg-white bg-clip-padding
						border border-solid border-gray-300
						rounded
						m-0
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="file"
						id="formFile"
          />
        </div>

        <div className="w-4/5">
          <div className="ml-3 pl-5 pr-5">
            <textarea
              name=""
              id=""
              rows="6"
              className="mt-4 border border-fuchsia-300 w-full focus:outline-none"
            ></textarea>
          </div>
          <div className="flex text-yellow-500 justify-center font-bold mt-2 ">
            <AiOutlineStar size={"30px"} />
            <AiOutlineStar size={"30px"} />
            <AiOutlineStar size={"30px"} />
            <AiOutlineStar size={"30px"} />
            <AiOutlineStar size={"30px"} />
          </div>
        </div>
      </div>

      <div className="mx-10 mt-10">
        <h1 className="text-4xl font-semibold text-center text-sky-400">
          My Contributions
        </h1>
        <div className="mt-4 grid pt-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className=" bg-white drop-shadow-md rounded-lg">
            <div className="w-full h-48 ">
              <img
                src="/src/assets/nature.jpg"
                className="object-contain w-full h-48"
              />
            </div>
            <div className="p-3 space-y-4">
              <div className="text-center">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum et aut numquam, amet voluptates perspiciatis distinctio
                  non eius eum magnam pariatur repudiandae magni impedit
                  reprehenderit, quas culpa enim aliquid exercitationem?{" "}
                </p>
              </div>
              <div className="flex text-yellow-500 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>

          <div className=" bg-white drop-shadow-md rounded-lg">
            <div className="w-full h-48 ">
              <img
                src="/src/assets/nature.jpg"
                className="object-contain w-full h-48"
              />
            </div>
            <div className="p-3 space-y-4">
              <div className="text-center">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum et aut numquam, amet voluptates perspiciatis distinctio
                  non eius eum magnam pariatur repudiandae magni impedit
                  reprehenderit, quas culpa enim aliquid exercitationem?{" "}
                </p>
              </div>
              <div className="flex text-yellow-500 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>

          <div className=" bg-white drop-shadow-md rounded-lg">
            <div className="w-full h-48 ">
              <img
                src="/src/assets/nature.jpg"
                className="object-contain w-full h-48"
              />
            </div>
            <div className="p-3 space-y-4">
              <div className="text-center">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum et aut numquam, amet voluptates perspiciatis distinctio
                  non eius eum magnam pariatur repudiandae magni impedit
                  reprehenderit, quas culpa enim aliquid exercitationem?{" "}
                </p>
              </div>
              <div className="flex text-yellow-500 justify-center">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
