import * as React from "react"
import Layout from "../layout"
import { Link } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <main>
      <title>Andrew Ramell's Website</title>
      <Layout styles="max-w-none">
        <div class="text-white p-8 flex justify-between">
          <p class="max-w-sm">
            Hi there! My name is Andrew and i'm a front end developer that
            previously worked in Financial Services. I am always looking to
            learn something new or help new developers get started in
            technology. Please{" "}
            <Link
              class="no-underline"
              rel="noreferrer"
              target="_blank"
              href="mailto:andrew.ramell@gmail.com"
            >
              reach out
            </Link>
            !
          </p>
          <StaticImage
            src="../images/andrew.png"
            alt="Andrew professional photo"
            width={200}
            height={200}
            className="rounded"
          />
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
