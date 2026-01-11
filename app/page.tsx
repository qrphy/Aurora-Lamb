import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-fit items-center justify-center bg-white font-sans dark:bg-black">
      <main className="flex min-h-[400px] w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-left sm:items-start sm:text-left">
          <p className="max-w-md text-2xl font-bold leading-8 text-black dark:text-white">
            You press the button.<br />You think the desk is lit… But actually,<br /> The
            whole evening just changed.
          </p>
        </div>
      </main>
    </div>
  );
}
