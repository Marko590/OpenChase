import React from "react";
interface SetupContainerProps {
  title: string;
  children: React.ReactNode;
  colspan?: string;
}
const SetupContainer: React.FC<SetupContainerProps> = ({ title, children }) => {
  return (
    <div
      className={`flex self-start flex-col gap-8 items-center justify-center px-4 py-4 w-full bg-[#303134] rounded-2xl max-w-lg mx-auto`}
    >
      <span>{title}</span>
      <div className="flex flex-col gap-8 py-16 px-16 h-full bg-stone-900 rounded-md border-dotted border-slate-200:width">
        {children}
      </div>
    </div>
  );
};

export default SetupContainer;
