// import { TranslateClient, Translate } from "@aws-sdk/client-translate";

import * as AWS from "aws-sdk";

function App() {
  // (async () => {
  //   const translate = new TranslateClient({
  //     region: "us-east-1",
  //     credentials: {
  //       accessKeyId: "AKIAUK55A4PVJJMCNF7S",
  //       secretAccessKey: "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",
  //     },
  //   });

  //   console.log(translate);

  //   Translate.translateText({
  //     SourceLanguageCode: "en",
  //     TargetLanguageCode: "ar",
  //     Text: "Hello World",
  //   });

  //   // console.log(Translate);
  // })();

  AWS.config.update({
    region: "us-east-1",
    credentials: {
      accessKeyId: "AKIAUK55A4PVJJMCNF7S",
      secretAccessKey: "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",
    },
  });

  const translate = new AWS.Translate();

  (async () => {
    const translateParams = {
      Text: "I m on my way to Al Bayt Stadium",
      SourceLanguageCode: "en",
      TargetLanguageCode: "ar",
    };

    const translatedMessage = await translate
      .translateText(translateParams)
      .promise();
    console.log(translatedMessage);
  })();

  return <div>RAWAJ</div>;
}

export default App;
