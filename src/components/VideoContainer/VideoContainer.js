export default function VideoContainer() {
  return (
    <div className=" bg-green-one md:py-40 py-20">
      <div className="flex space-y-10 md:flex-row flex-col w-10/12 mx-auto">
      <div className="md:w-1/2 flex items-center md:order-last">
          <p className="rubik items-center text-4xl md:text-7xl text-neutral-white font-lovelo pl-24">
            CONOCE CACALLI
          </p>
        </div>
        <div className="md:w-1/2 justify-center">
          <iframe
            className="rounded-lg w-full aspect-video"
            src="https://www.youtube.com/embed/OA30NLDQQMY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}
