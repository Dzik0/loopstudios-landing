import SingleCreation from "./SingleCreation";

export default function CreationSection() {
  return (
    <section className="mt-20">
      <h2 className="mb-15 text-center text-4xl tracking-wider uppercase">
        our creations
      </h2>
      <div className="grid gap-6 px-8">
        <SingleCreation />
        <SingleCreation />
        <SingleCreation />
      </div>
    </section>
  );
}
