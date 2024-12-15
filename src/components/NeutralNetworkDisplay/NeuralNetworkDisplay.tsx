import { useAtom } from "jotai";
import { FC, useMemo } from "react";
import { networkOutputAtom } from "../../jotaiStore";

export const NeuralNetworkDisplay: FC = () => {
  const [ networkOutput ] = useAtom(networkOutputAtom);

  const sortedPredictions = useMemo(() => (
    Object.keys(networkOutput)
      .map((key) => ({ key, value: networkOutput[key] }))
      .sort((a, b) => b.value - a.value)
  ), [networkOutput]);

  return (
    <div>
      {sortedPredictions.slice(0, 3).map((prediction) => (
        <div key={prediction.key}>
          {prediction.key}: {(prediction.value * 100).toFixed(2)}%
        </div>
      ))}
      {/* <br/>
      <br/>
      <div dangerouslySetInnerHTML={{__html: getSvgOfNetwork()}}></div> */}
    </div>
  )
}