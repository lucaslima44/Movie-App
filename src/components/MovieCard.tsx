export function MovieCard() {
  return (
    <div>
      <img
        src="https://preview.redd.it/new-poster-for-m-night-shyamalans-trap-v0-t39gmnfo6x9d1.jpeg?auto=webp&s=e87b08266a3823db6553ed5018036af714c65bed"
        alt="Trap movie poster"
        className="w-full h-72 object-cover"
      />
      <div className="text-left">
      <p className="text-xl font-bold mt-4">Trap</p>
      <p className="text-cyan-900 text-lg mt-1">Mystery, 6.5</p>
      <p className="mt-4 text-neutral-700">Lead backend dev at Clearbit. Former Clearbit and Loom.</p>
      </div>
    </div>
  );
}
