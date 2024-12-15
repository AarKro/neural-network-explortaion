import { useAtom } from "jotai";
import { FC } from "react";
import { networkOutputAtom } from "../../jotaiStore";

export const NeuralNetworkDisplay: FC = () => {
  const [ networkOutput ] = useAtom(networkOutputAtom);

  return (
    <div>
      {JSON.stringify(networkOutput)}
    </div>
  )
}