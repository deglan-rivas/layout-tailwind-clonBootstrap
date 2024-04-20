import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '@/components/Clipboard';
import Braces from '@/icons/Braces';
import ArrowRight from '@/icons/ArrowRight';

const Building = () => {
  const code_using = `
  .component {
    color: var(--bs-gray-800);
    background-color: var(--bs-gray-100);
    border: 1px solid var(--bs-gray-200);
    border-radius: .25rem;
  }
  
  .component-header {
    color: var(--bs-purple);
  }
  `
  const code_customizing = `
  body {
    --bs-body-font-family: var(--bs-font-monospace);
    --bs-body-line-height: 1.4;
    --bs-body-bg: var(--bs-gray-100);
  }
  
  .table {
    --bs-table-color: var(--bs-gray-600);
    --bs-table-bg: var(--bs-gray-100);
    --bs-table-border-color: transparent;
  }
  `

  return (
    <section className="max-w-[1320px] w-full px-6 mx-auto mb-12 pb-12">
      <div className="w-full mb-12
      lg:w-7/12">
        <div className="bg-red-800/15 p-4 inline-block rounded-2xl mb-4">
          <Braces className={"text-red-400 w-10 h-10"}/>
        </div>
        <h2 className="text-3xl font-bold mb-4
        md:text-4xl
        lg:text-5xl">Build and extend in real-time with CSS variables</h2>
        <p className="text-base mb-4
        md:text-xl">Bootstrap 5 is evolving with each release to better utilize CSS variables for global theme styles, individual components, and even utilities. We provide dozens of variables for colors, font styles, and more at a <code className="text-red-400">:root</code> level for use anywhere. On components and utilities, CSS variables are scoped to the relevant class and can easily be modified.</p>
        <div className="group font-semibold text-blue-400 inline-flex items-center md:text-xl">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about CSS variables
          </div>
          <ArrowRight className={"inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"}/>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="mb-4 col-span-2
        lg:col-span-1">
          <h3 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">Using CSS variables</h3>
          <p className="mb-4">Use any of our <a href="#" className="text-blue-400 underline hover:brightness-125">global :root variables</a> to write new styles. CSS variables use the <code className="text-red-400 text-sm">var(--bs-variableName)</code> syntax and can be inherited by children elements.</p>
          
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex justify-between bg-[#1c1c21] w-screen -ml-6 md:w-full md:ml-0">
            <SyntaxHighlighter language='' style={anOldHope}>
              {code_using}
            </SyntaxHighlighter>
            <div className='flex items-center'>
              <Clipboard content={code_using}/>
            </div>
          </div>
        </div>
        <div className="mb-4 col-span-2
        lg:col-span-1">
          <h3 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">Customizing via CSS variables</h3>
          <p className="mb-4">Override global, component, or utility class variables to customize Bootstrap just how you like. No need to redeclare each rule, just a new variable value.</p>
          
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex justify-between bg-[#1c1c21] w-screen -ml-6 md:w-full md:ml-0">
            <SyntaxHighlighter language='' style={anOldHope}>
              {code_customizing}
            </SyntaxHighlighter>
            <div className='flex items-center'>
              <Clipboard content={code_customizing}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Building