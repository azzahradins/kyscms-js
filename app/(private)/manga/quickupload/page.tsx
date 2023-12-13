import MangaQuickUploadForm from "./form";

export default function MangaQuickUpload(): React.ReactElement {

  return (<div className="flex flex-col lg:h-screen justify-center m-4">
    <div className="w-full md:w-3/4 lg:self-center border border-solid border-gray-300 dark:border-none shadow-md bg-card-accent dark:bg-cardD-accent py-4 px-4 rounded-lg hover:shadow-lg hover:shadow-DropdownBodyH">
      <h3>Content Shortcut</h3>
      <MangaQuickUploadForm />
    </div>
  </div>)
}