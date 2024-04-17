// "use client"
import { useState } from "react"
import './Header.css'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


const Header = () => {
  const [position, setPosition] = useState("v5.3.x")
  const [lightMode, setLightMode] = useState("auto")

  return (
    <header className="bg-violet-800/90 sticky top-0">
      <div className="container mx-auto flex justify-between items-center text-gray-200 py-3 font-medium">
        <nav className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="d-block my-1 w-10 h-8 hover:scale-110 hover:-rotate-12 transition-transform cursor-pointer" viewBox="0 0 118 94" role="img"><title>Bootstrap</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor">          
            </path>
          </svg>
          <div className="hover:text-white cursor-pointer">Docs</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Examples</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Icons</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Themes</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Blog</div>
        </nav>
        <div className="absolute w-64 bg-violet-800/55 left-1/2 -translate-x-1/2 flex justify-between items-center p-2 text-white/50 rounded-md border border-gray-400/60 cursor-pointer group hover:bg-violet-800 hover:border-white hover:ring hover:ring-pink-300">
          <div className="flex items-center group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search w-4 h-5" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <div className="font-semibold pl-2">
              Search
            </div>
          </div>
          <div className="flex bg-violet-900 px-2 py-[2px] rounded-md items-center gap-1 ">
            <svg width="15" height="15" className="DocSearch-Control-Key-Icon">
              <path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="square"></path>
            </svg>
            <kbd className="text-sm -tracking-tighter">K</kbd>
          </div>
        </div>
        <div className="flex divide-x items-center">
          <div className="flex space-x-3 items-center pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-github hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-twitter hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-opencollective hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
              <path fillOpacity=".4" d="M12.995 8.195c0 .937-.312 1.912-.78 2.693l1.99 1.99c.976-1.327 1.6-2.966 1.6-4.683 0-1.795-.624-3.434-1.561-4.76l-2.068 2.028c.468.781.78 1.679.78 2.732z"/>
              <path d="M8 13.151a4.995 4.995 0 1 1 0-9.99c1.015 0 1.951.273 2.732.82l1.95-2.03a7.805 7.805 0 1 0 .04 12.449l-1.951-2.03a5.07 5.07 0 0 1-2.732.781z"/>
            </svg>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="px-3 flex items-center space-x-2 group">
                <p className="group-hover:brightness-200 group-hover:text-white cursor-pointer">v5.3</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-2 h-2 bi bi-caret-down-fill group-hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-500">
              <DropdownMenuLabel className="text-gray-400 px-4 py-[6px]">v5 releases</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="v5.3.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">Latest (5.3.x)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.2.3" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.2.3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.1.3" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.1.3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.0.2" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.0.2</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator className="bg-gray-400 my-2"/>
              <DropdownMenuLabel className="text-gray-400 px-4 py-[6px]">Previous releases</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="v4.6.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v4.6.x</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v3.4.1" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v3.4.1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v2.3.2" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v2.3.2</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator className="bg-gray-400 my-2"/>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                {/* agregar un disabled al All versions para hacer pruebas con el Header.css, pero gana el tailwindcss, revisar notion */}
                {/* <DropdownMenuRadioItem value="vx.x.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[disabled]:bg-red-400" data-[state=unchecked]:text-green-400 disabled>All versions</DropdownMenuRadioItem> */}
                <DropdownMenuRadioItem value="vx.x.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">All versions</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="pl-3 py-1 flex items-center space-x-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 bi bi-moon-stars-fill group-hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-2 h-2 bi bi-caret-down-fill group-hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-500">
              <DropdownMenuRadioGroup value={lightMode} onValueChange={setLightMode}>
                <DropdownMenuRadioItem value="light" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                  </svg>
                  <p>Light</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                  <p>Dark</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="auto" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
                  </svg>
                  <p>Auto</p>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Header