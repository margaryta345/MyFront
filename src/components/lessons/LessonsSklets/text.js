export const ImgMaker = ({ src, text }) => {
  return (
    <div className="mt-6 mb-2 flex justify-center items-center flex-col">
      <img className="hover:shadow-2xl" alt={src} src={src} />
      <p className="mt-2 font-semibold">{text}</p>
    </div>
  );
};
export const Topic = ({ topic, tex }) => {
  return (
    <div>
      <p className="mt-6 text-xl font-semibold mb-4">{topic}</p>
      <p>{tex}</p>
    </div>
  );
};
