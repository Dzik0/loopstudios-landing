import SingleCreation from "./SingleCreation";
import { data } from "../data";

export default function CreationSection() {
  const myData = data.map((item) => (
    <SingleCreation title={item.name} img={item.img} key={item.id} />
  ));
  console.log(myData);

  return (
    <section className="mt-20 mb-10">
      <h2 className="mb-15 text-center text-4xl tracking-wider uppercase md:hidden">
        our creations
      </h2>
      <div className="mb-15 hidden items-center justify-between md:flex">
        <h2 className="hidden text-center text-4xl tracking-wider uppercase md:block">
          our creations
        </h2>
        <div>
          <button className="font-my-jose cursor-pointer border p-2 px-10 font-semibold tracking-[0.4rem] uppercase hover:bg-black hover:text-white">
            see all
          </button>
        </div>
      </div>
      <div className="grid gap-6 px-8 md:grid-cols-4 md:px-0">{myData}</div>
      <div className="flex justify-center p-10">
        <button className="font-my-jose border p-4 px-12 font-semibold tracking-[0.4rem] uppercase md:hidden">
          see all
        </button>
      </div>
    </section>
  );
}
