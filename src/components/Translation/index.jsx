import { useEffect, useState } from "react";
import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Modal from "./components/Modal";
import languages from "./countries.json";
import { translateText } from "../../api/translateAPI";

const Translate = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Arabic");
  const [textToTranslate, setTextToTranslate] = useState("Where is the metro");
  const [translatedText, setTranslatedText] = useState("");

  const languagesDict = languages.reduce(
    (acc, obj) => Object.assign(acc, obj),
    {}
  );

  // extract the language name from the object from [{"": ""}] to [""]
  const languagesList = languages.map((language) => Object.keys(language)[0]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      translate();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [textToTranslate]);

  const translate = async () => {
    if (textToTranslate === "") {
      setTranslatedText("");
      return;
    }

    console.log(
      textToTranslate,
      languagesDict[outputLanguage],
      languagesDict[inputLanguage]
    );
    const result = await translateText(
      textToTranslate,
      languagesDict[inputLanguage],
      languagesDict[outputLanguage]
    );
    console.log("result", result);
    setTranslatedText(result);
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);

    setTextToTranslate(translatedText);
    setTranslatedText(textToTranslate);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            // eslint-disable-next-line
            style="input"
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <div className="arrow-container" onClick={handleClick}>
            <Arrows />
          </div>
          <TextBox
            // eslint-disable-next-line
            style="output"
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            translatedText={translatedText}
          />
          {/* <div className="button-container" onClick={translate}>
            <Button />
          </div> */}
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          languages={languagesList}
          chosenLanguage={
            showModal === "input" ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === "input" ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
};

export default Translate;
