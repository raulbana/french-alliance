import Button from "@/app/components/Button/Button";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface BorderedCardProps {
  title?: string;
  content?: string;
  imageUrl?: string | StaticImageData;
  onClick?: () => void;
  titleColor?: string;
  contentColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  extraClasses?: string;
}

const BorderedCard = ({
  title,
  content,
  imageUrl,
  onClick,
  titleColor = "text-french-blue",
  contentColor = "text-french-black",
  backgroundColor = "bg-transparent",
  borderColor = "border-blue-700",
  extraClasses,
}: BorderedCardProps) => {
  return (
    <div
      className={`flex flex-col p-4 gap-4 border rounded-lg ${backgroundColor} ${borderColor} ${extraClasses}`}
    >
      {imageUrl && (
        <div
          className="flex justify-center items-center rounded-lg overflow-hidden w-full"
          style={{ height: 180 }}
        >
          <Image
            src={imageUrl}
            alt={`card-image-${title}`}
            className="rounded-xl object-cover w-full h-full"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: 180,
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <h2 className={`text-lg font-semibold ${titleColor}`}>{title}</h2>
      <p className={`text-sm ${contentColor}`}>{content}</p>
      {onClick && (
        <div className="flex flex-1 justify-end items-end">
          <Button label={"Saiba mais"} type="SECONDARY" onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default BorderedCard;
