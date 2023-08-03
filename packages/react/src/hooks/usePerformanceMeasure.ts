import * as React from 'react';
import { measureJavascript, measureLayout } from '@stress-test/tools';

// Probably won't use this but leaving it for reference for now
// export const usePerformanceMeasure = () => {
//     const startTime = React.useRef<number>(performance.now());
//     React.useLayoutEffect(() => {
//         measureJavascript(startTime.current, performance.now());
//         measureLayout();
//     }, []);
// };

export const useMeasure = () => {
    const startTime = React.useRef<number>(-1);

    const startMeasure = () => {
        startTime.current = performance.now();
    }
    const endMeasure = () => {
        measureJavascript(startTime.current, performance.now());
        measureLayout();
    };
    return { startMeasure, endMeasure };
};