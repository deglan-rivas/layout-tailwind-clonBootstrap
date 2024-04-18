import ArrowRight from "@/icons/ArrowRight"
import Geometry from "@/icons/Geometry"

const Personalization = () => {
  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto pb-12 mb-12 grid grid-cols-2 gap-12">
    <div className="col-span-1">
      <div className="bg-emerald-600/35 text-emerald-300 p-4 inline-block rounded-2xl mb-4">
          <Geometry className={"w-8 h-8"}/>
      </div>
      <h2 className="text-5xl font-bold mb-4">Personalize it with Bootstrap Icons</h2>
      <p className="max-w-lg text-lg mb-4"><a href="#" className="text-blue-400 underline hover:brightness-125">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.</p>
      <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
        <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
          Get Bootstrap Icons
        </div>
        <ArrowRight className={"inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"}/>
      </div>
    </div>

    <div className="col-span-1 flex items-center">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png" alt="bootstrap_png"  className="w-full"/>
    </div>
    </section>
  )
}

export default Personalization