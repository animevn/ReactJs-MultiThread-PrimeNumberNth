import React, {createContext, useEffect, useRef, useState} from "react";
import * as ComLink from "comlink";

export const ShareContext = createContext(null);

export const ShareContextProvider = ({children})=>{
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [prime1, setPrime1] = useState();
  const [prime2, setPrime2] = useState();

  const comLinkWorkerRef1 = useRef();
  const comLinkWorkerApiRef1 = useRef();

  const comLinkWorkerRef2 = useRef();
  const comLinkWorkerApiRef2 = useRef();

  useEffect(()=>{
    comLinkWorkerRef1.current = new Worker("./worker1", {type: "module"});
    comLinkWorkerApiRef1.current = ComLink.wrap(comLinkWorkerRef1.current);

    comLinkWorkerRef2.current = new Worker("./worker2", {type: "module"});
    comLinkWorkerApiRef2.current = ComLink.wrap(comLinkWorkerRef2.current);

    return ()=>{
      comLinkWorkerRef1.current.terminate();
      comLinkWorkerRef2.current.terminate();
    }
  }, []);

  const onCalculateOne = async ()=>{
    setPrime1("...");
    const result = await ComLink.wrap(comLinkWorkerRef1.current).getValue(value1);
    setPrime1(result);
  };

  const onCalculateTwo = async ()=>{
    setPrime2("...");
    const result = await ComLink.wrap(comLinkWorkerRef2.current).getValue(value2);
    setPrime2(result);
  };

  return (
    <ShareContext.Provider
      value={{
        prime1, setPrime1, prime2, setPrime2, value1, setValue1, value2, setValue2,
        onCalculateOne, onCalculateTwo
      }}
    >
      {children}
    </ShareContext.Provider>
  )

};