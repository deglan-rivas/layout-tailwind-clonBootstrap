import ArrowRight from "@/icons/ArrowRight"
import Geometry from "@/icons/Geometry"

const Personalization = () => {
  return (
    <section className="max-w-[1320px] w-full px-6 mx-auto pb-12 mb-12 grid grid-cols-2 gap-12">
    <div className="col-span-2 lg:col-span-1">
      <div className="bg-emerald-600/35 text-emerald-300 p-4 inline-block rounded-2xl mb-4">
          <Geometry className={"w-8 h-8"}/>
      </div>
      <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">Personalize it with Bootstrap Icons</h2>
      <p className="text-base mb-4 md:text-xl"><a href="#" className="text-blue-400 underline hover:brightness-125">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.</p>
      <div className="group font-semibold text-blue-400 inline-flex items-center">
        <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4 text-base md:text-xl">
          Get Bootstrap Icons
        </div>
        <ArrowRight className={"inline-block w-4 h-4 lg:w-5 lg:h-5 ml-1 group-hover:translate-x-1 transition-transform"} />
      </div>
    </div>

    <div className="col-span-2 flex items-center lg:col-span-1">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png" alt="bootstrap_png"  className="w-full"/>
    </div>
    </section>
  )
}

export default Personalization