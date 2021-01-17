import React from "react";
import IndexContent from "../src/content/index-content/IndexContent";
import PageLayout from "../src/components/PageLayout";

export default function Home() {

  return (
    <PageLayout headTitle="Home">
      <IndexContent/>
    </PageLayout>
  )
}

