import * as React from "react";
import { Analytics } from "@vercel/analytics/react";
import Form from "./components/Form";
import { Chip } from "@nextui-org/react";

function App() {
  // Subtext of "Made By" & "View on Github"
  const BottomText = () => {
    return (
      <>
        <div className="subtitle flex flex-col gap-4">
          <a
            href="https://github.com/Jp88Programmer/URL_SHORTENER"
            target="_blank"
            rel="noreferrer"
          >
            <Chip
              color="default"
              variant="faded"
              radius="full"
              endContent={<i className="devicon-github-original"></i>}
            >
              View Github Repository
            </Chip>
          </a>

          <Chip
            color="primary"
            variant="bordered"
            radius="full"
            style={{ borderColor: "#00bbff", color: "#00bbff" }}
          >
            Made with by Jayendra Parmar
          </Chip>
        </div>
      </>
    );
  };

  // Main Image of Website. Onclick will re-navigate to the website
  const TitleImage = () => {
    return (
      <h1 className="text-blue-600 text-4xl">URL SHORTENER</h1>
    );
  };

  return (
    <>
      {/* <Analytics />  */}
      {/* Vercel Analytics */}
      <div className="h-screen w-screen flex flex-col justify-center gap-5 items-center text-center dark text-foreground bg-background">
        <TitleImage />
        <br />
        <Form />
        <br></br>
        <BottomText />
      </div>
    </>
  );
}

export default App;
