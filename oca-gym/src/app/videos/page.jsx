const Videos = () => {
  return (
    <div className="flex flex-col h-auto bg-bodyBackground items-center justify-center">
      <div className="text-offWhite w-full flex flex-col items-center bg-primary pt-36 pb-16 lg:py-44 lg:pb-28 text-center">
        <div className="my-10 w-[90%] mx-auto  space-y-8 flex items-center justify-center flex-col">
          <h3 className="my-4 text-xl font-bold px-8 border-b-2 py-2">
            WATCH OUR FIGHT HIGHLIGHTS AND MORE!!
          </h3>
          {/* Gabriel Reyes Highlights */}
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center justify-center lg:flex-wrap">
            <div className="md:w-[70%] md:h-[40vh] lg:w-[40%] lg:h-[50vh]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/l3BZnMA9xbQ?si=Ro_OMDH4wosN8-rq"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
                mozallowfullscreen
                webkitallowfullscreen
              ></iframe>
            </div>
            {/* 559 103 Post fights */}
            <div className="md:w-[70%] md:h-[40vh] lg:w-[40%] lg:h-[50vh]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7AWwyT-9kD0?si=NeUmK7xEUajcRhzV"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
                mozallowfullscreen
                webkitallowfullscreen
              ></iframe>
            </div>
            {/* Matthew Vargas 559 102 post fight */}
            <div className="md:w-[70%] md:h-[40vh] lg:w-[40%] lg:h-[50vh]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Fi9UpYKb5Uk?si=OmEpsC99OOLgZqs7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
                mozallowfullscreen
                webkitallowfullscreen
              ></iframe>
            </div>
            {/* Jacobs interview */}
            <div className="md:w-[70%] md:h-[40vh] lg:w-[40%] lg:h-[50vh]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0wboxjHmTzE?si=PWvYC82cJUmx8jt4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="true"
                mozallowfullscreen
                webkitallowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videos;
