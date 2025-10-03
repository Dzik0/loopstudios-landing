import photo from "/image-interactive.jpg";

export default function HeroSection() {
  return (
    <section className="mt-20 px-6">
      <div className="grid md:grid-cols-6 md:grid-rows-3">
        <div className="md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-4 md:bg-green-500">
          <img src={photo} alt="" />
        </div>
        <div className="md:col-start-4 md:col-end-7 md:row-start-2 md:row-end-4 md:h-20 md:bg-red-500">
          <div className="font-mySize mt-10 flex flex-col gap-4 text-center">
            <h2 className="text-4xl uppercase">The leader in interactive vr</h2>
            <p className="flex leading-7 text-gray-600">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
