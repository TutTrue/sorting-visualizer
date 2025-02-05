import { memo, useEffect, useRef } from "react";

import ArrayUI from "@/apps/sorting-visualizer/components/array/array-ui";
import Header from "./header";
import { VisualizerProps } from "@/apps/sorting-visualizer/models/interfaces";
import classes from "./visualizer.module.scss";
import useAlgo from "@/apps/sorting-visualizer/hooks/use-algo.hook";

const Visualizer = memo(function Visualizer({
  array,
  algoFn,
  algoName = "Bubble",
  onComplete,
}: VisualizerProps) {
  const sortingArray = useRef([...array]);

  const {
    swaps,
    pivot,
    compares,
    isCompleted,
    swapPositions,
    sortPositions,
    highlightPositions,
    movePositions,
  } = useAlgo(sortingArray.current, algoFn);

  useEffect(() => {
    if (isCompleted) {
      onComplete();
    }
  }, [isCompleted, onComplete]);

  return (
    <section className={classes.container}>
      <Header algoName={algoName} isCompleted={isCompleted} />

      <ArrayUI
        pivot={pivot}
        array={sortingArray.current}
        swapPositions={swapPositions}
        highlightPositions={highlightPositions}
        sortPositions={sortPositions}
        movePositions={movePositions}
      />

      <footer>
        <span>
          Swaps: <strong>{swaps}</strong>
        </span>
        <span>
          Comparisons: <strong>{compares}</strong>
        </span>
      </footer>
    </section>
  );
});

export default Visualizer;
