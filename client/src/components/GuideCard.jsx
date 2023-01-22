import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const GuideCard = ({ setFunc }) => {
    return (
        <div className="flex justify-center border-2 rounded-lg">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={
                        "https://vectorified.com/images/avatar-icon-png-15.png"
                    }
                    alt=""
                />
                <div className="p-6 flex flex-col justify-start gap-1">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                        {["Ram", "Shyam", "Hari", "Jhari", "Kamala", "Samala"][
                            Math.ceil(Math.random() * 100)%5
                        ] +" "+
                            [
                                "Budathoki",
                                "Mudathoki",
                                "Gudathoki",
                                "Poudel",
                                "Karki",
                                "Maharjan",
                            ][Math.ceil(Math.random() * 100)%5]}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <div className="flex gap-4">
                        <span>* 25y/M</span>
                        <span>* English,Spanish</span>
                    </div>
                    <div className="text-gray-600 text-xs flex flex-col gap-4">
                        <div className="flex text-yellow-500 text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <button
                            className="button w-fit mx-auto bg-blue-700 text-white"
                            onClick={(e) => setFunc(true)}
                        >
                            Place a bid
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideCard;
