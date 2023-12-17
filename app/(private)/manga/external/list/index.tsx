import Link from "next/link";
import React from "react";
import { FaFirefoxBrowser } from "react-icons/fa";

export default function MangaExternalList(): React.ReactElement {
  return <div className="bg-dark-2 py-2 px-4 rounded-lg">
    <h2>List of available websites</h2>
    <p className="mb-2">If you have recommendation of website to scrap, please contact developer. It's free and apporiximately takes 3 days</p>
    <div className="bg-dark-1 px-2 rounded-lg max-h-80 overflow-auto">
      <ListItem 
        siteName="Kiryuu"
        url="https://kiryuu.id/"/>
    </div>
  </div>
}

function ListItem({icon, siteName, url}: any): React.ReactElement {
  return <div className="flex flex-row gap-2 align-center border-b last:border-none border-strokedark py-2">
    <FaFirefoxBrowser size={24} className="self-center"/>
    <div>
      <p>{siteName}</p>
      <Link href={url} target="_blank">{url}</Link>
    </div>
  </div>
}