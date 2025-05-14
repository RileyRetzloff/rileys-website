const fileUrls = [
  "https://34ggzkze9s.ufs.sh/f/QUrPhpHwWNxUnTWIuK0atRjHTdu4XvcMD1S6gyL5WNQCzP3Z",
];

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col place-items-center">
      <div id="body" className="h-full bg-gray-50 sm:w-full lg:w-4/5 xl:w-2/3">
        <div
          id="header"
          className="flex place-items-center justify-between bg-gray-100 px-5"
        >
          <a href="#" className="hover:underline">
            <h1>Riley Retzloff</h1>
          </a>
          <div className="h-8 w-8 rounded-full bg-gray-900 shadow-black transition-all duration-300 hover:scale-95 hover:shadow-lg/50"></div>
        </div>
        <div id="content" className="px-8 py-5">
          <h2>this is my website</h2>
          <p>that&apos;s what it is.</p>
          <div className="w-72 overflow-hidden rounded-lg">
            <img src={fileUrls[0]} alt="Image 1" />
          </div>
        </div>
      </div>
    </main>
  );
}
