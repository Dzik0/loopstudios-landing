import earth from "/image-deep-earth.jpg";

export default function SingleCreation() {
  return (
    <div className="relative">
      <img src={earth} alt="" />
      <p className="absolute bottom-3 left-4 text-xl tracking-wider text-white uppercase">
        <span className="block">deep</span>
        <span className="block">earth</span>
      </p>
    </div>
  );
}
