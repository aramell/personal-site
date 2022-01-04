import React from "react"
import { Link } from "gatsby"

// const headerConst = ["Home", "About", "Blog", "Resume"]

// const headerLoop = headerConst => {
//   headerConst.map(header => {
//     ;<Link class="" color="primary" to={header === "Home" ? "/" : `/${header}`}>
//       {header}
//     </Link>
//   })
// }

const Header = () => (
  <div className="font-sans p-2 m-auto flex justify-center space-x-5 h-12 hover:bg-gray-300">
    <Link color="primary" to="/" activeClassName="underline">
      Home
    </Link>
    {/* <Link color="primary" to="/about">
      About
    </Link> */}
    {/* <Link color="primary" to="/blog" activeClassName="">
      Blog
    </Link> */}
    <Link color="primary" to="/resume" activeClassName="underline">
      Resume
    </Link>
  </div>
)

export default Header
