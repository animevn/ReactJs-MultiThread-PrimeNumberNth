import React, {createContext, Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import {wrap, Remote, releaseProxy} from "comlink";
import {MyWorker} from "../utils/lib/worker";

export interface ShareContextProps {
  value1:string,
  setValue1:Dispatch<SetStateAction<string>>,
  value2:string,
  setValue2:Dispatch<SetStateAction<string>>,
  prime1:string,
  setPrime1:Dispatch<SetStateAction<string>>,
  prime2:string,
  setPrime2:Dispatch<SetStateAction<string>>,
  onCalculateOne:()=>void,
  onCalculateTwo:()=>void
}

export const ShareContext = createContext<Partial<ShareContextProps>>({});

export interface ShareContextInterface {
  children:React.ReactNode
}

export const ShareContextProvider = (props:ShareContextInterface)=>{
  const {children} = props;
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [prime1, setPrime1] = useState("");
  const [prime2, setPrime2] = useState("");

  const workerRef1 = useRef<Worker>();
  const workerApiRef1 = useRef<Remote<MyWorker>>();

  const workerRef2 = useRef<Worker>();
  const workerApiRef2 = useRef<Remote<MyWorker>>();

  useEffect(()=>{
    workerRef1.current = new Worker("../utils/lib/worker", {type: "module"});
    workerApiRef1.current = wrap<MyWorker>(workerRef1.current);

    workerRef2.current = new Worker("../utils/lib/worker", {type: "module"});
    workerApiRef2.current = wrap<MyWorker>(workerRef2.current);

    return ()=>{
      workerRef1.current && workerRef1.current.terminate();
      workerApiRef1.current && workerApiRef1.current[releaseProxy]();

      workerRef2.current && workerRef2.current.terminate();
      workerApiRef2.current && workerApiRef2.current[releaseProxy]();
    }
  }, []);

  const onCalculateOne = async ()=>{
    setPrime1("...");
    const result = workerApiRef1.current && await workerApiRef1.current.getValue(value1);
    setPrime1(result ? String(result) : "");
  };

  const onCalculateTwo = async ()=>{
    setPrime2("...");
    const result = workerApiRef2.current && await workerApiRef2.current.getValue(value2);
    setPrime2(result ? String(result) : "");
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