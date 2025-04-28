<div className="navbar fixed top-0 z-50 w-full bg-purple-900 text-white shadow-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost lg:hidden text-white hover:bg-purple-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-purple-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
      >
        <li>
          <a className="hover:bg-purple-700">Item 1</a>
        </li>
        <li>
          <a className="hover:bg-purple-700">Parent</a>
          <ul className="p-2 bg-purple-800">
            <li>
              <a className="hover:bg-purple-700">Submenu 1</a>
            </li>
            <li>
              <a className="hover:bg-purple-700">Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a className="hover:bg-purple-700">Item 3</a>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white hover:bg-purple-800">
      Alfred
    </a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      <li>
        <a className="hover:bg-purple-800">Item 1</a>
      </li>
      <li>
        <details>
          <summary className="cursor-pointer hover:bg-purple-800 rounded">
            Parent
          </summary>
          <ul className="p-2 bg-purple-800 rounded-box">
            <li>
              <a className="hover:bg-purple-700">Submenu 1</a>
            </li>
            <li>
              <a className="hover:bg-purple-700">Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a className="hover:bg-purple-800">Item 3</a>
      </li>
    </ul>
  </div>

  <div className="navbar-end">
    <a className="btn bg-purple-600 hover:bg-purple-500 text-white">Button</a>
  </div>
</div>;
