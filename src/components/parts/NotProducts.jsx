import questionIcon from "../../assets/img/component/question-mark.svg";

export default function NotProducts() {
  return (
    <div className="flex justify-center place-items-center bg-reno-sand-500 text-white w-80 sm:w-11/12 flex-wrap rounded-md p-3">
      <img src={questionIcon} className="w-10" /> No se encontraron productos que concuerden con
      la selección.
    </div>
  );
}
