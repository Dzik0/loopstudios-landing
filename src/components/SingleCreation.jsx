export default function SingleCreation({ title, img }) {
  return (
    <div className="relative">
      <img src={img} alt="" />
      <p className="absolute bottom-3 left-4 text-xl tracking-wider text-white uppercase">
        <span className="block">{title.one}</span>
        <span className="block">{title.two}</span>
      </p>
    </div>
  );
}
