import SingleCreation from "./SingleCreation";
import { data } from "../data";

export default function CreationSection() {
  const myData = data.map((item) => (
    <SingleCreation title={item.name} img={item.img} key={item.id} />
  ));
  console.log(myData);

  return (
    <section className="mt-20 mb-10">
      <h2 className="mb-15 text-center text-4xl tracking-wider uppercase">
        our creations
      </h2>
      <div className="grid gap-6 px-8">{myData}</div>
      <div className="flex justify-center p-10">
        <button className="font-my-jose border p-4 px-12 font-semibold tracking-[0.4rem] uppercase">
          see all
        </button>
      </div>
    </section>
  );
}
