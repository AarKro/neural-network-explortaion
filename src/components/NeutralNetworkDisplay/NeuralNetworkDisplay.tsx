import { useAtom } from "jotai";
import { FC, useMemo } from "react";
import { networkOutputAtom } from "../../jotaiStore";
import "./NeuralNetworkDisplay.css";

export const NeuralNetworkDisplay: FC = () => {
  const [ networkOutput ] = useAtom(networkOutputAtom);

  const predictions = useMemo(() => (
    Object.keys(networkOutput)
      .map((key) => ({ key, value: networkOutput[key] }))
  ), [networkOutput]);

  const sortedPredictionsByScore = useMemo(() => (
    [...predictions].sort((a, b) => b.value - a.value)
  ), [predictions]);

  const sortedPredictionsByKey = useMemo(() => (
    [...predictions].sort((a, b) => a.key.localeCompare(b.key))
  ), [predictions]);

  return (
    <div className="results">
      <div>
        <h4>Top Matches</h4>
        {sortedPredictionsByScore.slice(0, 3).map((prediction) => (
          <div key={prediction.key}>
            {prediction.key}: {(prediction.value * 100).toFixed(2)}%
          </div>
        ))}
      </div>
      <div>
        <h4>Predictions Table</h4>
        <div>
          <table>
            <tbody>
              {sortedPredictionsByKey.map((prediction) => (
                <tr key={prediction.key}>
                  <td>{prediction.key}</td>
                  <td>{(prediction.value * 100).toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <br/>
      <br/>
      <div dangerouslySetInnerHTML={{__html: getSvgOfNetwork()}}></div> */}
    </div>
  )
}