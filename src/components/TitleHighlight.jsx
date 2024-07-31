const TitleHighlight = ({ text }) => {
  return (
    <div className="flex items-center mb-2">
      <div className="bg-red-500 h-4 w-2 rounded-sm mr-2"></div>
      <h4 className="text-red-500 font-bold">{text}</h4>
    </div>
  );
};

export default TitleHighlight;
