import {
  TranslateClient,
  CreateParallelDataCommand,
} from "@aws-sdk/client-translate";

function App() {
  // a client can be shared by different commands.
  const client = new TranslateClient({ region: "REGION" });

  const params = {
    /** input parameters */
  };
  const command = new CreateParallelDataCommand(params);

  client.send(command).then(
    (data) => {
      // process data.
    },
    (error) => {
      // error handling.
    }
  );

  return <div>RAWAJ</div>;
}

export default App;
