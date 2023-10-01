const Award = ({ name, date, description, isDark }) => {
    const textColor = isDark ? "text-white" : "text-black";
    const bgColor = isDark ? "bg-gray-800" : "bg-white";
    const shadow = isDark
      ? " hover:shadow-xl transition-shadow"
      : " hover:shadow-lg transition-shadow";
    const textStyle = {
      fontFamily: "'Quicksand', sans-serif",
      color: isDark ? "white" : "black",
    };
  
    return (
      <div
        className={`p-4 mb-4 rounded-lg ${bgColor} ${textColor} ${shadow} transition-transform transform hover:scale-105`}
        style={textStyle}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className={`font-semibold text-lg lg:2xl md:xl ${textColor}`}>{name}</h2>
          <p className={`text-md md:text-lg lg:text-xl text-gray-500 ${textColor}`}>{date}</p>
        </div>
        <p className={`text-base ${textColor}`}>{description}</p>
      </div>
    );
  };
  
  export default Award;
  