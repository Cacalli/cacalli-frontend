export default function VideoContainer() {
  return (
    <div className="flex  bg-green-one py-40">
      <div className=" md:flex flex-1 justify-center">
        <iframe
          width="700"
          height="350"
          src="https://www.youtube.com/embed/OA30NLDQQMY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="md:flex flex-1  mb-6 items-center ">
        <p className="text-5xl md:text-7xl text-neutral-white font-lovelo pl-24">
          Conoce Cacalli
        </p>
      </div>
    </div>
  );
}
