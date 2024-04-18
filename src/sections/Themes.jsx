import ArrowRight from "@/icons/ArrowRight"
import Droplet from "@/icons/Droplet"

const Themes = () => {
  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto pb-12 mb-12 grid grid-cols-2 gap-12">
    <div className="col-span-1">
      <div className="bg-violet-600/25 text-violet-500 p-4 inline-block rounded-2xl mb-4">
        <Droplet className={"w-8 h-8"} />
      </div>
      <h2 className="text-5xl font-bold mb-4">Make it yours with official Bootstrap Themes</h2>
      <p className="max-w-lg text-lg mb-4">Take Bootstrap to the next level with premium themes from the <a href="#" className="text-blue-400 underline hover:brightness-125">official Bootstrap Themes marketplace</a>. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.</p>
      <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
        <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
          Browse Bootstrap Themes
        </div>
        <ArrowRight className={"inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"}/>
      </div>
    </div>

    <div className="col-span-1 flex items-center">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-themes.png" alt="themes_png"  className="w-full"/>
    </div>
    </section>
  )
}

export default Themes