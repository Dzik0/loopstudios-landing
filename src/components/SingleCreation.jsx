export default function SingleCreation({ title, img }) {
  return (
    <div className="relative">
      <img src={img.mobile} alt={title} className="md:hidden" />
      <img src={img.pc} alt={title} className="hidden md:block" />
      <p className="absolute bottom-3 left-4 text-xl tracking-wider text-white uppercase">
        <span className="block">{title.one}</span>
        <span className="block">{title.two}</span>
      </p>
    </div>
  );
}
