import React, { useEffect } from "react";
import style from "./PartFormEditor.module.scss";
import { selectPart, selectStatus, setPart } from "../redux/partEditorSlice";
import { useAppDispatch } from "../../App/redux/store";
import { useSelector } from "react-redux";

export type PartFormEditorProps = {
  partId: string;
};

const PartFormEditor = ({ partId }: PartFormEditorProps) => {
  const status = useSelector(selectStatus);
  const part = useSelector(selectPart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPart(partId));
  }, [partId]);

  if (status === "loading") {
    // TODO: Make use of localisation library
    return <div>Loading...</div>;
  }

  if (!part) {
    // TODO: Make use of localisation library
    return <div>Part not found</div>;
  }

  return (
    <div className={style["container"]}>
      <h1>PartFormEditor</h1>
      <p>Part ID: {part.id}</p>
      <p>Name: {part.name}</p>
      <p>Description: {part.description}</p>
    </div>
  );
};

export default PartFormEditor;
