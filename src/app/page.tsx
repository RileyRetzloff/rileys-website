const fileUrls = [
  "https://34ggzkze9s.ufs.sh/f/QUrPhpHwWNxUnTWIuK0atRjHTdu4XvcMD1S6gyL5WNQCzP3Z",
];

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col place-items-center px-3">
      <div>
        <h1>Riley Retzloff</h1>
        <div className="overflow-hidden rounded-xl sm:h-48 md:h-64 lg:h-72 xl:h-96">
          <img src={fileUrls[0]} alt="Image 1" className="object-cover" />
          <div></div>
        </div>
        <h2>this is my website</h2>
        <p>that&apos;s just what it is.</p>
        <p>&macr;&#92;_(&#12484;)_/&macr;</p>
      </div>
    </main>
  );
}
