import { useWindowScroll } from '@uidotdev/usehooks';
import React, { useRef } from 'react';
import { useScrollDirection } from './hooks/useScrollDirection';
import MenuBtn from './MenuBtn';

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [{ y }] = useWindowScroll();
  const direction = useScrollDirection();

  const closeNavbar = () =>
    setTimeout(() => navbarRef.current?.classList.add('hide'), 1000);

  // ${direction === 'down' ? ' hide' :

  return (
    <header
      ref={navbarRef}
      id='nav-bar'
      className={`fixed top-0 inset-x-0 z-30 transition-all ${
        y ? 'bg-slate-700/30 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center max-container py-2'>

        <a href='/'>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 500.000000 500.000000'
            preserveAspectRatio='xMidYMid meet'
            className='w-10 md:w-12 h-10 md:h-12 fill-current text-slate-100 hover:text-slate-200 transition-colors duration-300 ease-in-out'
          >
            <g
              transform='translate(0.000000,500.000000) scale(0.100000,-0.100000)'
              stroke='none'
            >
              <path
                d='M2340 3963 c-193 -14 -493 -91 -655 -167 -241 -113 -458 -285 -597
-471 -154 -207 -238 -444 -238 -673 0 -120 16 -202 62 -313 98 -238 320 -393
538 -376 76 6 147 29 203 64 21 13 40 23 41 21 2 -2 13 -30 25 -63 78 -214
280 -354 511 -355 157 0 301 -51 385 -135 80 -79 133 -158 186 -274 80 -174
92 -195 128 -218 88 -59 201 5 201 114 0 51 -34 96 -88 114 -42 14 -55 27 -82
84 -17 36 -20 64 -20 260 -1 247 -7 277 -59 312 -33 22 -42 23 -236 23 l-203
0 -52 -36 c-75 -52 -129 -67 -209 -62 -89 7 -151 36 -217 103 -94 97 -117 170
-112 358 l3 118 60 3 c33 1 70 9 82 16 43 27 56 96 28 150 -17 33 -33 39 -115
42 l-55 3 -3 233 -2 232 150 0 150 0 0 -53 c0 -45 -4 -58 -26 -78 -42 -39 -57
-76 -52 -134 15 -180 257 -198 310 -24 14 50 -1 106 -42 153 -25 28 -30 42
-30 85 l0 51 150 0 150 0 0 -235 0 -234 -75 1 c-66 2 -78 -1 -99 -21 -32 -30
-41 -71 -26 -116 17 -52 43 -65 127 -65 l73 0 0 -137 c0 -217 7 -223 288 -223
l172 0 0 -256 c0 -285 4 -312 59 -375 122 -143 300 -91 551 161 151 151 275
341 341 521 77 210 97 511 50 734 -83 395 -387 759 -806 965 -259 128 -623
196 -925 173z m270 -448 l0 -275 -380 0 -380 0 0 219 0 219 108 35 c59 19 126
38 150 42 l42 7 0 -57 c0 -49 -4 -60 -25 -77 -49 -38 -69 -111 -46 -171 14
-37 68 -85 108 -96 85 -24 183 40 198 127 8 48 -20 123 -54 144 -18 11 -21 23
-21 85 l0 73 150 0 150 0 0 -275z m320 214 c107 -28 111 -32 76 -68 -39 -41
-47 -120 -17 -169 41 -65 112 -86 191 -58 43 16 83 85 78 134 -2 17 -1 32 2
32 12 0 177 -114 227 -157 l51 -44 -48 -48 c-31 -31 -50 -59 -52 -77 l-3 -29
-84 -3 c-46 -2 -97 2 -113 7 -33 12 -67 2 -98 -29 -30 -30 -28 -99 4 -133 l25
-26 130 6 131 6 0 -144 c0 -79 5 -160 10 -180 18 -65 33 -69 268 -69 l209 0 7
-37 c3 -21 6 -60 6 -87 0 -63 -21 -226 -29 -226 -3 0 -16 15 -28 34 -37 57
-92 76 -219 76 l-110 0 -59 61 c-80 82 -118 99 -224 99 l-84 0 26 24 c60 56
77 147 38 210 -44 70 -120 93 -195 56 -103 -49 -122 -173 -40 -255 l35 -35
-131 0 -130 0 0 215 0 215 55 0 c46 0 59 4 90 31 104 92 35 262 -102 246 l-43
-5 0 230 0 230 38 -6 c20 -4 71 -16 112 -27z m-1240 -258 l0 -130 -53 6 c-49
5 -56 3 -89 -26 -45 -39 -62 -80 -56 -135 9 -80 63 -126 147 -126 l51 0 0
-229 0 -229 -104 -4 c-98 -3 -106 -5 -133 -30 -17 -16 -40 -28 -55 -28 -31 0
-82 -40 -103 -81 -43 -81 16 -191 109 -206 43 -7 118 26 141 61 10 15 20 46
23 71 l5 45 58 0 59 0 0 -61 c0 -59 -1 -61 -52 -116 -70 -74 -115 -95 -208
-101 -61 -3 -86 0 -134 18 -147 56 -260 235 -273 433 l-6 87 107 0 c126 0 158
11 208 69 19 22 43 41 52 41 37 0 83 32 106 71 56 100 -13 222 -124 222 -89 0
-149 -63 -145 -154 3 -67 -12 -79 -103 -79 -37 0 -68 4 -68 8 0 36 86 229 136
307 59 91 189 224 290 299 109 80 182 126 202 126 9 0 12 -32 12 -129z m2021
-266 c73 -94 169 -295 169 -349 0 -3 -63 -6 -140 -6 l-140 0 0 177 0 177 27
28 c15 16 32 27 38 25 5 -2 26 -25 46 -52z m-413 -794 c20 -11 57 -40 82 -66
66 -68 84 -75 197 -75 54 0 115 -5 136 -11 32 -9 37 -14 37 -40 0 -22 -6 -32
-24 -39 -36 -13 -66 -62 -66 -109 0 -53 14 -82 55 -110 20 -14 32 -28 28 -37
-4 -12 -49 -14 -254 -14 l-249 0 0 99 c0 120 -11 154 -58 183 -34 21 -50 23
-219 26 l-183 4 0 104 0 104 240 0 c218 0 244 -2 278 -19z m-528 -741 c0 -38
-4 -70 -8 -70 -5 0 -17 10 -28 21 -10 12 -48 44 -83 70 l-64 49 92 0 91 0 0
-70z m750 -11 c-81 -77 -189 -149 -223 -149 -8 0 -25 12 -36 26 -18 23 -21 41
-21 115 l0 89 183 0 182 -1 -85 -80z'
              />
              <path
                d='M3409 2191 c-37 -37 -38 -79 -3 -120 35 -42 84 -43 125 -2 39 39 40
92 3 126 -38 35 -87 34 -125 -4z'
              />
              <path
                d='M2148 2280 c-50 -27 -78 -76 -78 -137 0 -155 189 -207 284 -79 29 38
29 124 0 162 -52 70 -136 92 -206 54z'
              />
            </g>
          </svg>
        </a>
        {/* Links */}
        <MenuBtn closeNavbarHandler={closeNavbar} />
        <div className='gap-10 hidden md:flex'>{children}</div>
      </div>
    </header>
  );
};

export default Navbar;
