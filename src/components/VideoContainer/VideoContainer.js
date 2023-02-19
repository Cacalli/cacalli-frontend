export default function VideoContainer() {
  return (
    <div className="py-4 bg-green-one flex flex-col ">
      <iframe
        height="600"
        src="https://www.youtube.com/embed/OA30NLDQQMY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
