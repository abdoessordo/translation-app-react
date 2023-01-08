import * as AWS from "aws-sdk";
import creds from "../config.json";

const { accessKeyId, secretAccessKey } = creds.translate;

AWS.config.update({
  region: "us-east-1",
  credentials: { accessKeyId, secretAccessKey },
});

const translate = new AWS.Translate();

export async function translateText(text, source, target) {
  const translateParams = {
    Text: text,
    SourceLanguageCode: source,
    TargetLanguageCode: target,
  };

  const translatedMessage = await translate
    .translateText(translateParams)
    .promise();
  console.log(translatedMessage);
}
