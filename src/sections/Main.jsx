import BookHalf from "@/icons/BookHalf"
import Clipboard from "../components/Clipboard"
import ArrowRight from "@/icons/ArrowRight"

const Main = () => {
  const code_build = `npm i bootstrap@5.3.3`

  return(
    <main className="px-6 py-12 mb-4 max-w-[1320px] w-full mx-auto
    md:w-2/3">
    <div className="flex flex-col justify-center items-center w-full mx-auto px-0">
      <a href="#" className="bg-yellow-300 text-black rounded-full py-[6px] px-4 text-base text-center mb-6">
        <span className="font-semibold">New! </span>
        Never-Ending Support for Bootstrap
        <ArrowRight className={"w-4 h-4 pl-1 inline-block"} />
      </a>
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="bootstrap-logo.png" className="w-52 py-4 hidden
      md:block"/>
      <h1 className="font-bold text-4xl text-center
      md:text-5xl
      lg:text-6xl">Build fast, responsive sites with Boostrap</h1>
      <p className="text-gray-400 text-center py-4
      md:text-xl
      lg:text-2xl">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>

      <div className="flex gap-3 justify-center items-center flex-wrap lg:flex-nowrap w-full text-xl
      ">
        <div className="flex items-center justify-center gap-4 border bg-gray-700 border-gray-600 text-gray-300 px-4 py-4 rounded-md basis-full text-lg
        md:justify-between
        lg:basis-auto">
          <div className="flex basis-full justify-center items-center">
            <span className="select-none mr-2">$</span>
            <code  className="">{code_build}</code>
          </div>
          <Clipboard content={code_build} className="hidden md:block"/>
        </div>
        <button className="flex justify-center items-center gap-2 bg-violet-500 border border-violet-400/70 px-8 py-5 rounded-md font-semibold basis-full
        lg:basis-auto">
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
    </div>
    </main>
  )
}

export default Main