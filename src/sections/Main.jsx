import BookHalf from "@/icons/BookHalf"
import Clipboard from "../components/Clipboard"
import ArrowRight from "@/icons/ArrowRight"

const Main = () => {
  const code_build = `npm i bootstrap@5.3.3`

  return(
    <main className=" py-10 mb-10 max-w-[1400px] w-2/3 mx-auto flex flex-col justify-center items-center">
      <a href="#" className="bg-yellow-300 text-black rounded-full py-1 px-4 text-sm">
        <span className="font-semibold">New! </span>
        Never-Ending Support for Bootstrap
        <ArrowRight className={"w-4 h-4 pl-1 inline-block"} />
      </a>
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="bootstrap-logo.png" className="h-40 py-4"/>
      <h1 className="font-bold text-6xl w-4/5 text-center">Build fast, responsive sites with Boostrap</h1>
      <p className="text-gray-400 text-center w-4/5 text-xl py-4">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-4 border bg-gray-700 border-gray-600 text-gray-300 px-4 py-4 rounded-md">
          <span className="select-none">$</span>
          <code  className="">{code_build}</code>
          <Clipboard content={code_build}/>
        </div>
        <button className="flex justify-center items-center gap-2 bg-violet-500 border border-violet-400/70 px-8 py-5 rounded-md font-semibold">
          <BookHalf/>
          Read the docs
        </button>
      </div>

      <div className="my-6 text-center space-x-2 opacity-60">
        <span>Currently</span>
        <span className="font-semibold">
          v5.3.3  
        </span>
        <span>·</span>
        <a href="#" className="text-blue-400 underline hover:text-blue-500">
          Download
        </a>
        <span>·</span>
        <a href="#" className="text-blue-400 underline hover:text-blue-500">
          All releases
        </a>
      </div>
      <a href="#" className="bg-gray-700 rounded-md p-4 flex justify-center gap-4 max-w-md">
        <img src="https://srv.carbonads.net/static/30242/4f7f59796c5dda8f5dfc63a40583dfde7cebb050" alt="ads_carbon" className="w-36"/>
        <div className="text-sm">
          <p className="mb-4">Design and Development tips in your inbox. Every weekday.</p>
          <p>ads vía Carbon</p>
        </div>
      </a>
    </main>
  )
}

export default Main