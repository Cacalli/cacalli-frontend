export default function VideoContainer() {
  return (
    // <div className="py-4 bg-green-one flex flex-col ">
    //
    // </div>
    <div className="bg-green-one py-40">
      <div className="w-10/12 flex mx-auto">
        <div className="flex w-full items-center">
          <div className="flex-1">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OA30NLDQQMY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-7xl text-neutral-white font-lovelo">VIDEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
