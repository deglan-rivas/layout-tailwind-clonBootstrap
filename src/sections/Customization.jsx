import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '@/components/Clipboard';

const Customization = () => {
  const code_all = `
  // Variable overrides first
  $primary: #900;
  $enable-shadows: true;
  $prefix: "mo-";
  
  // Then import Bootstrap
  @import "../node_modules/bootstrap/scss/bootstrap";
  `
  const code_needs = `
  // Functions first
  @import "../node_modules/bootstrap/scss/functions";

  // Variable overrides second
  $primary: #900;
  $enable-shadows: true;
  $prefix: "mo-";

  // Required Bootstrap imports
  @import "../node_modules/bootstrap/scss/variables";
  @import "../node_modules/bootstrap/scss/variables-dark";
  @import "../node_modules/bootstrap/scss/maps";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/root";

  // Optional components
  @import "../node_modules/bootstrap/scss/utilities";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/containers";
  @import "../node_modules/bootstrap/scss/grid";
  @import "../node_modules/bootstrap/scss/helpers";
  @import "../node_modules/bootstrap/scss/utilities/api";
  `

  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto mb-12 pb-12">
      <div className="w-7/12 mb-12">
        <div className="bg-blue-600/25 p-4 inline-block rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-palette2 text-blue-500/55 w-10 h-10" viewBox="0 0 16 16">
            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold mb-4">Customize everything with Sass</h2>
        <p className="max-w-lg text-lg mb-4">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows, and write your own CSS with our variables, maps, functions, and mixins.</p>
        <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about customizing
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div>
          <h3 className="text-3xl mb-2 font-semibold">Include all of Bootstrap's Sass</h3>
          <p className="mb-4">Import one stylesheet and you're off to the races with every feature of our CSS.</p>
          
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 bg-[#1c1c21] flex justify-between">
            <SyntaxHighlighter language='' style={anOldHope}>
              {code_all}
            </SyntaxHighlighter>
            <div className=' flex items-center'>
              <Clipboard content={code_all}/>
            </div>
          </div>
          <p className="mb-4">Learn more about our <a href="#" className="text-blue-400 underline hover:brightness-125">global Sass options</a>.</p>
        </div>
        <div>
          <h3 className="text-3xl mb-2 font-semibold">Include what you need</h3>
          <p className="mb-4">The easiest way to customize Bootstrap—include only the CSS you need.</p>
          
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 bg-[#1c1c21] flex justify-between">
            <SyntaxHighlighter language='' style={anOldHope}>
              {code_needs}
            </SyntaxHighlighter>
            <div className=' flex items-center'>
              <Clipboard content={code_needs}/>
            </div>
          </div>
          <p className="mb-4">Learn more about <a href="#" className="text-blue-400 underline hover:brightness-125">using Bootstrap with Sass</a>.</p>
        </div>
      </div>
    </section>
  )
}

export default Customization