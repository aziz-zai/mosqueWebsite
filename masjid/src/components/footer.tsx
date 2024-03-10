import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-primary-300 text-secondary-0 flex items-center justify-center py-[50px] font-[16px]">
      <div className="flex w-full flex-wrap items-center justify-center gap-16 p-1 md:w-fit md:gap-12 ">
        <div className="flex h-[130px] flex-col md:m-auto">
          <h3 className="mb-1 font-bold text-white">Links</h3>
          <ul className="flex flex-col text-white">
            <Link href="/#top">Gebetszeiten</Link>
            <Link href="/#about">Veranstaltungen</Link>
            <Link href="/#contact">News</Link>
            <Link href="/Impressum">Kontakt</Link>
          </ul>
        </div>
        <div className="flex h-[130px] flex-col md:m-auto">
          <h3 className="mb-1 font-bold text-white">Robert</h3>
          <p className="text-white">70599, Stuttgart</p>
          <p className="text-white">Deutschland</p>
        </div>
        <div className="flex h-[130px] flex-col md:m-auto">
          <h3 className="mb-1 font-bold text-white">Contact</h3>
          <p className="flex gap-2 text-white">(+49)179 6686832</p>
          <p className="flex gap-2 text-white">info@robooodrive.de</p>
          <p className="flex gap-2 text-white">www.robooDrive.com</p>
        </div>
      </div>
    </div>
  );
};
